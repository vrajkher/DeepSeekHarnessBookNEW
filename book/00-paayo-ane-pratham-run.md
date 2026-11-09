# પ્રકરણ 0 — પાયો અને પ્રથમ run

> **Level 0 · 🟢 સૌ માટે (🟡 setup માં થોડી ધીરજ).** વાર્તાનો દિવસ 2.
> આ પ્રકરણ DeepSeek Harness ને તમારા computer પર લાવે છે, બરાબર એ જ ફોટા (commit) પર જેના પર આખું પુસ્તક લખાયું છે, અને તેમાં તમારો પહેલો plugin ચલાવે છે — **API key વગર**.
> પહેલાં: [પ્રવેશ પ્રકરણ](pravesh-shunya-thi-shuruaat.md) (terminal, JavaScript, TypeScript ના પાયા). આખો નકશો: [સમગ્ર નકશો](overview-samagra-naksho.md).

## 🎬 વાર્તા: ભોજનાલયની ચાવીઓ

સવારે સાત વાગ્યે ભોજનાલય હજી બંધ છે. પપ્પા આરવના હાથમાં ચાવીનો ઝૂડો મૂકે છે: "આજથી સવારે તું ખોલીશ."

આરવ ઝૂડો જુએ છે — મુખ્ય દરવાજાની ચાવી, કોઠારની ચાવી, ગલ્લાના ચોપડાની ચાવી. મીરાદીદી laptop ખોલતાં કહે છે: "Software નું ભોજનાલય ખોલવામાં પણ આ જ ત્રણ ચાવી છે: **Node.js** (દરવાજો — code ચલાવવાનું રસોડું), **pnpm** (કોઠાર — બીજાઓનો code લાવી ગોઠવે), અને **Git** (ચોપડો — code નો આખો ઇતિહાસ)."

"અને એક વાત," દીદી ઉમેરે છે, "આપણી chain ની ઘણી શાખાઓ છે, અને દર અઠવાડિયે મેનુ બદલાય છે. આપણે એક જ શાખાના એક જ દિવસના ફોટામાં ઊભા રહીશું — `fcc0ad4`. નહીં તો પુસ્તક એક વાત કહે અને ભોજનાલય બીજી."

પહેલા દિવસે રસોઈ નથી. ફક્ત ચાર કામ: **સાચી શાખા, ત્રણ ચાવી, બધી લાઈટ ચાલુ, અને એક કપ ચા** — એટલે કે પહેલો નાનો plugin.

## 🎯 આ પ્રકરણ પછી તમે શું કરી શકશો

- AI model, model provider, agent, harness અને plugin વચ્ચેનો તફાવત એક-એક ઉદાહરણથી સમજાવી શકશો.
- DeepSeek Harness નું repository clone કરી, તેની pinned commit પર checkout કરી, dependencies install અને build કરી શકશો.
- API key વગર પહેલો Cordis plugin ચલાવી શકશો અને output ની આગાહી કરી શકશો.
- આ repository ના TypeScript માં વારંવાર આવતા પાંચ pattern ઓળખી શકશો.
- Linux અને Windows + WSL2 બંને માટે setup નો માર્ગ જાણી શકશો.
- "Exit 0 છતાં કંઈ થયું નહીં" જેવી ચૂપ નિષ્ફળતાનું નિદાન કરી શકશો.

## 🗺️ આ પ્રકરણનો નકશો

```mermaid
flowchart LR
  A["0.1 પાંચ શબ્દો<br/>model … plugin"] --> B["0.2 Pin<br/>એક જ ફોટો fcc0ad4"]
  B --> C["0.3–0.4 ત્રણ ચાવી<br/>Git, Node, pnpm"]
  C --> D["Build<br/>10 gates"]
  D --> E["0.5 TypeScript ના<br/>પાંચ pattern"]
  E --> F["0.6 Repository નો નકશો"]
  F --> G["Lab 0<br/>hello plugin"]
  G --> H["🩺 ચૂપ plugin"]
```

## 0.1 🟢 પાંચ શબ્દો, એક-એક ઉદાહરણ

પ્રવેશ પ્રકરણમાં આ પાંચ શબ્દો ભોજનાલયની ભાષામાં જોયા. હવે DeepSeek Harness ની ભાષામાં, દરેકનું નક્કર ઉદાહરણ:

| English term | ગુજરાતી અર્થ | ઉદાહરણ | 🍽️ |
|---|---|---|---|
| **AI model** | text વાંચીને આગલો text (અથવા tool call) બનાવતું ગણિતીય મોડેલ | `deepseek-flash` નામનું model | મહારાજ |
| **Model provider** | model ને network પર ઉપલબ્ધ કરાવતી સેવા, જેનું પોતાનું HTTP API હોય | DeepSeek નું official API (`https://api.deepseek.com`) | રસોઈ-સેવા agency |
| **Agent** | એક loop જે model ને પૂછે, model કહે તે tool ચલાવે, અને પરિણામ પાછું model ને આપે — કામ પૂરું ન થાય ત્યાં સુધી | "README વાંચો" કહ્યું તો `read` tool ચલાવી પછી સાર લખે | રમેશભાઈ |
| **Harness** | agent ને ચલાવવા માટેનું આખું તંત્ર: loop, tools, session log, permissions, UI, provider adapter | DeepSeek Harness (`dsh`) | આખું ભોજનાલય |
| **Plugin** | harness માં ઉમેરાતો એક સ્વતંત્ર ભાગ, જે service, tool કે event listener ઉમેરે અને unload થતાં પોતાની નોંધણી પાછી ખેંચી લે | `@deepseek-ai/dsh-tool-fs` જે `read`, `write`, `edit` tools ઉમેરે છે | એક કાઉન્ટર/કર્મચારી |

એક વાક્યમાં: **model** વિચારે છે, **provider** તેને પહોંચાડે છે, **agent** loop ચલાવે છે, **harness** આખું ઘર છે, અને **plugin** એ ઘરની દરેક ઈંટ છે.

DeepSeek Harness ની સૌથી ખાસ વાત: **agent loop પોતે પણ plugin છે.** README તેને *everything-is-a-plugin* architecture કહે છે, જે [Cordis](https://github.com/cordiverse/cordis) framework પર બનેલું છે ([README.md](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/README.md)). ✅ *source-verified*

> 🍽️ **ભોજનાલયમાં:** વિચારો કે રમેશભાઈ (વેઈટર) પણ "બદલી શકાય તેવો કર્મચારી" છે — કાલે બીજો વેઈટર આવે, જે બીજી રીતે ઓર્ડર લે, તો પણ ભોજનાલયની દીવાલો, ચોપડો, કોઠાર બધું એ જ રહે. આ જ "everything-is-a-plugin".
>
> 📦 **Cordis** — plugins ને જોડતું framework: કોણ ક્યારે કામ શરૂ કરે, કોણ કોને સેવા આપે, અને કોઈ જાય ત્યારે તેની બધી નોંધણી કેવી રીતે પાછી ખેંચાય. 🍽️ મેનેજર કાંતિકાકા. પ્રકરણ 2 આખું તેના વિશે છે.

> **Verification marks.** ✅ = pinned source વાંચીને ચકાસ્યું, 🧪 = આ પુસ્તક લખતી વખતે ખરેખર ચલાવીને ચકાસ્યું,
> ⚠️ = ચકાસ્યું નથી (docs પર આધારિત). વિગત: [પરિશિષ્ટ G](../appendix/G-verification-log.md).

## 0.2 🟢 Pin: આખું પુસ્તક એક જ commit પર

Software બદલાય છે. આ repository README માં જ લખે છે કે તે *developer preview* છે અને "THERE WILL BE COMPATIBILITY-BREAKING CHANGES." તેથી આખું પુસ્તક એક જ commit (ફોટા) પર બંધાયેલું છે:

> 📦 **Pin** — "આ જ version વાપરો" એવું નક્કી કરી દેવું. 🍽️ "આપણે ફક્ત મણિનગર શાખાના 4 નવેમ્બરના મેનુ પ્રમાણે જ ચાલીશું."

| વિગત | મૂલ્ય |
|---|---|
| Repository | `https://github.com/deepseek-ai/deepseek-harness` |
| Branch | `master` |
| Commit SHA | `fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159` |
| Commit date | 2026-11-04 16:40 +0800 ("Merge pull request #7873 … release-dsh-0.2.2-rc.1-to-master") |
| Root package version | `0.2.2-rc.1` |
| Inspection date | 2026-11-04 |
| Node.js used | v24.22.2 (repository માંગે છે `>=24.9.0`) |
| pnpm used | 11.28.5 (Corepack દ્વારા, `packageManager` field મુજબ) |
| Git used | 2.43.0 |
| TypeScript / Vitest / tsx (lockfile) | 6.0.3 / 4.1.11 / 4.23.13 |
| Cordis (vendored) | `4.0.0-rc.11`, upstream commit `0b96d9fd517b998e44e2209560c9e5f0671ce933` ([vendor/README.md][vendor-manifest]) |
| Machine | Linux x64, 4 CPU, 15 GB RAM |

દરેક source link `blob/fcc0ad46…/path#Lx-Ly` સ્વરૂપની **permalink** છે — એ ફોટાની ચોક્કસ lines. upstream `master` આગળ વધે તો પણ આ link એ જ lines બતાવશે.

> 📦 **Permalink** — કદી ન બદલાતી link. `#L327-L433` એટલે "line 327 થી 433".

## 0.3 🟢 Terminal અને Git: જરૂર પૂરતું

પ્રવેશ પ્રકરણ (પ્ર.2 અને પ્ર.10) માં terminal અને Git નો અર્થ જોયો. આ પુસ્તકમાં તમને ફક્ત આ ત્રણ Git command જોઈશે:

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
```

```bash
git -C deepseek-harness checkout --detach fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159
```

```bash
git -C deepseek-harness log -1 --format='%H %ci %s'
```

| Command | શું કરે | 🍽️ |
|---|---|---|
| `git clone <url>` | આખું repository + ઇતિહાસ તમારા computer પર | આખા ભોજનાલયની નકલ |
| `git -C <dir> checkout --detach <sha>` | એ folder માં, એ ફોટા પર જાઓ | "4 નવેમ્બરના ફોટામાં ઊભા રહો" |
| `git -C <dir> log -1 --format=…` | હું કયા ફોટા પર છું તે બતાવો | "ફોટાની પાછળનો નંબર વાંચો" |

`-C <dir>` એટલે "આ command એ folder ની અંદર ચલાવો". ત્રીજો command ચલાવો ત્યારે output `fcc0ad46…` થી શરૂ થવો જોઈએ. ન થાય તો બાકીનું પુસ્તક બીજા code પર ચાલશે, અને line numbers ખોટા પડશે.

`--detach` નો અર્થ: કોઈ branch પર નહીં, સીધા commit પર ઊભા રહો. તમે ફેરફાર કરશો તો તે કોઈ branch માં નહીં જાય — શીખવા માટે એ જ સારું. **"પ્રવાસી, રહેવાસી નહીં."**

## 0.4 🟡 Node.js, Corepack અને pnpm — ત્રણ સ્તર

> 📦 **Node.js** — browser વગર JavaScript ચલાવતું runtime. ઉદાહરણ: `node --version` → `v24.22.2`.
>
> 📦 **Package manager** — બીજાઓનો code (**dependencies**) download કરી ગોઠવતું tool. 🍽️ કોઠારી, જે બજારમાંથી સામાન લાવી યોગ્ય ખાનામાં મૂકે.
>
> 📦 **Dependency** — બીજાનો code જે આપણો project વાપરે. 🍽️ ઉધાર લીધેલું વાસણ. ઉદાહરણ: `vitest`, `tsx`.

આ repository **pnpm** વાપરે છે, અને ચોક્કસ version root `package.json` માં pinned છે: `"packageManager": "pnpm@11.28.5"`, `"engines": { "node": ">=24.9.0" }`. ✅

> 📦 **Corepack** — Node સાથે આવતું નાનું tool, જે `packageManager` field વાંચીને સાચો pnpm version જાતે લાવે છે. ઉદાહરણ: `corepack enable` પછી `pnpm --version` → `11.28.5`.
>
> 📦 **Workspace** — એક repository માં ઘણાં package. અહીં `packages/<group>/<pkg>/` નીચે 50 થી વધુ group છે, અને દરેક package નું નામ `@deepseek-ai/dsh-<name>` છે ([AGENTS.md][agents-conventions]). ✅ 🍽️ એક જ ઇમારતમાં ઘણાં કાઉન્ટર.

| સ્તર | શું કરે છે | ભૂલ થાય તો દેખાય |
|---|---|---|
| Node.js 24 | JavaScript/TypeScript ચલાવે | જૂનું Node: install/build નિષ્ફળ (`engines >=24.9.0`) |
| Corepack | `package.json` નું `packageManager` વાંચી સાચો pnpm લાવે | `pnpm --version` ખોટો version બતાવે |
| pnpm 11.28.5 | 1,400+ dependencies લાવી workspace ગોઠવે | install અટકે; અમારા sandbox માં એક CDN blocked હતું (નીચે જુઓ) |

### Linux પર setup (🧪 આ પુસ્તક માટે ચલાવ્યું)

1. Node 24 install કરો (nodejs.org નું official tarball, અથવા તમારું version manager). પછી:

```bash
node --version
```

`v24.9.0` કે તેથી નવું હોવું જોઈએ.

2. Corepack ચાલુ કરો:

```bash
corepack enable
```

3. Clone, pin, install:

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git && cd deepseek-harness
```

```bash
git checkout --detach fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159
```

```bash
pnpm install
```

4. Build:

```bash
pnpm run build
```

> 📦 **Build** — source code ને ચલાવી શકાય તેવા રૂપમાં ફેરવવો + તપાસ કરવી. 🍽️ ભોજનાલય ખોલતા પહેલાં બધી લાઈટ, ગેસ, ફ્રિજ ચાલુ કરી તપાસવાં.
>
> 📦 **Gate** — build નું એક તપાસ-પગલું; બધા pass થાય તો જ build સફળ.

અમારા machine પર `pnpm run build` એ 10 gates ચલાવ્યા: native addon, Host Typert, host compiler, Host bundle, Desktop bundle, client compiler, Client bundle, Web build, host aggregate check, client aggregate check — `10 passed, 0 failed, 0 skipped in 129.74s` ([evidence/build.log](../evidence/build.log)). 🧪 એટલે આશરે બે મિનિટ — ચા મૂકીને રાહ જુઓ.

> **અમારા sandbox ની એક ખાસ વાત (તમને કદાચ નહીં નડે).** અમારા cloud sandbox નું network `cdn.sheetjs.com` ને block કરે છે.
> Client package `ui-sidebar-documentpreview` ત્યાંથી `xlsx-0.20.3.tgz` માંગે છે, તેથી `pnpm install` નિષ્ફળ ગયું.
> અમે ફક્ત અમારી scratch copy માં `pnpm-workspace.yaml` ના `overrides` માં `'xlsx': '0.18.5'` (npm નું) અને એક `.d.ts` shim ઉમેર્યા.
> આ Host/agent code ને સ્પર્શતું નથી. તમારું network એ CDN સુધી પહોંચતું હોય તો આવું કંઈ ન કરશો. વિગત: [પરિશિષ્ટ G](../appendix/G-verification-log.md).

### Windows + WSL2 (⚠️ આ પુસ્તક માટે ચલાવ્યું નથી)

Repository નો development guide કહે છે કે Windows પર native tools અથવા WSL 2 બંને ચાલે, અને WSL વૈકલ્પિક છે ([docs/development.md](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/docs/development.md)). તેના મુખ્ય નિયમો:

> 📦 **WSL2** — Windows ની અંદર ચાલતું સાચું Linux kernel. ઉદાહરણ: PowerShell માં `wsl --install` પછી Ubuntu terminal મળે. 🍽️ "ઘરમાં બીજું ઘર".

- checkout, dependencies અને toolchain **એક જ OS environment** માં રાખો. WSL માટે checkout ને Linux filesystem (`~/…`) માં રાખો, `/mnt/c/…` માં નહીં; બંને filesystem વચ્ચેની I/O ધીમી છે.
- દરેક environment માં dependencies અલગથી install કરો, કારણ કે native binaries OS પ્રમાણે જુદી હોય.
- WSL માં ચાલેલા tests Linux વર્તન સાબિત કરે છે; Windows-specific વર્તન માટે native Windows validation જોઈએ.

WSL ની અંદર ઉપરના Linux steps જ ચાલે. અમે Windows પર આ ચલાવ્યું નથી, તેથી કોઈ output નો દાવો કરતા નથી.

## 0.5 🟡 આ repository વાંચવા જેટલું TypeScript — પાંચ pattern

પ્રવેશ પ્રકરણ (પ્ર.6) માં type, union અને `satisfies never` જોયા. Harness ના code માં આ પાંચ pattern વારંવાર દેખાય છે; આટલું ઓળખો એટલે code "વિચિત્ર" નહીં લાગે.

**(1) `import type`** — ફક્ત type લાવે, runtime પર કંઈ import ન થાય. 🍽️ "મહેમાનની યાદી", મહેમાન પોતે નહીં.

```ts
import type { Context } from '@deepseek-ai/cordis'
```

**(2) Declaration merging** — બીજા package ના interface માં નવા field ઉમેરવા. Cordis ના `Context` પર `ctx.tools`, `ctx.llm` જેવા services આ રીતે type મેળવે છે. એક વિચિત્ર દેખાતી line ખરેખર આ જ કરે છે:

```ts
import type {} from '@deepseek-ai/dsh-tools' // dsh-tools ના merge (દા.ત. 'tools/result' event) types માં લાવે
```

> 📦 **Interface** — object નો આકાર (કયાં fields/functions હશે) જણાવતું વર્ણન. 🍽️ નોકરીનું વર્ણન: "આ ખુરશી પર બેસનાર `register` કરી શકશે."

**(3) Discriminated union** — એક `kind`/`type` field પરથી કયો આકાર છે તે નક્કી થાય. ઉદાહરણ: `{ kind: 'enter' } | { kind: 'reject' }`. Repository નો નિયમ: closed union ના અંતે `assertNever` ([AGENTS.md][agents-conventions]). 🍽️ ટપાલ પર લાલ કે લીલું stamp.

**(4) `satisfies never`** — "બધા કેસ handle થયા" એવું compiler પાસે સાબિત કરાવવું. CLI entry point માં આ દેખાય છે:

```ts
    default:
      invocation satisfies never
      throw new Error(`dsh: unhandled invocation mode ${JSON.stringify(invocation)}`)
```

(repository code, [apps/cli/src/bin.ts][cli-runCli]) — પ્રવેશ પ્રકરણના `types.ts` માં તમે આ જ pattern ચલાવી જોયો હતો.

**(5) `async`/`await` અને `AbortSignal`** — લાંબું ચાલતું કામ અને તેને રદ કરવાનો signal. Agent loop દરેક await પછી `signal.throwIfAborted()` ચલાવે છે; પ્રકરણ 5 માં આપણે interruption આ જ રીતે પકડીશું. (પ્રવેશ પ્રકરણનો `rasoi-async.mjs` આનું રમકડું છે.)

## 0.6 🟢 Repository નો નકશો

```mermaid
flowchart LR
  subgraph apps["apps/ — launchers"]
    cli["cli: dsh command"]
    web["web, desktop"]
  end
  subgraph vendor["vendor/ — Cordis framework (vendored)"]
    cordis["cordis, loader, include"]
  end
  subgraph packages["packages/ — everything is a plugin"]
    bundle["bundle/: base, headless, web-app, sdk-app"]
    core["core/: agent, agent-loop, session, tools, system-prompt"]
    llm["llm/: llm runtime, llm-deepseek adapter, retry"]
    fs["fs/: fs seam, fs-sandbox, tool-fs"]
    other["sandbox/, interaction/, session/, test-support/ …"]
  end
  cli --> bundle
  bundle --> core
  bundle --> llm
  bundle --> fs
  core --> cordis
```

Arrows અહીં "આ layer એ layer પર બનેલું છે" બતાવે છે — call direction નહીં.

> 📦 **Vendored** — બીજા project નો code પોતાના repository માં નકલ કરીને રાખવો (download ને બદલે). Cordis અહીં `vendor/` માં vendored છે.

| Diagram node | Folder | 🍽️ | પહેલું ખોલવાનું file |
|---|---|---|---|
| cli | `apps/cli/` | મુખ્ય દરવાજો | `apps/cli/src/bin.ts` ([`runCli`][cli-runCli]) |
| cordis | `vendor/cordis/` | મેનેજરની ઓફિસ | `vendor/cordis/bin.js` ([launcher][cordis-bin]) |
| bundle | `packages/bundle/` | તૈયાર મેનુ-પાનાં | `packages/bundle/base/cordis.patch.yml` ([rows][bundle-base]) |
| core | `packages/core/` | વેઈટર, ચોપડો, કોઠારનો મુખ્ય | `packages/core/agent-loop/src/agent.ts` ([`ReactLoopAgent`][loop-class]) |
| llm | `packages/llm/` | ફોન અને દુભાષિયો | `packages/llm/llm-deepseek/src/adapter.ts` ([`DeepSeekAdapter`][deepseek-adapter]) |
| fs | `packages/fs/` | કોઠાર | `packages/fs/tool-fs/src/read.ts` ([`applyReadTool`][read-tool]) |

## 0.7 🟢 Source map: આ ક્રમમાં ખોલો

| ક્રમ | File | Symbol | કેમ |
|---|---|---|---|
| 1 | `README.md` | Run from source | સત્તાવાર commands |
| 2 | `package.json` | `engines`, `packageManager`, `scripts.dsh` | `pnpm dsh` = `node --import tsx/esm apps/cli/src/bin.ts` |
| 3 | `vendor/cordis/bin.js` | [launcher][cordis-bin] | સૌથી નાનું Cordis app |
| 4 | `docs/cordis-tutorial/01-first-plugin.md` | ch. 1 | Lab નો સ્રોત |
| 5 | `apps/cli/src/bin.ts` | [`runCli`][cli-runCli] | `dsh` નો દરવાજો |

> 💡 **મીરાદીદીની ટીપ:** આખું repository એક સાથે વાંચવાનો પ્રયત્ન ન કરો — હજારો files છે. "Source map" table એક પગદંડી છે: ઉપરથી નીચે, એક પછી એક file, ફક્ત એ symbol જુઓ.

## 🧪 Lab 0 — પહેલો plugin, key વગર (એક કપ ચા)

આ lab repository ના પોતાના tutorial નું પહેલું પ્રકરણ છે. તે repository ના gitignored `tmp/` folder માં કામ કરે છે, તેથી Git history ને કંઈ થતું નથી.

> 📦 **Gitignored** — Git જેની નોંધ નથી રાખતું એવું folder/file. `tmp/` માં ગમે તે કરો, repository નો ઇતિહાસ સ્વચ્છ રહે. 🍽️ રસોડાનું "પ્રયોગ-ખૂણો".

```bash
mkdir -p tmp/cordis-tutorial && cd tmp/cordis-tutorial
```

`hello.ts` બનાવો:

```ts
import type { Context } from '@deepseek-ai/cordis'

export const name = 'hello'

export function apply(ctx: Context) {
  console.log('hello from my first plugin')
}
```

`cordis.yml` બનાવો:

```yaml
- name: './hello.ts'
```

ચલાવો:

```bash
node --import tsx ../../vendor/cordis/bin.js
```

**અપેક્ષિત અવલોકન** (🧪 exit code 0):

```text
hello from my first plugin
```

### શું થયું? — ત્રણ ભાગ, ત્રણ પગલાં

**Plugin ના ત્રણ ભાગ:**

| ભાગ | અર્થ | 🍽️ |
|---|---|---|
| `name` | plugin ની ઓળખ | કર્મચારીનું નામ |
| `apply(ctx)` | Cordis plugin ને ચાલુ કરે ત્યારે બોલાવે; `ctx` એટલે **Context** — services રાખતો કેન્દ્રીય object | "કામ પર હાજર થાઓ" — અને ઇમારતની ચાવી (`ctx`) હાથમાં |
| `cordis.yml` | કયા plugins mount કરવા તેની યાદી; YAML ની દરેક row એક plugin | આજનું મેનુ |

**Launcher ના ત્રણ પગલાં:** [`vendor/cordis/bin.js`][cordis-bin] એ (1) root `Context` બનાવ્યો, (2) `Loader` plugin mount કર્યો, અને (3) `@deepseek-ai/cordis-plugin-include` ને `./cordis.yml` વાંચવા કહ્યું. Loader એ `./hello.ts` import કરી `apply(ctx)` બોલાવ્યું.

> 📦 **Mount** — plugin ને ચાલતા તંત્રમાં જોડવો (અને પછી તેનું `apply` ચાલે). Unmount/unload = તેને કાઢવો, અને તેની બધી નોંધણી પાછી ખેંચવી.

> 📦 **Plugin ના ત્રણ આકાર — "ફ-ઓ-ક":** Cordis plugin **ફ**ંક્શન, `apply` વાળો **ઓ**બ્જેક્ટ (અહીં module), કે **ક**્લાસ હોઈ શકે. ક્લાસ ત્યારે વપરાય જ્યારે plugin બીજાને **service** આપતો હોય (પ્રકરણ 2, 3).

`--import tsx` નો અર્થ: Node ને TypeScript file સીધી ચલાવવા દો. **tsx** repository ના `tsconfig` `paths` પણ વાંચે છે, તેથી `tmp/` ની અંદરથી `@deepseek-ai/dsh-tools` જેવા workspace package source માંથી મળી જાય છે — આ પુસ્તકની બધી labs આ જ કારણે `<harness>/tmp/` માં ચાલે છે. 🧪

> 📦 **tsx** — TypeScript ને build કર્યા વગર સીધું ચલાવતું tool, જે repository ના package-નામ → folder નકશા (`paths`) પણ સમજે. 🍽️ દુકાનનો "અંદરનો રસ્તો" જાણતો કર્મચારી.

## 🔮 આગાહી કસોટી

`apply` ને આ રીતે બદલો અને **ચલાવતા પહેલાં** લખો: process નો exit code શું હશે, અને "hello" છપાશે કે નહીં?

```ts
export function apply(ctx: Context) {
  throw new Error('apply exploded')
}
```

જવાબ [પરિશિષ્ટ D](../appendix/D-lab-solutions.md#lab-0) માં છે. પહેલાં પોતે ચલાવો.

## 🩺 નિષ્ફળતા: plugin "કંઈ જ નથી કરતો" — ચૂપ plugin

**વાર્તામાં.** આરવ ઉત્સાહમાં બીજો plugin બનાવે છે, પણ `cordis.yml` માં `./helo.ts` લખી નાખે છે (એક `l` ઓછો). ચલાવે છે — કંઈ છપાતું નથી, અને `echo $?` કહે છે `0`. "દીદી, exit 0 એટલે સફળ ને? તો મારો plugin ક્યાં ગયો?"

**લક્ષણ.** `cordis.yml` માં `- name: './helo.ts'` (spelling ભૂલ) લખ્યું, અથવા `apply` અંદર exception ફેંકાયો. બંને કિસ્સામાં process **exit code 0** સાથે, કંઈ છાપ્યા વગર પૂરું થાય છે. 🧪

**Docs અને code નો તફાવત.** Tutorial નું પ્રકરણ 1 ("Try breaking it") કહે છે કે `apply` throw કરે તો "the process dies with your error." Pinned commit પર અમે આ ત્રણ વાર ચલાવ્યું: exit 0, stdout/stderr ખાલી. 🧪
કારણ source માં દેખાય છે: Loader entry ની નિષ્ફળતા `this.ctx.logger.error(error)` થી log કરે છે ([vendor/loader/src/config/entry.ts][loader-entry-error]), અને [`vendor/cordis/bin.js`][cordis-bin] કોઈ log exporter mount કરતું નથી. **Log છે, પણ જોનાર કોઈ નથી.** ✅

> 📦 **Logger / log exporter** — logger સંદેશા ભેગા કરે; exporter તેમને ક્યાંક (screen, file) બતાવે. Exporter ન હોય તો સંદેશા ખોવાઈ જાય. 🍽️ ફરિયાદ-પેટી છે, પણ કોઈ ખોલતું નથી.

**ટૂંકો નિદાન માર્ગ.**

1. Loader પહેલાં console exporter mount કરતો નાનો launcher વાપરો. પુસ્તકનો [`labs/cordis-basics/bin-with-logs.ts`](../labs/cordis-basics/bin-with-logs.ts) બરાબર આ કરે છે, અને અંતે દરેક entry ની `FiberState` (plugin ની હાજરી-સ્થિતિ) છાપે છે:

```bash
node --import tsx ../book-labs/cordis-basics/bin-with-logs.ts
```

2. Throw વાળા `hello.ts` માટે અમને આ મળ્યું (path ટૂંકાવ્યો છે):

```text
2026-11-04 18:39:07 [E] hello Error: apply exploded
                            at new apply (…/tmp/cordis-tutorial/hello.ts:6:9)
[entry] @deepseek-ai/cordis-plugin-include -> ACTIVE
[entry] ./hello.ts -> FAILED
```

3. Typo વાળા path માટે: `[E] include Error [ERR_MODULE_NOT_FOUND]: Cannot find module '…/helo.ts'`. (પ્રવેશ પ્રકરણની `Cannot find module` યાદ છે?)
4. સાચા `dsh` launcher માં આ સમસ્યા નથી: તે boot દરમિયાન પોતાનો diagnostics exporter રાખે છે અને અંતે startup audit ચલાવે છે ([`boot`][boot-boot], [`auditStartupEntries`][boot-audit]) — પ્રકરણ 2 માં તેનું output ખરેખર જોઈશું.

**શીખ:** "exit 0 નો અર્થ હંમેશા 'બધું બરાબર' નથી." Exit code ફક્ત process નો છે; plugin નિષ્ફળ ગયો કે નહીં તે logs કહે છે.

<a id="saral-samaj"></a>

## ✅ સાર — પ્રકરણ 0 એક પાનામાં

**એક વાક્યમાં:** પ્રકરણ 0 = ભોજનાલયનું તાળું ખોલવું: સાચું સરનામું (pinned commit `fcc0ad4`), સાચી ચાવીઓ (Git, Node 24, Corepack + pnpm), બધી લાઈટ ચાલુ (`pnpm run build`, 10 gates), અને પહેલી નાની વાનગી (`hello.ts` plugin) — API key વગર.

> ⚠️ **ઉપમા અહીં તૂટે છે:** ભોજનાલયમાં ખોટો રસ્તો લો તો તરત ખબર પડે. અહીં `cordis.yml` માં path ની spelling ભૂલ હોય તો process **ચૂપચાપ** exit 0 થાય છે. એટલે જ `bin-with-logs.ts` launcher આપ્યો છે.

### નવા ટેકનિકલ શબ્દો — એક નજરે

| શબ્દ | સરળ અર્થ | રોજિંદું ઉદાહરણ | યાદ-ચાવી |
|---|---|---|---|
| Repository | project ની બધી files + ઇતિહાસ | `deepseek-harness` folder | "ભંડાર" |
| Clone | repository ની પૂરી નકલ પોતાના machine પર | `git clone …` | "ફોટોકોપી" |
| Commit / SHA | ઇતિહાસનો એક નામવાળો ફોટો | `fcc0ad4` | "ફોટાની પાછળ લખેલો નંબર" |
| Detached checkout | branch વગર સીધા commit પર ઊભા રહેવું | `git checkout --detach …` | "પ્રવાસી, રહેવાસી નહીં" |
| Dependency | બીજાનો code જે આપણો project વાપરે | `vitest`, `tsx` | "ઉધાર લીધેલું વાસણ" |
| Package manager | dependencies લાવી ગોઠવતું tool | pnpm | "કોઠારી" |
| Workspace | એક repository માં ઘણાં packages | `packages/*/*` | "એક ઇમારત, ઘણાં કાઉન્ટર" |
| Build | source ને ચલાવી શકાય તેવા રૂપમાં ફેરવવું + તપાસ | `pnpm run build`, 10 gates | "રસોઈ પહેલાંની તૈયારી" |
| Runtime | code ચાલતી વખતનું વાતાવરણ | Node.js | "રસોડું ચાલુ હોય તે સમય" |
| Plugin | `apply(ctx)` વાળો નાનો module | `hello.ts` | "ઈંટ" |
| Context (`ctx`) | services રાખતો Cordis નો કેન્દ્રીય object | `ctx.tools` | "ઇમારતની ચાવી" |
| `cordis.yml` | કયા plugins ચલાવવા તેની યાદી | `- name: './hello.ts'` | "આજનું મેનુ" |
| Exit code | process પૂરું થાય ત્યારે આપતો આંકડો; 0 = સફળ | `echo $?` → 0 | "0 = process બરાબર — plugin નહીં" |
| WSL2 | Windows ની અંદર સાચું Linux | `wsl --install` | "ઘરમાં બીજું ઘર" |

### યાદ રાખવાની રીતો

- **"ત્રણ ચાવી લો, એક ફોટામાં ઊભા રહો":** Node + Corepack/pnpm + Git = ત્રણ ચાવી; `fcc0ad4` = એક ફોટો.
- **"ચૂપ plugin" ચેતવણી:** એક plugin જે મોં પર આંગળી રાખી ઊભો છે — "exit 0 નો અર્થ હંમેશા 'બધું બરાબર' નથી."
- **"ફ-ઓ-ક":** plugin ના ત્રણ આકાર — ફંક્શન, ઓબ્જેક્ટ, ક્લાસ (service આપવી હોય ત્યારે ક્લાસ).
- **"મો-પ્રો-એ-હા-પ્લ":** model, provider, agent, harness, plugin — અંદરથી બહાર.

### સામાન્ય ગેરસમજો

| ગેરસમજ | સાચું |
|---|---|
| "Model પોતે README ખોલે છે." | Model ફક્ત `read` tool ચલાવવાની માંગણી લખે છે; file harness ખોલે છે (પ્રકરણ 1). |
| "Exit 0 એટલે plugin ચાલ્યો." | Pinned commit પર throw થતો plugin પણ exit 0 આપે છે; logger જોવો પડે. |
| "Pin વગર પણ પુસ્તક ચાલશે." | Line numbers અને વર્તન બદલાઈ શકે; permalinks ખોટી જગ્યાએ દોરી જાય. |
| "API key વગર કંઈ ચલાવી નહીં શકાય." | આખું પુસ્તક key વગર mock provider સાથે ચાલે છે. |

### પુનરાવર્તન કાર્ડ

<details><summary>1. Harness અને agent માં શું ફરક?</summary>

Agent = model ↔ tools નો loop. Harness = loop + tools + session log + sandbox + UI + adapters; અને DeepSeek Harness માં loop પોતે પણ એક plugin છે.
</details>

<details><summary>2. `pnpm dsh` ખરેખર શું ચલાવે?</summary>

`node --import tsx/esm apps/cli/src/bin.ts` (root `package.json` નો `scripts.dsh`).
</details>

<details><summary>3. `tmp/` માં labs કેમ ચાલે છે?</summary>

`tsx` repository ના tsconfig `paths` વાપરીને `@deepseek-ai/*` packages ને source માંથી શોધે છે; અને `tmp/` gitignored છે, એટલે ઇતિહાસ સ્વચ્છ રહે.
</details>

<details><summary>4. `apply` throw કરે ત્યારે pinned commit પર શું થાય?</summary>

Exit 0, કોઈ output નહીં; error ફક્ત logger માં જાય છે. `bin-with-logs.ts` વડે `FAILED` દેખાય છે.
</details>

### મિત્રને સમજાવો (2 મિનિટ)

એક મિત્રને, જેણે ક્યારેય programming નથી કર્યું, આ ત્રણ વાક્યમાં સમજાવો: (1) model અને harness નો ફરક, (2) pin શા માટે, (3) પહેલો plugin શું કરે છે. જ્યાં અટકો ત્યાં ઉપરનો વિભાગ ફરી વાંચો.

## 🧠 Mastery check

1. "Harness" અને "agent" વચ્ચેનો તફાવત એક ઉદાહરણથી લખો.
2. `pnpm dsh` ખરેખર કયો Node command ચલાવે છે? (સંકેત: root `package.json`)
3. `import type {} from '@deepseek-ai/dsh-tools'` runtime પર શું import કરે છે, અને compile વખતે શું આપે છે?
4. WSL2 માં checkout `/mnt/c/` ને બદલે `~/` માં કેમ રાખવું?
5. Lab 0 માં `--import tsx` કાઢી નાખો તો શું થશે એવી તમારી ધારણા છે, અને કેમ?

જવાબો: [પરિશિષ્ટ D — પ્રકરણ 0](../appendix/D-lab-solutions.md#ch0).

## 🎬 આગળ શું

સાંજે ભોજનાલયમાં ગ્રાહક આવવા લાગે છે. ટેબલ 4 પરથી ઓર્ડર આવે છે, અને આરવ જુએ છે કે રમેશભાઈ ઓર્ડર લઈ, મહારાજ પાસે જઈ, કોઠારમાં દોડી, ફરી મહારાજ પાસે જાય છે. મીરાદીદી કહે છે: "કાલે આપણે **આવો જ એક ઓર્ડર** harness માં દરવાજાથી થાળી સુધી અનુસરીશું — 'આ repository નું README વાંચીને ગુજરાતી સાર આપો.' દરેક પગલું, દરેક ચોપડા-લીટી, દરેક file સાથે. આજનું `tmp/` + `tsx` જ્ઞાન ત્યાં દરેક lab માં વપરાશે."

---

પાછળ: [પ્રવેશ પ્રકરણ](pravesh-shunya-thi-shuruaat.md) · આગળ: [પ્રકરણ 1 — એક requestની આખી મુસાફરી](01-request-ni-musafari.md)

<!-- citations:begin (generated by tools/refdefs.py) -->
[agents-conventions]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/AGENTS.md#L130-L142
[boot-audit]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/boot/app-boot/src/index.ts#L1153-L1167
[boot-boot]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/boot/app-boot/src/index.ts#L1200-L1266
[bundle-base]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/bundle/base/cordis.patch.yml#L15-L18
[cordis-bin]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/vendor/cordis/bin.js#L7-L16
[deepseek-adapter]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/llm/llm-deepseek/src/adapter.ts#L22
[loader-entry-error]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/vendor/loader/src/config/entry.ts#L230
[loop-class]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/core/agent-loop/src/agent.ts#L112
[read-tool]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/fs/tool-fs/src/read.ts#L68-L163
[vendor-manifest]: https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/vendor/README.md#L19
<!-- citations:end -->
