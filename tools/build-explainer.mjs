#!/usr/bin/env node
// Book tool: build the interactive "Harness Explainer" page (Transformer-Explainer style).
// Every event, timestamp, count and table on the page is read here from evidence/ and
// labs/ fixtures, so the page replays the book's recorded runs and cannot drift from them.
// Usage: node tools/build-explainer.mjs <output.html>
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const out = process.argv[2]
if (!out) { console.error('usage: build-explainer.mjs <out.html>'); process.exit(2) }
const ROOT = resolve(import.meta.dirname, '..')
const read = p => readFileSync(join(ROOT, p), 'utf8')

// --- recorded headless runs -------------------------------------------------------------
function trace(file) {
  const seen = new Set()
  const events = []
  for (const line of read(file).split('\n')) {
    const m = line.match(/^\[trace \+\s*(\d+)ms\] (.*)$/)
    if (!m || seen.has(line)) continue
    seen.add(line)
    events.push({ t: Number(m[1]), text: m[2] })
  }
  return events
}
const SCENARIOS = [
  { id: 'normal', file: 'evidence/two-calls.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: '<path><harness>/README.md</path> … 1: # DeepSeek Harness …', toolOk: true },
  { id: 'title', file: 'evidence/three-calls-title-on-exhausted.err', exit: 1, stdout: '', stderr: 'dsh: SERVER: mock script exhausted', toolResult: '<path><harness>/README.md</path> … 1: # DeepSeek Harness …', toolOk: true },
  { id: 'unknown', file: 'evidence/unknown-tool.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: 'Error: unknown tool "read_everything"  (UNKNOWN_TOOL)', toolOk: false, stopAt: 'resolve' },
  { id: 'invalid', file: 'evidence/invalid-args.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: 'Error: invalid arguments: missing required property "file_path"  (INVALID_ARGS)', toolOk: false, stopAt: 'validate' },
  { id: 'ratelimit', file: 'evidence/rate-limit.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: '<path><harness>/README.md</path> … 1: # DeepSeek Harness …', toolOk: true },
  { id: 'auth', file: 'evidence/auth-error.err', exit: 1, stdout: '', stderr: 'dsh: AUTH: mock authentication failed' },
  { id: 'sigint', file: 'evidence/int1.err', exit: 130, stdout: '', stderr: 'dsh: session "session-…": flush on a closed handle' },
  { id: 'sandbox', file: 'evidence/outside-write.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: 'Error: [sandbox: file access denied under workspace-write mode] … (FS_SANDBOX_DENIED)', toolOk: false, stopAt: 'body' },
  { id: 'escalate', file: 'evidence/escalate-write.err', exit: 0, stdout: 'README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.', toolResult: 'Error: sandbox escalation to "danger-full-access" requires approval, but no approval channel is available', toolOk: false, stopAt: 'policy' },
].map(s => ({ ...s, events: trace(s.file) }))

// --- startup ----------------------------------------------------------------------------
const rows = []
let layer = ''
for (const line of read('evidence/dump.yml').split('\n')) {
  const l = line.match(/^# == (.*)$/); if (l) layer = l[1]
  const r = line.match(/^- id: (.*)$/); if (r) rows.push({ id: r[1].trim(), layer })
}
const nofs = [...read('evidence/nofs.err').matchAll(/^([\w-]+) \(@[^)]*\): pending \(waiting for services?: ([^)]*)\)/gm)].map(m => ({ id: m[1], wait: m[2] }))
const nosp = [...read('evidence/nosp.err').matchAll(/^  ([\w-]+)( \(required\))?\s{2,}(.+)$/gm)].filter(m => m[1] !== 'Plugin').map(m => ({ id: m[1], required: !!m[2], wait: m[3].trim() }))
const gates = [...read('evidence/build.log').matchAll(/PASS (.+) \(([\d.]+)s\)/g)].map(m => ({ name: m[1], s: Number(m[2]) }))

// --- measurement, fixtures, golden report -----------------------------------------------
const measure = read('evidence/measure.jsonl').trim().split('\n').map(l => JSON.parse(l))
const csvA = read('labs/csv-inspect/fixtures/export-a.csv')
const csvB = read('labs/csv-inspect/fixtures/export-b.csv')
const csvReport = (read('book/04-potano-plugin.md').match(/key: Ref[^]*?PROBLEM left L7[^\n]*/) || [''])[0] // quoted in chapter 4 from the stored session
const bank = read('labs/reconcile/fixtures/bank-statement.csv')
const tally = read('labs/reconcile/fixtures/tally-bank-ledger.csv')
const golden = read('labs/reconcile/fixtures/expected-report.txt')

const cites = {}
for (const line of read('appendix/citations.generated.md').split('\n').slice(2)) {
  const m = line.match(/^\| `([^`]+)` \| `([^`]*)` \| `([^`]*)` .*\]\((https:[^)]+)\)/)
  if (m) cites[m[1]] = { symbol: m[2], file: m[3], url: m[4] }
}
const DATA = { cites, scenarios: SCENARIOS, rows, nofs, nosp, gates, measure, csvA, csvB, csvReport, bank, tally, golden }
const json = JSON.stringify(DATA).replace(/</g, '\\u003c')
const html = read('tools/explainer-template.html').replace('/*DATA*/null', json)
writeFileSync(out, html)
console.log(`build-explainer: ${SCENARIOS.length} scenarios (${SCENARIOS.reduce((n, s) => n + s.events.length, 0)} events), ${rows.length} rows, ${gates.length} gates, ${measure.length} measurements, ${(html.length / 1024).toFixed(0)} KB -> ${out}`)
