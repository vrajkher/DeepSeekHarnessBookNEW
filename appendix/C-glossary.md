# પરિશિષ્ટ C — ગુજરાતી–English glossary

દરેક term નો પહેલો ઉપયોગ જે પ્રકરણમાં થયો છે તે છેલ્લી column માં છે ("પ્રવેશ" = [પ્રવેશ પ્રકરણ](../book/pravesh-shunya-thi-shuruaat.md)). Code identifiers હંમેશા English માં જ રહે છે.
"🍽️ ભોજનાલયમાં" column આખા પુસ્તકની વાર્તા (અન્નપૂર્ણા થાળી ઘર) માં એ શબ્દ કયા પાત્ર/વસ્તુ તરીકે આવે છે તે બતાવે છે; પાત્રોની પૂરી યાદી [પ્રવેશ પ્રકરણ](../book/pravesh-shunya-thi-shuruaat.md) માં છે. ઉપમા ફક્ત યાદ રાખવા માટે છે — શંકા પડે ત્યારે "ગુજરાતી અર્થ" column જ સાચી.

## પાયાના શબ્દો (પ્રવેશ પ્રકરણ)

| English term | ગુજરાતી અર્થ | 🍽️ ભોજનાલયમાં | નક્કર ઉદાહરણ | પ્રકરણ |
|---|---|---|---|---|
| File / folder | નામવાળી માહિતી / તેને રાખતું ખાનું | કોઠારનો ડબ્બો / કબાટ | `menu.txt`, `labs/` | પ્રવેશ |
| Path (absolute / relative) | file નું સરનામું; `/` થી પૂરું, કે "હું જ્યાં છું ત્યાંથી" | પૂરું સરનામું vs "અહીંથી ડાબે" | `/home/aarav/x`, `labs/x` | પ્રવેશ |
| Program / process | સૂચનાઓની file / ચાલતો program | રેસીપી-ચોપડી / ચૂલા પરની રસોઈ | `node`, ચાલતું `dsh` | પ્રવેશ |
| Exit code | process પૂરો થતાં આપતો આંકડો; 0 = સફળ | "0 = process બરાબર" | `echo $?` | પ્રવેશ |
| stdout / stderr | સામાન્ય output / ભૂલ-માહિતી output | થાળી / રસોડાની બૂમો | જવાબ vs trace | પ્રવેશ |
| Terminal / shell | લખીને computer ચલાવવાની બારી | ટપાલની બારી | `pwd`, `ls` | પ્રવેશ |
| Environment variable | process ને બહારથી આપેલી નામવાળી સેટિંગ | "આજના ઓર્ડર માટે ખાસ સૂચના" | `DSH_HOME=…` | પ્રવેશ |
| JSON / JSONL | `{}`/`[]` વાળો data / એક line = એક JSON | કડક ફોર્મ / ચોપડાની લીટીઓ | session events | પ્રવેશ |
| YAML | indentation વાળો config format | વાંચવામાં સહેલું મેનુ | `cordis.yml` | પ્રવેશ |
| CSV | comma થી અલગ columns વાળો table | Excel/Tally/bank ની યાદી | `export-a.csv` | પ્રવેશ |
| HTTP request / response | method + URL + headers + body / status + body | ટપાલનો પત્ર / જવાબ | `POST /v1/messages`, `200` | પ્રવેશ |
| Status code | જવાબનો આંકડો | 200 ઓકે, 401 card ખોટું, 429 લાઇન વ્યસ્ત, 500 ગડબડ | `429` | પ્રવેશ |
| API / API key | program-થી-program વાતના નિયમો / ગુપ્ત ચાવી | agency ના નિયમો / membership card | DeepSeek API | પ્રવેશ |
| localhost / port | આ જ computer / server નો બારી-નંબર | ઘરની અંદરનો ફોન | `localhost:8000` | પ્રવેશ |
| Object / array / function | નામ-value સમૂહ / ક્રમવાળી યાદી / નામવાળું કામ | ઓર્ડર-ફોર્મ / વાનગીઓની યાદી / રેસીપી | `thali`, `items`, `bill()` | પ્રવેશ |
| Class / instance | ઢાંચો / તેમાંથી બનેલી વસ્તુ | "વેઈટર" પદ / રમેશભાઈ | `ReactLoopAgent` | પ્રવેશ |
| `try` / `catch` / `finally` | ભૂલ પકડવી / ગમે તે થાય તો ચલાવવું | "ગમે તે થાય, ચોપડામાં અંત લખો" | `turn/end` | પ્રવેશ |
| Promise / `await` | ભવિષ્યના પરિણામનું વચન / તેની રાહ | ઓર્ડર-ટોકન | `await cook()` | પ્રવેશ |
| Event / listener | કંઈક થયાની જાહેરાત / ત્યારે ચાલતું function | ઘંટડી / દોડતો કર્મચારી | `ctx.on(...)` | પ્રવેશ |
| Token | model માટે text નો નાનો ટુકડો | શબ્દનો ટુકડો | — | પ્રવેશ |
| Context window | model એક વખતમાં જોઈ શકે તેટલા tokens | મહારાજની એક વખતની સાંભળવાની મર્યાદા | `1048576` | પ્રવેશ |
| Tool / tool call | harness નું કામ / model ની તેને ચલાવવાની લેખિત માંગ | કોઠારનું ખાનું / મહારાજની ચિઠ્ઠી | `read {"file_path":…}` | પ્રવેશ |
| Repository / clone / branch / PR | project + ઇતિહાસ / પૂરી નકલ / ઇતિહાસની શાખા / ફેરફાર લેવાની વિનંતી | ભંડાર / ફોટોકોપી / શાખા / સૂચન-પત્ર | `deepseek-harness` | પ્રવેશ |
| Upstream | મૂળ project | મુખ્ય કચેરી | `deepseek-ai/deepseek-harness` | પ્રવેશ, 6 |

## Harness ના શબ્દો (પ્રકરણ 0–7)

| English term | ગુજરાતી અર્થ | 🍽️ ભોજનાલયમાં | નક્કર ઉદાહરણ | પ્રકરણ |
|---|---|---|---|---|
| AI model | text/tool call બનાવતું ગણિતીય મોડેલ | મહારાજ | `deepseek-flash` | 0 |
| Model provider | model ને HTTP API દ્વારા ઉપલબ્ધ કરાવતી સેવા | રસોઈ-સેવા agency (ફોન પર) | DeepSeek official API | 0 |
| Agent | model ↔ tools નો loop, કામ પૂરું થાય ત્યાં સુધી | રમેશભાઈની દોડધામ | `ReactLoopAgent` | 0 |
| Harness | agent ચલાવવાનું આખું તંત્ર | આખું ભોજનાલય | `dsh` | 0 |
| Plugin | service/tool/listener ઉમેરતો, unload પર પાછો ખેંચાતો ભાગ | એક કાઉન્ટર/કર્મચારી | `@deepseek-ai/dsh-tool-fs` | 0 |
| Commit / SHA | Git ઇતિહાસનું નામવાળું snapshot | ફોટો અને તેની પાછળનો નંબર | `fcc0ad4…` | 0 |
| Workspace (pnpm) | એક repository માં ઘણાં packages | એક ઇમારત, ઘણાં કાઉન્ટર | `packages/<group>/<pkg>` | 0 |
| Corepack | `packageManager` મુજબ સાચો pnpm લાવતું tool | સાચો કોઠારી બોલાવનાર | `corepack enable` | 0 |
| Type stripping / tsx | TypeScript ને build વગર ચલાવવું | અંદરનો રસ્તો જાણતો કર્મચારી | `node --import tsx …` | 0 |
| Declaration merging | બીજા package ના interface માં fields ઉમેરવા | નોકરીના વર્ણનમાં નવી લીટી | `ctx.tools` ના types | 0 |
| Discriminated union | `kind`/`type` field થી આકાર નક્કી થતો union | ચિઠ્ઠી પરનો લાલ/લીલો stamp | `{ kind: 'enter' } \| { kind: 'reject' }` | 0 |
| AbortSignal | ચાલુ કામ રદ કરવાનો signal | "રદ" બટન સાથે જોડાયેલો દીવો | `signal.throwIfAborted()` | 0 |
| Turn | user input થી "કંઈ બાકી નથી" સુધીનું કામ | એક આખો ઓર્ડર | README ઉદાહરણ = 1 turn | 1 |
| Step | એક model request + તેના tools | મહારાજ સાથે એક વાતચીત | README ઉદાહરણ = 2 steps | 1 |
| Inbox | agent ને મળેલા, હજી claim ન થયેલા messages | ઓર્ડર-પેટી | `agent.followup(...)` | 1 |
| Session log | append-only events ની ટકાઉ યાદી | ઓર્ડર-ચોપડો | `session.v4.jsonl.zstd` | 1 |
| Session event | log માં લખાતી એક હકીકત | ચોપડાની એક લીટી | `tool/call`, `turn/end` | 1 |
| Live event | ફક્ત process માં, log માં નહીં | હવામાંની વાત | `agent/assistant-stream` | 1 |
| Waterfall | `next()` વાળી middleware જેવી listener સાંકળ | ધોધ — હાથોહાથ ઓર્ડર | `agent/pre-step`, `llm/stream` | 1 |
| Request header | log માં provider/model/tools ની નોંધ | ઓર્ડર-ચિઠ્ઠીનું મથાળું | `request/header reason=initial` | 1 |
| Mock provider | key વગર scripted જવાબ આપતો server | રિહર્સલ મહારાજ | `dsh-llm-mock-server` | 1 |
| Startup | process શરૂ થતાં plugin tree બનવું | સવારે દુકાન ખૂલવી | `boot()` | 2 |
| Profile | bundles + user patch નું નામવાળું composition | શાખા | `headless` | 2 |
| Bundle | config rows + code નું વિતરણ સ્વરૂપ | છાપેલું મેનુ-પાનું | `dsh-base` | 2 |
| Patch / overlay | row ને id થી બદલતી કે ઉમેરતી YAML | મેનુ પર ચોંટાડેલી ચિઠ્ઠી | `--patch overlay.yml` | 2 |
| Context | services રાખતો Cordis object | ભોજનાલયની ઇમારત | `ctx` | 2 |
| Service | context પર નામવાળી capability | ખુરશી પરનો કર્મચારી | `ctx.tools` | 2 |
| Dependency Injection | plugin ને જરૂરી service runtime દ્વારા મળવી | "સાધન મળે તો કામ" | `inject = ['tools']` | 2 |
| Effect | undo કરી શકાય તેવી નોંધણી | ઉધારની પહોંચ | `ctx.tools.register(...)` disposer | 2 |
| Fiber | mounted plugin નું runtime અને lifecycle | હાજરી-કાર્ડ | `PENDING`, `ACTIVE`, `FAILED` | 2 |
| Pending entry | જરૂરી service ની રાહ જોતી row | બાંકડે બેઠેલો કર્મચારી | `waiting for service: fs` | 2 |
| Required entry | inactive હોય તો startup નિષ્ફળ | પાયાની ઈંટ | `agent-loop` | 2 |
| Scope | registrations ને agent identity સાથે tag કરતો context | અલગ ટેબલ | `createScope` | 2 |
| Race condition | પરિણામ ચાલવાના ક્રમ પર આધાર રાખે | દોડની સ્પર્ધા | tutorial ch.7 executor | 2 |
| Capability seam | Definition + Provider + Consumer વાળી બદલી શકાય તેવી capability | નોકરીનું વર્ણન + કારીગર + વાપરનાર | `ctx.fs` | 3 |
| Tool executor | tool batch ચલાવતો provider | કોઠારી ભીખાભાઈ | `NativeToolExecutor` | 3 |
| Tool pipeline | pre-execute → guards → execute → post-execute | ચિઠ્ઠીનો રસ્તો | `ToolExecutionPipeline` | 3 |
| Canonical value | tool નું structured સાચું પરિણામ | સામાન પોતે / પૂરો હિસાબ | `{path, lines, totalLines}` | 3 |
| Adapter | harness અને provider wire format વચ્ચેનો અનુવાદક | દુભાષિયો | `DeepSeekAdapter` | 3 |
| SSE (Server-Sent Events) | HTTP પર એક-દિશાનો event stream | ટીપે ટીપે | `data: {...}` lines | 3 |
| StreamChunk | provider-neutral stream ટુકડો | ભોજનાલયની ભાષાનું ટીપું | `text-delta`, `finish` | 3 |
| Request extension | provider-specific વધારાનો body field | ચિઠ્ઠી સાથે ટાંકેલું પાનું | `dsh_session_log` | 3 |
| Surface | model history બનાવતા log nodes | મહારાજને સંભળાવાતી લીટીઓ | `user/message`, `tool/result` | 3 |
| Resume | persisted session માં નવો turn | ગઈકાલનો ચોપડો ખોલવો | `--session-id` | 3 |
| Config schema | config ને validate કરતું schema | શાખાની સેટિંગનું ફોર્મ | `z.natural().default(...)` | 4 |
| Fail loud | ખોટી config/state તરત, સ્પષ્ટ રીતે નિષ્ફળ | સવારે જ બૂમ | `ValidationError … $.maxBytes` | 4 |
| Deterministic | એ જ input → એ જ output | સો વાર, એ જ હિસાબ | sorted report | 4 |
| Breakpoint | debugger ને line પર રોકવું | સમય થંભાવવો | `--inspect-brk` | 5 |
| Retry / backoff | નિષ્ફળ request ને વધતા અંતરે ફરી મોકલવો | ફોન વ્યસ્ત — થોડી રાહ, ફરી | 0.5 s → 1 s → 2 s … | 5 |
| Sandbox mode | side effects ની મર્યાદા | રસોડાની સીમા | `workspace-write` | 5 |
| Approval policy | મંજૂરી પૂછવાની નીતિ | પપ્પાને પૂછવાનો નિયમ | `ask` / `never` | 5 |
| Escalation | એક call માટે વધુ ખુલ્લો mode માંગવો | રસોડાની બહાર જવાની રજા | `sandbox_permissions` | 5 |
| Fail closed | નિયંત્રણ ન હોય ત્યારે નકારવું | ચોકીદાર નથી તો દરવાજો બંધ | bash without `bwrap` | 5 |
| Concurrency-safe | બીજા calls સાથે parallel ચાલી શકે | વાંચનારા સાથે, લખનાર એકલો | `isConcurrencySafe: () => true` | 5 |
| Regression test | ભૂલ પાછી ન આવે તેની ખાતરી કરતો test | "મીઠું ચાખવાનો નિયમ" | `teardown-flush.spec.ts` | 6 |
| Golden file | અપેક્ષિત output ની સ્થિર નકલ | સોનાનો માપદંડ | `expected-report.txt` | 7 |
| Bank reconciliation | bank statement અને ચોપડાની entries જોડવી | મુનીમજીની મેળવણી | `reconcile_bank_tally` | 7 |
| Paise | રકમનો integer એકમ (₹1 = 100 paise) | પૂર્ણાંક પૈસા | `12345650` = ₹1,23,456.50 | 7 |
| Connected component | graph માં એકબીજા સાથે જોડાયેલા nodes નું જૂથ | મણકા દોરાથી | ambiguous group | 7 |
| Property-based test | ઘણાં random inputs પર નિયમ ચકાસતો test | હજાર random ઓર્ડરથી નિયમ ચકાસવો | `fast-check` | 7 |
