# ચિત્રયાત્રા — પ્રકરણ 0–7

દરેક દૃશ્ય માટે એક અલગ ચિત્ર: **પહેલાં ઘટના જુઓ → મૂળ વાર્તા વાંચો → code સાથે નિયમ સમજો → ચિત્રની મદદથી ફરી સમજાવો.** ચિત્રની ડાબી બાજુ ભોજનાલયની ઘટના અને જમણી બાજુ તેનો technical ખ્યાલ છે. મૂળ પ્રકરણનું લખાણ, code, labs અને citations અકબંધ છે.

ચિત્રો AI દ્વારા બનાવેલાં શૈક્ષણિક દૃશ્યો છે; અંદરના diagrams સરળ સમજ માટે છે. ચોક્કસ API, ક્રમ, મર્યાદા અને ચકાસણી માટે મૂળ પ્રકરણનો code તથા pinned sources વાંચો. ગુજરાતી caption મૂળ નિયમ સાથે જોડે છે; જરૂરી English technical નામ ચિત્રમાં જ રાખ્યાં છે.

**કવર:** પહેલેથી રહેલાં 8 chapter covers જાળવ્યાં છે. **દૃશ્યો:** 66 નવા અલગ WebP ચિત્રો. પ્રવેશ પ્રકરણનાં પહેલેથી રહેલાં ચિત્રો પણ અકબંધ છે.

| પ્રકરણ | દૃશ્યો | વિષય |
|---|---:|---|
| [0](#chapter-0) | 6 | [પ્રકરણ 0 — પાયો અને પ્રથમ run](../../00-paayo-ane-pratham-run.md) |
| [1](#chapter-1) | 9 | [પ્રકરણ 1 — એક requestની આખી મુસાફરી](../../01-request-ni-musafari.md) |
| [2](#chapter-2) | 8 | [પ્રકરણ 2 — Cordis અને plugin architecture](../../02-cordis-plugin-architecture.md) |
| [3](#chapter-3) | 14 | [પ્રકરણ 3 — Tools, sessions અને model adapters](../../03-tools-sessions-adapters.md) |
| [4](#chapter-4) | 5 | [પ્રકરણ 4 — પોતાનો plugin બનાવો](../../04-potano-plugin.md) |
| [5](#chapter-5) | 9 | [પ્રકરણ 5 — Debugging, permissions અને reliability](../../05-debugging-permissions-reliability.md) |
| [6](#chapter-6) | 8 | [પ્રકરણ 6 — Maintainer અને architecture level](../../06-maintainer-architecture.md) |
| [7](#chapter-7) | 7 | [પ્રકરણ 7 — અંતિમ પ્રોજેક્ટ અને mastery પરીક્ષા](../../07-antim-project-mastery.md) |

<a id="chapter-0"></a>

## પ્રકરણ 0 — પાયો અને પ્રથમ run

[![પ્રકરણ 0 નું મૂળ કવર](../chapters/00-paayo-ane-pratham-run.webp)](../../00-paayo-ane-pratham-run.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. રમેશભાઈ રજા પર: દરેક જણ બદલી શકાય](../../00-paayo-ane-pratham-run.md#scene-0-1) | [<img src="00/01.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 1">](00/01.webp) | Same contract • Replaceable plugin |
| [2. ગયા મહિનાનું મેનુ-કાર્ડ: pin](../../00-paayo-ane-pratham-run.md#scene-0-2) | [<img src="00/02.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 2">](00/02.webp) | Pinned commit • Reproducible setup |
| [3. ત્રણ ચાવી: Node.js, Corepack, pnpm](../../00-paayo-ane-pratham-run.md#scene-0-3) | [<img src="00/03.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 3">](00/03.webp) | Node.js → Corepack → pnpm |
| [4. દસ સ્વિચ: build](../../00-paayo-ane-pratham-run.md#scene-0-4) | [<img src="00/04.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 4">](00/04.webp) | Build gates • Passed / failed / skipped |
| [5. રસોડાની બોલી: TypeScript ના પાંચ pattern](../../00-paayo-ane-pratham-run.md#scene-0-5) | [<img src="00/05.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 5">](00/05.webp) | TypeScript patterns • Contracts |
| [6. ઇમારતનો નકશો: repository](../../00-paayo-ane-pratham-run.md#scene-0-6) | [<img src="00/06.webp" width="240" alt="પ્રકરણ 0, દૃશ્ય 6">](00/06.webp) | Repository map • apps / vendor / packages |

<a id="chapter-1"></a>

## પ્રકરણ 1 — એક requestની આખી મુસાફરી

[![પ્રકરણ 1 નું મૂળ કવર](../chapters/01-request-ni-musafari.webp)](../../01-request-ni-musafari.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. ટેબલ 4: મહારાજ પાસે બે વાર કેમ જવું પડ્યું?](../../01-request-ni-musafari.md#scene-1-1) | [<img src="01/01.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 1">](01/01.webp) | 1 turn • 2 steps • Harness runs tools |
| [2. ફરજ-પત્રક: દરેક કામનો એક માલિક](../../01-request-ni-musafari.md#scene-1-2) | [<img src="01/02.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 2">](01/02.webp) | Ownership • Request sequence |
| [3. દરવાજો: ગ્રાહકના શબ્દો અંદર કેવી રીતે પહોંચે?](../../01-request-ni-musafari.md#scene-1-3) | [<img src="01/03.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 3">](01/03.webp) | CLI → Profile → Plugins |
| [4. ઓર્ડર-પેટી: રમેશભાઈ વ્યસ્ત હોય તો ઓર્ડર ક્યાં જાય?](../../01-request-ni-musafari.md#scene-1-4) | [<img src="01/04.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 4">](01/04.webp) | inject • Inbox • followup / claim |
| [5. લાઈટ ગઈ: અધૂરો ઓર્ડર અને પપ્પાનો નિયમ](../../01-request-ni-musafari.md#scene-1-5) | [<img src="01/05.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 5">](01/05.webp) | Lifecycle pairs • finally |
| [6. રમેશભાઈની તૈયારી: મહારાજ પાસે ખાલી હાથે ન જવાય](../../01-request-ni-musafari.md#scene-1-6) | [<img src="01/06.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 6">](01/06.webp) | preStep • Resolve • Assemble • Guard |
| [7. "લસણ વગર" નો ઝઘડો: step() ના છ ભાગ](../../01-request-ni-musafari.md#scene-1-7) | [<img src="01/07.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 7">](01/07.webp) | Log → Derive → Freeze → Stream → Settle |
| [8. કોઠાર: ચિઠ્ઠીથી સામાન સુધી (ટૂંકમાં)](../../01-request-ni-musafari.md#scene-1-8) | [<img src="01/08.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 8">](01/08.webp) | Tool call → Pipeline → Tool result |
| [9. વાત હવામાં, હિસાબ ચોપડામાં](../../01-request-ni-musafari.md#scene-1-9) | [<img src="01/09.webp" width="240" alt="પ્રકરણ 1, દૃશ્ય 9">](01/09.webp) | Live stream • Durable log |

<a id="chapter-2"></a>

## પ્રકરણ 2 — Cordis અને plugin architecture

[![પ્રકરણ 2 નું મૂળ કવર](../chapters/02-cordis-plugin-architecture.webp)](../../02-cordis-plugin-architecture.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. સવારે છ વાગ્યે: બે ઘડિયાળ](../../02-cordis-plugin-architecture.md#scene-2-1) | [<img src="02/01.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 1">](02/01.webp) | Startup • Runtime |
| [2. ક્રમ નથી, ફક્ત શરત: context, service, inject](../../02-cordis-plugin-architecture.md#scene-2-2) | [<img src="02/02.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 2">](02/02.webp) | Context • Service • inject |
| [3. આજનું મેનુ: પાંચ થર](../../02-cordis-plugin-architecture.md#scene-2-3) | [<img src="02/03.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 3">](02/03.webp) | Composition layers • Patch by id |
| [4. એક ખુરશી પર બે જણ: service registration](../../02-cordis-plugin-architecture.md#scene-2-4) | [<img src="02/04.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 4">](02/04.webp) | One service name • Duplicate is error |
| [5. હાજરી-કાર્ડ: fiber](../../02-cordis-plugin-architecture.md#scene-2-5) | [<img src="02/05.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 5">](02/05.webp) | Fiber lifecycle • PENDING ≠ FAILED |
| [6. નોકરી છોડતો કર્મચારી: effects અને cleanup](../../02-cordis-plugin-architecture.md#scene-2-6) | [<img src="02/06.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 6">](02/06.webp) | Effects • LIFO cleanup |
| [7. પાંચ ઘંટડી: events](../../02-cordis-plugin-architecture.md#scene-2-7) | [<img src="02/07.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 7">](02/07.webp) | Events • Five dispatch modes |
| [8. ખાલી ઇમારત અને ચાલતું ભોજનાલય: Cordis vs Harness](../../02-cordis-plugin-architecture.md#scene-2-8) | [<img src="02/08.webp" width="240" alt="પ્રકરણ 2, દૃશ્ય 8">](02/08.webp) | Cordis framework • Harness composition • Scope |

<a id="chapter-3"></a>

## પ્રકરણ 3 — Tools, sessions અને model adapters

[![પ્રકરણ 3 નું મૂળ કવર](../chapters/03-tools-sessions-adapters.webp)](../../03-tools-sessions-adapters.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. નોકરીનું વર્ણન: seam](../../03-tools-sessions-adapters.md#scene-3-1) | [<img src="03/01.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 1">](03/01.webp) | Capability seam • Definition / Provider / Consumer |
| [2. ચિઠ્ઠીનું ફોર્મ: input schema](../../03-tools-sessions-adapters.md#scene-3-2) | [<img src="03/02.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 2">](03/02.webp) | Input schema • Required / Optional |
| [3. નવો કોઠારી બે નોંધ કરાવે: registration](../../03-tools-sessions-adapters.md#scene-3-3) | [<img src="03/03.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 3">](03/03.webp) | Tool registration + Prompt guidance |
| [4. ડબ્બો ખોલ્યા વગર લેબલ: execution](../../03-tools-sessions-adapters.md#scene-3-4) | [<img src="03/04.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 4">](03/04.webp) | Resolve → stat → Read / Stream |
| [5. ત્રણ જાતની "ના", અને લાલ ચિઠ્ઠી: errors](../../03-tools-sessions-adapters.md#scene-3-5) | [<img src="03/05.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 5">](03/05.webp) | Tool error → Useful result |
| [6. સામાન અને લેબલ: canonical value અને render](../../03-tools-sessions-adapters.md#scene-3-6) | [<img src="03/06.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 6">](03/06.webp) | Canonical value → Validate → Render |
| [7. ચિઠ્ઠીનો આખો રસ્તો: tool pipeline](../../03-tools-sessions-adapters.md#scene-3-7) | [<img src="03/07.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 7">](03/07.webp) | Pipeline • One result per call |
| [8. દુભાષિયો: request](../../03-tools-sessions-adapters.md#scene-3-8) | [<img src="03/08.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 8">](03/08.webp) | Adapter • Canonical request → Provider wire |
| [9. મહારાજ ટુકડે ટુકડે બોલે: SSE → `StreamChunk`](../../03-tools-sessions-adapters.md#scene-3-9) | [<img src="03/09.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 9">](03/09.webp) | SSE → StreamChunk |
| [10. agency બદલાય તો? adapter boundary](../../03-tools-sessions-adapters.md#scene-3-10) | [<img src="03/10.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 10">](03/10.webp) | Adapter boundary • Replace provider |
| [11. શાહીથી, નંબર સાથે, તાળાબંધ: `Session.append`](../../03-tools-sessions-adapters.md#scene-3-11) | [<img src="03/11.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 11">](03/11.webp) | Session.append • Ordered immutable facts |
| [12. મહારાજ માટે કઈ લીટીઓ? surface અને `deriveMessages`](../../03-tools-sessions-adapters.md#scene-3-12) | [<img src="03/12.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 12">](03/12.webp) | Session surface → deriveMessages |
| [13. તિજોરી: persistence](../../03-tools-sessions-adapters.md#scene-3-13) | [<img src="03/13.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 13">](03/13.webp) | Persistence • JSONL • Flush |
| [14. લાઈટ ગયા પછી: recovery અને resume](../../03-tools-sessions-adapters.md#scene-3-14) | [<img src="03/14.webp" width="240" alt="પ્રકરણ 3, દૃશ્ય 14">](03/14.webp) | Recovery • Resume from log |

<a id="chapter-4"></a>

## પ્રકરણ 4 — પોતાનો plugin બનાવો

[![પ્રકરણ 4 નું મૂળ કવર](../chapters/04-potano-plugin.webp)](../../04-potano-plugin.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. નવું કાઉન્ટર ખોલતાં પહેલાં ચાર પ્રશ્ન](../../04-potano-plugin.md#scene-4-1) | [<img src="04/01.webp" width="240" alt="પ્રકરણ 4, દૃશ્ય 1">](04/01.webp) | Plugin design • Four readers |
| [2. સ્વાગત-કાઉન્ટર: સૌથી નાનો ફેરફાર](../../04-potano-plugin.md#scene-4-2) | [<img src="04/02.webp" width="240" alt="પ્રકરણ 4, દૃશ્ય 2">](04/02.webp) | Small plugin • Config • apply |
| [3. પપ્પાના છ નિયમ: `csv_compare`, નિયમો પહેલાં](../../04-potano-plugin.md#scene-4-3) | [<img src="04/03.webp" width="240" alt="પ્રકરણ 4, દૃશ્ય 3">](04/03.webp) | csv_compare • Rules before code |
| [4. પોતાની ચાવી નહીં: harness wiring](../../04-potano-plugin.md#scene-4-4) | [<img src="04/04.webp" width="240" alt="પ્રકરણ 4, દૃશ્ય 4">](04/04.webp) | Harness wiring • ctx.fs • signal |
| [5. ત્રણ ચૂપ ભૂલ: code review](../../04-potano-plugin.md#scene-4-5) | [<img src="04/05.webp" width="240" alt="પ્રકરણ 4, દૃશ્ય 5">](04/05.webp) | Code review • Avoid silent correctness |

<a id="chapter-5"></a>

## પ્રકરણ 5 — Debugging, permissions અને reliability

[![પ્રકરણ 5 નું મૂળ કવર](../chapters/05-debugging-permissions-reliability.webp)](../../05-debugging-permissions-reliability.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. પહેલો ભેદ: ચિઠ્ઠી પાછી, કે ઓર્ડર બંધ?](../../05-debugging-permissions-reliability.md#scene-5-1) | [<img src="05/01.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 1">](05/01.webp) | Error scope • Tool / Turn |
| [2. "દાળ ખારી કેમ થઈ?": છ સાધન](../../05-debugging-permissions-reliability.md#scene-5-2) | [<img src="05/02.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 2">](05/02.webp) | Debugging evidence • Identify the owner |
| [3. "એવું કોઈ ખાનું જ નથી": unavailable tool](../../05-debugging-permissions-reliability.md#scene-5-3) | [<img src="05/03.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 3">](05/03.webp) | Unavailable tool • UNKNOWN_TOOL |
| [4. "ફોર્મ અધૂરું": invalid input](../../05-debugging-permissions-reliability.md#scene-5-4) | [<img src="05/04.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 4">](05/04.webp) | Invalid input • Schema / Value |
| [5. ફોનની ત્રણ મુશ્કેલી: provider error](../../05-debugging-permissions-reliability.md#scene-5-5) | [<img src="05/05.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 5">](05/05.webp) | Provider errors • Classify before retry |
| [6. લાઈટ ગઈ: interrupted execution](../../05-debugging-permissions-reliability.md#scene-5-6) | [<img src="05/06.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 6">](05/06.webp) | Cancellation • Propagate signal |
| [7. રાતની પાળી: permissions અને sandbox](../../05-debugging-permissions-reliability.md#scene-5-7) | [<img src="05/07.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 7">](05/07.webp) | Approval • Sandbox boundary |
| [8. agency ને ચોપડાનાં પાનાં: data boundary](../../05-debugging-permissions-reliability.md#scene-5-8) | [<img src="05/08.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 8">](05/08.webp) | Data boundary • Model request leaves process |
| [9. ત્રણ ચિઠ્ઠી એકસાથે: concurrency](../../05-debugging-permissions-reliability.md#scene-5-9) | [<img src="05/09.webp" width="240" alt="પ્રકરણ 5, દૃશ્ય 9">](05/09.webp) | Concurrency • Parallel work / Ordered results |

<a id="chapter-6"></a>

## પ્રકરણ 6 — Maintainer અને architecture level

[![પ્રકરણ 6 નું મૂળ કવર](../chapters/06-maintainer-architecture.webp)](../../06-maintainer-architecture.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. એક સવાર, ત્રણ વિનંતી: ત્રણ extension માર્ગ](../../06-maintainer-architecture.md#scene-6-1) | [<img src="06/01.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 1">](06/01.webp) | Config • Plugin • Patch |
| [2. ખૂણાનો નિરીક્ષક: માપન, અને તેની પ્રામાણિકતા](../../06-maintainer-architecture.md#scene-6-2) | [<img src="06/02.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 2">](06/02.webp) | Metrics • Around-wrapper |
| [3. સૂચન-પત્ર, પગલું 1: પ્રશ્ન](../../06-maintainer-architecture.md#scene-6-3) | [<img src="06/03.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 3">](06/03.webp) | Maintainer step 1 • State the problem |
| [4. પગલું 2: ફરી ઉત્પન્ન](../../06-maintainer-architecture.md#scene-6-4) | [<img src="06/04.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 4">](06/04.webp) | Maintainer step 2 • Reproduce |
| [5. પગલું 3: મૂળ કારણ](../../06-maintainer-architecture.md#scene-6-5) | [<img src="06/05.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 5">](06/05.webp) | Maintainer step 3 • Root cause |
| [6. પગલું 4: સુધાર. "દુકાન બંધ" અને "ઓર્ડર રદ" એક નથી](../../06-maintainer-architecture.md#scene-6-6) | [<img src="06/06.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 6">](06/06.webp) | Maintainer step 4 • Correct lifetime |
| [7. પગલું 5: સાબિતી, અને એક પ્રામાણિક કબૂલાત](../../06-maintainer-architecture.md#scene-6-7) | [<img src="06/07.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 7">](06/07.webp) | Maintainer step 5 • Proof and limits |
| [8. પગલું 6: અસર. "છેલ્લી ઘંટડી" ની રાહ જોનારા](../../06-maintainer-architecture.md#scene-6-8) | [<img src="06/08.webp" width="240" alt="પ્રકરણ 6, દૃશ્ય 8">](06/08.webp) | Maintainer step 6 • Downstream contract |

<a id="chapter-7"></a>

## પ્રકરણ 7 — અંતિમ પ્રોજેક્ટ અને mastery પરીક્ષા

[![પ્રકરણ 7 નું મૂળ કવર](../chapters/07-antim-project-mastery.webp)](../../07-antim-project-mastery.md)

| દૃશ્ય — મૂળ વાર્તા | ચિત્ર | Technical જોડાણ |
|---|---|---|
| [1. અરીસો: bank નું credit, તમારું debit](../../07-antim-project-mastery.md#scene-7-1) | [<img src="07/01.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 1">](07/01.webp) | One account perspective • Normalize signs |
| [2. એક પૈસો, બે તારીખ, ત્રણ શૂન્ય: normalize](../../07-antim-project-mastery.md#scene-7-2) | [<img src="07/02.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 2">](07/02.webp) | Normalize • Paise / Date / Reference |
| [3. મુનીમજીનો ક્રમ: છ નિયમ](../../07-antim-project-mastery.md#scene-7-3) | [<img src="07/03.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 3">](07/03.webp) | V1 → D1 → R1 → R2 → A1 → U1 |
| [4. મણકા અને દોરા: "પહેલો આવ્યો તે લઈ ગયો" કેમ ખોટું](../../07-antim-project-mastery.md#scene-7-4) | [<img src="07/04.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 4">](07/04.webp) | Connected components • Ambiguity |
| [5. આંગળીની ચકાસણી: fixtures અને golden report](../../07-antim-project-mastery.md#scene-7-5) | [<img src="07/05.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 5">](07/05.webp) | Fixtures • Golden report • Invariant |
| [6. બીજી bank નો કાગળ: harness wiring](../../07-antim-project-mastery.md#scene-7-6) | [<img src="07/06.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 6">](07/06.webp) | Column mapping • Fail loud |
| [7. ફક્ત વાંચવાની ચાવી: ભવિષ્યનો Tally connector](../../07-antim-project-mastery.md#scene-7-7) | [<img src="07/07.webp" width="240" alt="પ્રકરણ 7, દૃશ્ય 7">](07/07.webp) | Future design only • Read-only capability |

## ચકાસણી અને ફરી ગોઠવણ

```bash
python3 tools/scene-images.py
```

આ command repository root માંથી ચલાવો. તે 8 પ્રકરણોમાં 66 દૃશ્યો, દરેક image block, WebP files અને મૂળ લખાણના Git blob hashes તપાસે છે. Pillow હોય તો image decode તથા dimensions પણ ચકાસે છે. `--write` ફક્ત નિશાનવાળા નવા image blocks ફરી ગોઠવે છે; મૂળ લખાણ બદલાયેલું હોય તો કામ અટકાવે છે.

[manifest.json](manifest.json) માં દરેક ચિત્રનું chapter, scene, મૂળ heading, વાર્તાનું વર્ણન, technical જોડાણ, Gujarati caption અને મૂળ chapter blob SHA છે. પ્રકરણ 7નું છેલ્લું દૃશ્ય **ભવિષ્યની design** છે; connector અમલમાં મુકાયેલો હોવાનો દાવો નથી.

પહેલેથી રહેલું `tools/build-artifact.mjs` આ બધા WebP ચિત્રોને full-book HTML માં embed કરે છે. આ repository update થી README માં આપેલી બાહ્ય hosted આવૃત્તિ આપોઆપ બદલાતી નથી; નવી આવૃત્તિ build અને republish કરવી પડે.
