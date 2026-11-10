#!/usr/bin/env node
// Book tool: render the whole book (README, chapters, appendices, labs README) into one
// colourful HTML page for publishing as an Artifact.
// Usage: node tools/build-artifact.mjs <path to marked.esm.js> <output.html>
// Cross-file Markdown links become in-page anchors; links to other repo files
// (labs/, evidence/, tools/) point at the repository on GitHub.
// Styling hooks added on top of plain Markdown:
//   - blockquotes that open with 📦 / 🍽️ / ⚠️ / 💡 become coloured callouts;
//   - "##" headings that open with a chapter-structure emoji (🎬 🎯 🗺️ 🧪 🔮 🩺 ✅ 🧠) get an icon chip,
//     and the 🎬 story and ✅ recap sections are wrapped in tinted panels;
//   - a cover with the thali diagram and chapter cards is generated from META below.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, normalize, relative, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const [markedPath, outPath] = process.argv.slice(2)
if (!markedPath || !outPath) { console.error('usage: build-artifact.mjs <marked.esm.js> <out.html>'); process.exit(2) }
const { Marked } = await import(pathToFileURL(resolve(markedPath)).href)
const ROOT = resolve(import.meta.dirname, '..')
const REPO_URL = 'https://github.com/vrajkher/DeepSeekHarnessBookNEW'
const REPO = REPO_URL + '/blob/main/'

// [file, view id, sidebar title, eyebrow, chip label, tone]
const VIEWS = [
  ['README.md', 'top', 'આ પુસ્તક વિશે', 'શરૂઆત', 'આ', 'ink'],
  ['book/overview-samagra-naksho.md', 'overview', 'સમગ્ર નકશો', 'પહેલાં વાંચો', 'ન', 'sky'],
  ['book/pravesh-shunya-thi-shuruaat.md', 'pravesh', 'પ્રવેશ — શૂન્યથી શરૂઆત', 'Level −1 · દિવસ 1', 'પ્ર', 'leaf'],
  ['book/00-paayo-ane-pratham-run.md', 'ch0', 'પાયો અને પ્રથમ run', 'Level 0 · દિવસ 2', '૦', 'leaf'],
  ['book/01-request-ni-musafari.md', 'ch1', 'એક requestની આખી મુસાફરી', 'Level 1 · દિવસ 3–4', '૧', 'haldi'],
  ['book/02-cordis-plugin-architecture.md', 'ch2', 'Cordis અને plugin architecture', 'Level 2 · દિવસ 5–6', '૨', 'haldi'],
  ['book/03-tools-sessions-adapters.md', 'ch3', 'Tools, sessions અને model adapters', 'Level 3 · દિવસ 7', '૩', 'haldi'],
  ['book/04-potano-plugin.md', 'ch4', 'પોતાનો plugin બનાવો', 'Level 4 · દિવસ 8–9', '૪', 'kesar'],
  ['book/05-debugging-permissions-reliability.md', 'ch5', 'Debugging, permissions અને reliability', 'Level 5 · દિવસ 10–11', '૫', 'kesar'],
  ['book/06-maintainer-architecture.md', 'ch6', 'Maintainer અને architecture', 'Level 6 · દિવસ 12–13', '૬', 'chili'],
  ['book/07-antim-project-mastery.md', 'ch7', 'અંતિમ પ્રોજેક્ટ અને mastery', 'Level 7 · દિવસ 14–15', '૭', 'chili'],
  ['appendix/A-source-index.md', 'appendix-a', 'Source index', 'પરિશિષ્ટ A', 'A', 'ink'],
  ['appendix/B-command-reference.md', 'appendix-b', 'Command reference', 'પરિશિષ્ટ B', 'B', 'ink'],
  ['appendix/C-glossary.md', 'appendix-c', 'ગુજરાતી–English glossary', 'પરિશિષ્ટ C', 'C', 'ink'],
  ['appendix/D-lab-solutions.md', 'appendix-d', 'Lab solutions', 'પરિશિષ્ટ D', 'D', 'ink'],
  ['appendix/E-mastery-rubric.md', 'appendix-e', 'Mastery rubric', 'પરિશિષ્ટ E', 'E', 'ink'],
  ['appendix/F-coverage-map.md', 'appendix-f', 'Coverage map', 'પરિશિષ્ટ F', 'F', 'ink'],
  ['appendix/G-verification-log.md', 'appendix-g', 'Verification log', 'પરિશિષ્ટ G', 'G', 'ink'],
  ['appendix/H-status.md', 'appendix-h', 'Status અને resume notes', 'પરિશિષ્ટ H', 'H', 'ink'],
  ['appendix/citations.generated.md', 'citations', 'Pinned citations', 'Generated', '#', 'ink'],
  ['labs/README.md', 'labs', 'Book labs', 'Labs', 'L', 'ink'],
]

// Cover cards: the question each chapter answers, and its place on the difficulty climb.
const CARDS = [
  ['pravesh', 'દિવસ 1', 'computer, code અને AI ની ભાષા શું છે?', 'શરૂઆત'],
  ['ch0', 'દિવસ 2', 'આ ચાલુ કેવી રીતે કરું?', 'શરૂઆત'],
  ['ch1', 'દિવસ 3–4', 'એક request ક્યાં-ક્યાં જાય છે?', 'મધ્યમ'],
  ['ch2', 'દિવસ 5–6', 'આ બધા ટુકડા જોડાય કેવી રીતે?', 'મધ્યમ'],
  ['ch3', 'દિવસ 7', 'દરેક ટુકડો અંદરથી કેવો છે?', 'મધ્યમ'],
  ['ch4', 'દિવસ 8–9', 'હું મારો ટુકડો કેવી રીતે ઉમેરું?', 'ઊંડું'],
  ['ch5', 'દિવસ 10–11', 'તૂટે તો શું?', 'ઊંડું'],
  ['ch6', 'દિવસ 12–13', 'ક્યાં બદલવું, અને સાચું છે તે કેવી રીતે સાબિત કરું?', 'Expert'],
  ['ch7', 'દિવસ 14–15', 'આખું જાતે બનાવી શકું?', 'Expert'],
]

// Katoris around the thali: [Gujarati name, harness part, chapter, tone]
const KATORIS = [
  ['મહારાજ', 'AI model', 'ch1', 'haldi'],
  ['રમેશભાઈ', 'agent loop', 'ch1', 'kesar'],
  ['કોઠાર', 'tools', 'ch3', 'leaf'],
  ['ચોપડો', 'session log', 'ch3', 'ink'],
  ['દુભાષિયો', 'adapter', 'ch3', 'sky'],
  ['કાંતિકાકા', 'Cordis', 'ch2', 'haldi'],
  ['સીમા', 'sandbox', 'ch5', 'chili'],
]

const SECTION_ICONS = { '🎬': 'haldi', '🎯': 'ink', '🗺️': 'sky', '🧪': 'leaf', '🔮': 'kesar', '🩺': 'chili', '✅': 'ink', '🧠': 'kesar' }
const CALLOUTS = [['📦', 'term'], ['🍽️', 'dish'], ['⚠️', 'warn'], ['💡', 'tip'], ['🧭', 'tip']]

const meta = new Map(VIEWS.map(([file, view, title, eyebrow, chip, tone]) => [view, { file, view, title, eyebrow, chip, tone }]))
const viewOf = new Map(VIEWS.map(([file, id]) => [file, id]))
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const anchorId = (view, a) => `${view}-${a.replace(/[^A-Za-z0-9-]/g, '-')}`

function rewriteHref(href, file, view) {
  if (/^(https?:|mailto:)/.test(href)) return { href, external: true }
  const [path, anchor] = href.split('#')
  if (!path) return { href: '#' + (anchor ? anchorId(view, anchor) : view) }
  const target = normalize(relative(ROOT, join(ROOT, dirname(file), path))).replace(/\\/g, '/')
  const tv = viewOf.get(target)
  if (tv) return { href: '#' + (anchor ? anchorId(tv, anchor) : tv) }
  return { href: REPO + target + (anchor ? '#' + anchor : ''), external: true }
}

function calloutType(html) {
  const text = html.replace(/^\s*(<[^>]+>\s*)*/, '')
  for (const [mark, type] of CALLOUTS) if (text.startsWith(mark)) return type
  if (/^\s*<p>\s*<strong>(Level|Verification|Data notice|આ વિભાગ)/.test(html)) return 'level'
  return null
}

function styleBlockquotes(html) {
  return html.replace(/<blockquote>([^]*?)<\/blockquote>/g, (_m, inner) => {
    const first = calloutType(inner)
    let seen = false
    const body = inner.replace(/<p>([^]*?)<\/p>/g, (pm, pin) => {
      const type = calloutType('<p>' + pin)
      if (!seen) { seen = true; return pm }
      return type && type !== first && type !== 'level' ? `<p class="co-inner co-${type}">${pin}</p>` : pm
    })
    return first ? `<blockquote class="co co-${first}">${body}</blockquote>` : `<blockquote>${body}</blockquote>`
  })
}

function wrapSegments(html) {
  return html.split(/(?=<h3 )/).map(seg => {
    const m = seg.match(/^<h3 [^>]*data-seg="(story|recap)"/)
    if (!m) return seg
    // keep a trailing anchor (e.g. the next section's saral-samaj) outside the panel
    const tail = seg.match(/(<span class="anchor"[^>]*><\/span>\s*)$/)
    const inner = tail ? seg.slice(0, -tail[1].length) : seg
    return `<div class="seg seg-${m[1]}">\n${inner}</div>\n${tail ? tail[1] : ''}`
  }).join('')
}

const sections = []
const toc = []
for (const [file, view] of VIEWS) {
  const v = meta.get(view)
  let h = 0
  const heads = []
  const marked = new Marked({ gfm: true })
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        let text = this.parser.parseInline(tokens)
        const id = `${view}-h${++h}`
        if (depth === 1) {
          const title = view === 'top' ? 'આ પુસ્તક વિશે' : text
          return `<h2 class="chapter-title" id="${id}"><span class="chapter-head"><span class="num">${esc(v.chip)}</span><span class="eyebrow">${esc(v.eyebrow)}</span></span>${title}</h2>\n`
        }
        if (depth === 2) heads.push({ id, text: text.replace(/<[^>]+>/g, '') }) // already HTML-escaped by marked
        const level = Math.min(depth + 1, 6)
        if (depth === 2) {
          const icon = Object.keys(SECTION_ICONS).find(k => text.startsWith(k))
          if (icon) {
            const seg = icon === '🎬' ? ' data-seg="story"' : icon === '✅' ? ' data-seg="recap"' : ''
            text = `<span class="hi">${icon}</span><span>${text.slice(icon.length).trim()}</span>`
            return `<h3 id="${id}" class="t-${SECTION_ICONS[icon]}"${seg}>${text}</h3>\n`
          }
        }
        return `<h${level} id="${id}">${text}</h${level}>\n`
      },
      link({ href, title: t, tokens }) {
        const r = rewriteHref(href, file, view)
        const inner = this.parser.parseInline(tokens)
        return `<a href="${esc(r.href)}"${t ? ` title="${esc(t)}"` : ''}${r.external ? ' rel="noopener"' : ''}>${inner}</a>`
      },
      code({ text, lang }) {
        if (lang === 'mermaid') return `<pre class="mermaid">${esc(text)}</pre>\n`
        const label = lang || 'text'
        const copy = /^(bash|sh|shell)$/.test(label) ? '<button type="button" class="copy">copy</button>' : ''
        return `<div class="code"><div class="code-bar"><span class="dots"><i></i><i></i><i></i></span><span>${esc(label)}</span>${copy}</div><pre><code data-lang="${esc(label)}">${esc(text)}</code></pre></div>\n`
      },
    },
  })
  let md = readFileSync(join(ROOT, file), 'utf8')
  md = md.replace(/<!-- citations:begin[^]*?<!-- citations:end -->/, m => m.replace(/<!--[^]*?-->/g, ''))
  let html = await marked.parse(md)
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>')
  html = html.replace(/<a id="([^"]+)"><\/a>/g, (_m, a) => `<span class="anchor" id="${anchorId(view, a)}"></span>`)
  html = styleBlockquotes(html)
  html = wrapSegments(html)
  sections.push(`<section class="part t-${v.tone}" id="${view}" aria-labelledby="${view}-h1">\n${html}</section>`)
  toc.push({ ...v, heads })
}

const navItem = t => `<li><a href="#${t.view}" data-view="${t.view}" class="t-${t.tone}"><span class="num">${esc(t.chip)}</span><span class="nav-text"><span class="nav-eyebrow">${esc(t.eyebrow)}</span><span class="nav-title">${esc(t.title)}</span></span></a>${
  t.heads.length && (t.view.startsWith('ch') || t.view === 'overview' || t.view === 'pravesh') ? `<ol class="sub">${t.heads.map(x => `<li><a href="#${x.id}">${x.text}</a></li>`).join('')}</ol>` : ''}</li>`
const groups = [
  ['પ્રકરણો', toc.filter(t => t.view === 'top' || t.view === 'overview' || t.view === 'pravesh' || t.view.startsWith('ch'))],
  ['પરિશિષ્ટ', toc.filter(t => t.view.startsWith('appendix') || t.view === 'citations' || t.view === 'labs')],
]
const nav = groups.map(([label, items]) => `<p class="nav-group">${label}</p><ol class="nav-list">${items.map(navItem).join('')}</ol>`).join('')

const katoris = KATORIS.map(([gu, en, ch, tone], i) =>
  `<a class="katori t-${tone}" style="--a: ${(360 / KATORIS.length * i).toFixed(2)}deg" href="#${ch}" aria-label="${esc(gu)} = ${esc(en)} (${esc(meta.get(ch).title)})"><b>${esc(gu)}</b><span>${esc(en)}</span></a>`).join('\n      ')
const cards = CARDS.map(([view, day, q, level]) => {
  const v = meta.get(view)
  return `<li><a class="card t-${v.tone}" href="#${view}"><span class="card-top"><span class="num">${esc(v.chip)}</span><span class="card-day">${esc(day)}</span></span><span class="card-title">${esc(v.title)}</span><span class="card-q">${esc(q)}</span><span class="card-level">${esc(level)}</span></a></li>`
}).join('\n    ')
const cover = `<header class="cover" aria-labelledby="cover-title">
  <div>
    <p class="cover-eyebrow">ગુજરાતી પુસ્તક · DeepSeek Harness (dsh) · pinned fcc0ad4</p>
    <h1 id="cover-title">12મા ધોરણથી <em>Expert Developer</em> સુધી</h1>
    <p class="cover-lede">એક ગુજરાતી થાળી ભોજનાલયની વાર્તામાં AI agent harness ને ચલાવો, અંદરથી સમજો, બદલો અને સાબિત કરો — programming ન આવડતું હોય તો પણ, અને API key વગર.</p>
    <ul class="chips">
      <li class="t-leaf">15 દિવસ</li><li class="t-haldi">9 પ્રકરણ</li><li class="t-kesar">26 ચિત્રો</li><li class="t-sky">API key વગર</li>
    </ul>
    <div class="cta">
      <a class="btn primary" href="#pravesh">પ્રવેશથી શરૂ કરો →</a>
      <a class="btn" href="#overview">સમગ્ર નકશો</a>
      <a class="btn" href="${REPO_URL}" rel="noopener">GitHub</a>
    </div>
  </div>
  <div class="thali-wrap">
    <div class="thali" role="group" aria-label="થાળી: દરેક વાટકી harness નો એક ભાગ">
      <div class="thali-center">થાળી = Harness<small>dsh</small></div>
      ${katoris}
    </div>
    <p class="thali-caption">દરેક વાટકી એક plugin — કાઢો, બદલો, ઉમેરો. વાટકી પર click કરો.</p>
  </div>
</header>
<section class="path" aria-labelledby="path-title">
  <h2 id="path-title">15 દિવસ, 9 પગથિયાં</h2>
  <p>દરેક પ્રકરણ એક પ્રશ્નનો જવાબ આપે છે. રંગ મુશ્કેલી બતાવે છે: લીલો શરૂઆત, હળદર મધ્યમ, કેસર ઊંડું, મરચું expert.</p>
  <ol class="cards">
    ${cards}
  </ol>
</section>`

const template = readFileSync(join(ROOT, 'tools', 'artifact-template.html'), 'utf8')
const out = template.replace('<!--NAV-->', nav).replace('<!--COVER-->', cover).replace('<!--BODY-->', sections.join('\n'))
writeFileSync(outPath, out)
console.log(`build-artifact: ${sections.length} parts, ${(out.length / 1024).toFixed(0)} KB -> ${outPath}`)
