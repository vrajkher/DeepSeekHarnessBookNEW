# DeepSeek Harness: 12મા ધોરણથી Expert Developer સુધી

એક ગુજરાતી પુસ્તક, જે એક જ વાર્તા — અમદાવાદનું "અન્નપૂર્ણા થાળી ઘર" — માં software ચલાવીને, સાચો code trace કરીને, વર્તન બદલીને અને પરિણામ ચકાસીને શીખવે છે.

- **વિષય:** [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) — Cordis પર બનેલું "everything-is-a-plugin" agent harness.
- **Pinned commit:** [`fcc0ad4`](https://github.com/deepseek-ai/deepseek-harness/tree/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159) (`master`, version 0.2.2-rc.1, 2026-11-04). દરેક source link આ commit પર pinned છે.
- **વાચક:** 12મું ધોરણ પાસ કરેલો કોઈ પણ વિદ્યાર્થી — programming ન આવડતું હોય તો પણ. [પ્રવેશ પ્રકરણ](book/pravesh-shunya-thi-shuruaat.md) terminal, JSON, HTTP, JavaScript અને AI model નો પાયો શૂન્યથી શીખવે છે; પ્રકરણ 7 ના અંતે તમે maintainer સ્તરનું કામ કરો છો.
- **API key જરૂરી નથી.** બધી labs repository ના keyless mock provider સાથે ચાલે છે.

> **Verification marks:** ✅ pinned source વાંચીને ચકાસ્યું · 🧪 આ પુસ્તક લખતી વખતે ચલાવીને ચકાસ્યું · ⚠️ ચકાસ્યું નથી.
> Repository ની [SAFETY.md](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/SAFETY.md) પહેલાં વાંચો: આ developer-preview software model-generated commands ચલાવી શકે છે.

## વાર્તા એક ફકરામાં

**આરવ** 12મું ધોરણ પાસ કરી college ની રાહ જુએ છે; તેના પપ્પાનું ભોજનાલય છે. Software engineer પિતરાઈ બહેન **મીરાદીદી** 15 દિવસ રોજ એક પગથિયું શીખવે છે, અને ભોજનાલય જ પ્રયોગશાળા બને છે: **મહારાજ** = AI model (રસોડાની બહાર પગ નથી મૂકતા, ફક્ત ચિઠ્ઠી લખે), **રમેશભાઈ** (વેઈટર) = agent loop, **કોઠાર** = tools, **ઓર્ડર-ચોપડો** = session log, **કાંતિકાકા** (મેનેજર) = Cordis, **પપ્પાની મંજૂરી** = approval, **રસોડાની સીમા** = sandbox. છેલ્લે આરવ **મુનીમજી**નો ખરો પ્રશ્ન ઉકેલે છે: bank statement અને Tally નો ચોપડો મેળવવો.

દરેક પ્રકરણ વાર્તાના એક દિવસથી શરૂ થાય છે અને આગલા દિવસના પ્રશ્ન પર પૂરું થાય છે. ઉપમા જ્યાં "તૂટે" ત્યાં ⚠️ box સ્પષ્ટ કહે છે કે ખરું technical વર્તન શું છે.

## "Top 1%" નો અર્થ આ પુસ્તકમાં

લક્ષ્ય તરીકે "world top 1% developer"; માપ તરીકે અવલોકી શકાય તેવી કુશળતા: architecture સમજાવવું, request ને source માં trace કરવું, plugin બનાવવો, failures diagnose કરવી, વર્તન માપવું, અને સ્પષ્ટ design rationale સાથે well-tested ફેરફાર રજૂ કરવો. વિગત: [mastery rubric](appendix/E-mastery-rubric.md). પ્રકરણ 7 નો ઉપસંહાર આખું પુસ્તક "[expert ની દસ ટેવો](book/07-antim-project-mastery.md#upsanhar)" માં સમેટે છે.

## વિષયસૂચિ

શરૂઆત [સમગ્ર નકશો](book/overview-samagra-naksho.md) થી કરો — આખું પુસ્તક, વાર્તા અને ઉપમા એક પાનામાં.

| Level | વાર્તાનો દિવસ | પ્રકરણ | મુખ્ય lab |
|---|---|---|---|
| — | — | **[સમગ્ર નકશો — આખું પુસ્તક એક નજરે](book/overview-samagra-naksho.md)** (પહેલાં આ વાંચો) | નવ પ્રકરણોનું જોડાણ, એક ઉપમા, યાદ-ચાવીઓ |
| −1 | 1 | **[પ્રવેશ — શૂન્યથી શરૂઆત](book/pravesh-shunya-thi-shuruaat.md)** (નવું) | terminal, JSON/YAML/CSV, HTTP, JavaScript, TypeScript; 40-line રમકડા-agent |
| 0 | 2 | [પાયો અને પ્રથમ run](book/00-paayo-ane-pratham-run.md) | key વગર પહેલો Cordis plugin |
| 1 | 3–4 | [એક requestની આખી મુસાફરી](book/01-request-ni-musafari.md) | README ઉદાહરણ: દસ સ્ટેશન, 2 model calls, `read` tool, દરેક event |
| 2 | 5–6 | [Cordis અને plugin architecture](book/02-cordis-plugin-architecture.md) | `--dump-config`, ખૂટતી service, tutorial race |
| 3 | 7 | [Tools, sessions અને model adapters](book/03-tools-sessions-adapters.md) | `read` tool અંદરથી, wire capture, interrupted session resume |
| 4 | 8–9 | [પોતાનો plugin બનાવો](book/04-potano-plugin.md) | `greet` ફેરફાર, read-only `csv_compare` tool |
| 5 | 10–11 | [Debugging, permissions અને reliability](book/05-debugging-permissions-reliability.md) | ચાર failures, પાંચ sandbox પ્રયોગ |
| 6 | 12–13 | [Maintainer અને architecture level](book/06-maintainer-architecture.md) | metrics, headless teardown contribution |
| 7 | 14–15 | [અંતિમ પ્રોજેક્ટ અને mastery પરીક્ષા](book/07-antim-project-mastery.md) | bank ↔ Tally reconciliation, debugging challenge, ઉપસંહાર |

### પરિશિષ્ટ

- [A — Source index](appendix/A-source-index.md) (પૂર્ણ generated table: [citations.generated.md](appendix/citations.generated.md))
- [B — Command reference](appendix/B-command-reference.md)
- [C — ગુજરાતી–English glossary](appendix/C-glossary.md) (દરેક શબ્દ ભોજનાલયની ઉપમા સાથે)
- [D — Lab solutions અને mastery check જવાબો](appendix/D-lab-solutions.md)
- [E — Mastery rubric](appendix/E-mastery-rubric.md)
- [F — Coverage map](appendix/F-coverage-map.md)
- [G — Verification log](appendix/G-verification-log.md) (environment, workarounds, docs-vs-code તફાવતો)
- [H — Chapter status અને resume notes](appendix/H-status.md)

## દરેક પ્રકરણનું માળખું

દરેક પ્રકરણ એક જ ક્રમમાં ચાલે છે, જેથી વાચકને હંમેશા ખબર રહે કે તે ક્યાં છે:

1. 🎬 **વાર્તા** — ભોજનાલયમાં આજે કયો પ્રશ્ન આવ્યો.
2. 🎯 **આ પ્રકરણ પછી તમે શું કરી શકશો.**
3. 🗺️ **નકશો** — પ્રકરણ એક ચિત્રમાં.
4. **વિષય** — દરેક નવો શબ્દ પહેલી વાર આવે ત્યાં જ 📦 box માં સમજાવેલો; 🍽️ ઉપમા; પછી ખરો code — **repository code**, **teaching pseudocode**, અને **book lab code** હંમેશા અલગ લખેલા — અને pinned source link. મુશ્કેલી: 🟢 સૌ માટે, 🟡 થોડું ઊંડું, 🔴 ઊંડું પાણી (પહેલી વાંચનમાં છોડી શકો).
5. Source map: ક્રમમાં ખોલવાના pinned links અને symbols.
6. 🧪 **Lab** — commands અને અપેક્ષિત અવલોકનો સાથે reproducible.
7. 🔮 **આગાહી કસોટી** — જવાબ જાહેર થાય તે પહેલાં.
8. 🩺 **નિષ્ફળતા** — એક failure case અને તેનું ટૂંકું નિદાન.
9. ✅ **સાર** — એક વાક્ય, ⚠️ ઉપમા ક્યાં તૂટે છે, નવા શબ્દો, યાદ-ચાવીઓ, ગેરસમજો, પુનરાવર્તન કાર્ડ, "મિત્રને સમજાવો".
10. 🧠 **Mastery check** — જવાબો [પરિશિષ્ટ D](appendix/D-lab-solutions.md) માં અલગ.
11. 🎬 **આગળ શું** — વાર્તા આગલા દિવસ સાથે જોડાય.

## Repository layout (આ પુસ્તકનું)

| Folder | શું છે |
|---|---|
| `book/` | સમગ્ર નકશો, પ્રવેશ પ્રકરણ, પ્રકરણ 0–7 |
| `appendix/` | પરિશિષ્ટ A–H અને generated citation table |
| `labs/` | પુસ્તક-માલિકીનો code (upstream નહીં): plugins, tests, fixtures, scripts, અને `pravesh/` ના harness-વગરના નાના programs — [labs/README.md](labs/README.md) |
| `evidence/` | આ પુસ્તક માટે ચલાવેલા runs નાં sanitized outputs |
| `tools/` | citations generator, reference-link writer, book verifier, mermaid verifier, artifact builder |

## Labs ઝડપથી શરૂ કરો

**પ્રવેશ પ્રકરણ** (harness વગર, કોઈ પણ નવા Node પર):

```bash
node labs/pravesh/toy-agent.mjs
```

અપેક્ષિત છેલ્લી line: `જવાબ: આજના મેનુમાં 6 વાનગી છે.`

**પ્રકરણ 0–7** (harness checkout જોઈએ):

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git && cd deepseek-harness
```

```bash
git checkout --detach fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159 && corepack enable && pnpm install && pnpm run build
```

```bash
cp -r <this-book>/labs tmp/book-labs && bash tmp/book-labs/request-trace/run-mock.sh
```

અપેક્ષિત છેલ્લી stdout line: `README નો સાર: DeepSeek Harness એ plugin આધારિત agent harness છે.` (mock provider નો scripted text).

## પુસ્તક ચકાસવું (maintainers માટે)

```bash
python3 tools/verify_book.py <pinned harness checkout>
```

```bash
node tools/verify-mermaid.mjs <directory with mermaid and jsdom in node_modules>
```

પહેલો command citations, reference-links, relative links/anchors અને દરેક permalink ની line range ચકાસે છે; બીજો દરેક mermaid diagram parse કરે છે.

## License

આ પુસ્તકનો text અને `labs/` નો code આ repository ના [LICENSE](LICENSE) હેઠળ છે. DeepSeek Harness ના quoted excerpts અને `labs/cordis-basics/tool-logger.ts` upstream MIT license હેઠળ છે.
