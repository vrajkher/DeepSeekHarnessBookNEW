# પ્રવેશ — શૂન્યથી શરૂઆત (12મા ધોરણ પછીનો પહેલો દિવસ)

> **Level −1 · 🟢 સૌ માટે.** આ પ્રકરણ એવા વાચક માટે છે જેણે 12મું ધોરણ પાસ કર્યું છે, mobile અને computer વાપર્યાં છે, પણ ક્યારેય programming નથી કર્યું.
> અહીં computer, terminal, data formats, internet, JavaScript, TypeScript અને AI model ની **ફક્ત એટલી જ** સમજ છે જેટલી આગળનાં પ્રકરણો માટે જોઈએ.
> Terminal, JavaScript, JSON અને HTTP પહેલેથી આવડતાં હોય તો [સ્વ-કસોટી](#swa-kasoti) આપો અને સીધા [પ્રકરણ 0](00-paayo-ane-pratham-run.md) પર જાઓ.

## 🎬 વાર્તા: પરિણામનો દિવસ

અમદાવાદના મણિનગરમાં **"અન્નપૂર્ણા થાળી ઘર"** નામનું નાનું ભોજનાલય છે. તેના માલિક છે **આરવના પપ્પા**. આજે આરવનું 12મા ધોરણ (science) નું પરિણામ આવ્યું છે. સારા ગુણ આવ્યા છે, college બે મહિના પછી શરૂ થશે.

સાંજે ભોજનાલયમાં ભીડ છે. આરવ ગલ્લા પર બેઠો mobile પર વાંચે છે: *"AI agents હવે code લખે છે, files વાંચે છે, commands ચલાવે છે."* તેને પ્રશ્ન થાય છે: **"આ agent ખરેખર અંદરથી કામ કેવી રીતે કરે છે? હું એ બનાવી શકું?"**

એ જ વખતે બેંગલુરુથી તેની પિતરાઈ બહેન **મીરાદીદી** આવે છે. તે software engineer છે અને આ ઉનાળામાં અમદાવાદથી જ કામ કરવાની છે.

આરવ પૂછે છે, "દીદી, મારે AI agent ના expert બનવું છે. પણ મને તો programming જ નથી આવડતું."

મીરાદીદી હસીને ભોજનાલય તરફ હાથ કરે છે: "તને ખબર છે? તું રોજ એક agent ને કામ કરતો જુએ છે. જો — ગ્રાહક ઓર્ડર આપે, રમેશભાઈ (વેઈટર) ઓર્ડર લખે, મહારાજને પૂછે, મહારાજ કહે 'કોઠારમાંથી ચણાનો લોટ લાવો', રમેશભાઈ લાવે, મહારાજ રાંધે, થાળી પીરસાય, અને બધું ચોપડામાં લખાય. **AI agent બરાબર આ જ રીતે ચાલે છે.** આપણે 15 દિવસ રોજ એક પગથિયું ચડીશું. પહેલું પગથિયું આજે: computer ની ભાષા."

### આખા પુસ્તકનાં પાત્રો (આ યાદી સાચવી રાખો)

આખું પુસ્તક આ એક ભોજનાલયમાં ચાલે છે. દરેક પાત્ર DeepSeek Harness ના એક ભાગને દર્શાવે છે. પ્રકરણ બદલાય, પાત્રો એ જ રહે.

| પાત્ર / જગ્યા | ભોજનાલયમાં શું કરે | Harness માં શું છે | પહેલી વાર ઊંડાણથી |
|---|---|---|---|
| **આરવ** | નવો શીખનાર — તમે | વાચક | આ પ્રકરણ |
| **મીરાદીદી** | માર્ગદર્શક | આ પુસ્તકનો અવાજ | આ પ્રકરણ |
| **મહારાજ** (રસોઇયા) | નક્કી કરે કે શું રાંધવું; **રસોડાની બહાર પગ નથી મૂકતા**, ફક્ત ચિઠ્ઠી લખે | **AI model** (`deepseek-flash`) | પ્રકરણ 0, 1 |
| **રસોઈ-સેવા agency** | મહારાજને મોકલતી સંસ્થા; વાત ફોન પર | **Model provider** (DeepSeek API) | પ્રકરણ 0, 3 |
| **દુભાષિયો** | ભોજનાલયની ભાષા ↔ agency ની ભાષા | **Model adapter** (`DeepSeekAdapter`) | પ્રકરણ 3 |
| **રમેશભાઈ** (વેઈટર) | ઓર્ડર લે, મહારાજને પૂછે, સામાન લાવે, ફરી પૂછે | **Agent loop** (`ReactLoopAgent`) | પ્રકરણ 1 |
| **કોઠાર અને ભીખાભાઈ** (કોઠારી) | ચિઠ્ઠી તપાસી સામાન આપે | **Tools** અને tool pipeline | પ્રકરણ 1, 3 |
| **ઓર્ડર-ચોપડો** | દરેક ઘટના નવી લીટીમાં; ભૂંસવાનું નહીં | **Session log** | પ્રકરણ 1, 3 |
| **કાંતિકાકા** (મેનેજર) | સવારે સ્ટાફને કામ પર લે — જેનાં સાધન તૈયાર હોય તેને જ | **Cordis** (plugin framework) | પ્રકરણ 2 |
| **આજનું મેનુ** | આજે કયાં કાઉન્ટર ખુલશે | **Profile / bundle / patch** | પ્રકરણ 2 |
| **દરેક કાઉન્ટર, મશીન, કર્મચારી** | એક-એક કામ | **Plugin** | પ્રકરણ 0, 2 |
| **પપ્પા** (શેઠ) | મોટું કામ હોય તો તેમની મંજૂરી | **Approval** | પ્રકરણ 5 |
| **રસોડાની સીમા** | ગમે ત્યાં જોઈ શકો, રાંધો ફક્ત પોતાના રસોડામાં | **Sandbox** | પ્રકરણ 5 |
| **મુખ્ય કચેરી** | ભોજનાલયની chain ના નિયમો ઘડનાર | **Upstream repository** | પ્રકરણ 6 |
| **મુનીમજી** | Tally માં હિસાબ, bank સાથે મેળવણી | અંતિમ પ્રોજેક્ટ | પ્રકરણ 7 |

> 💡 **મીરાદીદીની ટીપ:** ઉપમા યાદ રાખવામાં મદદ કરે, પણ દરેક ઉપમા ક્યાંક "તૂટે" છે. પુસ્તકમાં જ્યાં તૂટે ત્યાં ⚠️ **"ઉપમા અહીં તૂટે છે"** box આવશે. શંકા પડે ત્યારે technical અર્થ જ સાચો ગણવો.

## 🎯 આ પ્રકરણ પછી તમે શું કરી શકશો

- File, folder, path, program, process, exit code, stdout અને stderr નો અર્થ ઉદાહરણથી કહી શકશો.
- Terminal માં ફરી શકશો, file બનાવી-વાંચી શકશો, અને પુસ્તકની labs માં આવતા shell નિશાન (`&&`, `|`, `$( )`, `VAR=value`) વાંચી શકશો.
- એક જ માહિતીને JSON, YAML અને CSV — ત્રણેય આકારમાં ઓળખી શકશો.
- HTTP request, response, status code, API અને API key શું છે તે સમજાવી શકશો.
- JavaScript નાં object, array, function, `async`/`await`, `try`/`catch`/`finally` અને `AbortController` વાળા નાના programs ચલાવી, તેનું output પહેલેથી કહી શકશો.
- AI model શું કરે છે અને શું **નથી** કરતું, તથા "tool call" એટલે શું તે સમજાવી શકશો.
- 40 lines નો રમકડા-agent ચલાવી, તેમાં turn, step અને ચોપડો (log) ઓળખી શકશો.

## 🗺️ આ પ્રકરણનો નકશો

```mermaid
flowchart LR
  A["પ્ર.1 Computer ની ભાષા<br/>file, path, process"] --> B["પ્ર.2 Terminal<br/>commands, exit code"]
  B --> C["પ્ર.3 Data ના આકાર<br/>JSON, YAML, CSV"]
  C --> D["પ્ર.4 Internet ની ટપાલ<br/>HTTP, API, key"]
  D --> E["પ્ર.5–7 JavaScript, TypeScript<br/>async, events"]
  E --> F["પ્ર.8 AI model<br/>tokens, tool call"]
  F --> G["પ્ર.9 રમકડા-agent<br/>turn, step, ચોપડો"]
  G --> H["પ્ર.10 Git<br/>commit, SHA"]
  H --> I["પ્રકરણ 0"]
```

### આ પુસ્તકનાં નિશાન

| નિશાન | અર્થ |
|---|---|
| 🟢 | સૌ માટે — પહેલી વાંચનમાં જ સમજો |
| 🟡 | થોડું ઊંડું — lab કરતી વખતે ધ્યાનથી |
| 🔴 **ઊંડું પાણી** | expert સ્તર — પહેલી વાંચનમાં છોડી શકો; બીજી વાંચનમાં પાછા આવો |
| ✅ | pinned source વાંચીને ચકાસ્યું |
| 🧪 | આ પુસ્તક લખતી વખતે ખરેખર ચલાવીને ચકાસ્યું |
| ⚠️ | ચકાસ્યું નથી, અથવા ઉપમા/દાવાની મર્યાદા |
| 📦 | નવો શબ્દ — પહેલી વાર આવે ત્યાં જ સમજૂતી |
| 🍽️ | ભોજનાલયમાં — ઉપમા |
| 💡 | મીરાદીદીની ટીપ |

Code ના ટુકડા પર હંમેશા લખેલું હશે કે તે **repository code** (DeepSeek Harness નો ખરો code), **teaching pseudocode** (સમજાવવા માટે સાદો કરેલો), કે **book lab code** (આ પુસ્તકનો પોતાનો code, [`labs/`](../labs/README.md) માં) છે.

## પ્ર.1 🟢 Computer ની ભાષા: file, folder, path, program, process

> 📦 **File** — નામવાળી માહિતી, disk પર સચવાયેલી. ઉદાહરણ: `menu.txt`, `README.md`, `photo.jpg`.
>
> 📦 **Folder (directory)** — files અને બીજાં folders રાખતું ખાનું. ઉદાહરણ: `Documents/`.
>
> 📦 **Path** — file સુધી પહોંચવાનું સરનામું. `/home/aarav/bhojanalay/menu.txt` એક path છે.

Path બે પ્રકારના હોય છે, અને આ ફરક આખા પુસ્તકમાં (ખાસ કરીને પ્રકરણ 2 અને 4 માં) કામ આવશે:

| પ્રકાર | ઉદાહરણ | અર્થ | 🍽️ ભોજનાલયમાં |
|---|---|---|---|
| **Absolute path** | `/home/aarav/bhojanalay/menu.txt` | મૂળ (`/`) થી શરૂ થતું પૂરું સરનામું | "અન્નપૂર્ણા થાળી ઘર, મણિનગર, અમદાવાદ" — ગમે ત્યાંથી પહોંચાય |
| **Relative path** | `menu.txt`, `../labs/x.ts` | "હું અત્યારે જ્યાં ઊભો છું ત્યાંથી" | "અહીંથી બીજી ગલીમાં ડાબે" — તમે ક્યાં ઊભા છો તેના પર આધાર |

`..` એટલે "એક folder ઉપર", `.` એટલે "આ જ folder", `~` એટલે "મારું home folder".

> 📦 **Program** — computer માટે લખેલી સૂચનાઓની file. ઉદાહરણ: `node` program.
>
> 📦 **Process** — ચાલતો program. એક જ program ના ઘણા process એક સાથે ચાલી શકે.
>
> 🍽️ **Program** = રેસીપી-ચોપડી; **process** = અત્યારે ચૂલા પર ચાલતી રસોઈ.

દરેક process પૂરો થાય ત્યારે એક આંકડો પાછો આપે છે:

> 📦 **Exit code** — process પૂરો થતાં આપતો આંકડો. **`0` = સફળ**, બીજું કંઈ પણ = કોઈક સમસ્યા. પુસ્તકમાં `0`, `1`, `130` (Ctrl+C થી અટકાવ્યું) વારંવાર આવશે.

દરેક process પાસે લખવા માટે બે અલગ "બારી" હોય છે:

> 📦 **stdout** (standard output) — સામાન્ય જવાબ. 🍽️ ગ્રાહકને પીરસાતી થાળી.
>
> 📦 **stderr** (standard error) — ભૂલો, ચેતવણી, માહિતી. 🍽️ રસોડામાંથી આવતી બૂમો — ગ્રાહકની થાળીમાં નહીં.

પ્રકરણ 1 માં agent નો જવાબ stdout માં અને આખો trace stderr માં આવશે — બંને અલગ છે એટલે જ આપણે જવાબ ગુમાવ્યા વગર trace જોઈ શકીશું.

## પ્ર.2 🟢 Terminal: લખીને computer ચલાવવું

> 📦 **Terminal (shell)** — text command લખીને computer ચલાવવાની બારી. Linux/macOS માં "Terminal" app; Windows માં WSL2 નું Ubuntu (પ્રકરણ 0 માં setup).

આ commands ચલાવો. દરેક line એક command છે; `$` ન લખશો — એ ફક્ત "અહીં લખો" નું નિશાન છે, અને પુસ્તકના code blocks માં અમે તે લખતા પણ નથી.

```bash
pwd
```

**pwd** = print working directory = "હું અત્યારે ક્યાં છું?" Output કંઈક આવું: `/home/aarav`.

```bash
mkdir -p ~/bhojanalay && cd ~/bhojanalay
```

`mkdir -p` folder બનાવે (હોય તો ભૂલ નહીં); `cd` તેમાં જાય. **`&&`** એટલે "પહેલો command સફળ થાય (exit 0) તો જ બીજો ચલાવો."

```bash
echo "દાળ ભાત શાક" > menu.txt && cat menu.txt
```

`echo` text છાપે; `>` તેને stdout ને બદલે file માં મોકલે; `cat` file વાંચીને છાપે. Output: `દાળ ભાત શાક`.

```bash
ls nofile; echo "exit code = $?"
```

`$?` એટલે "છેલ્લા command નો exit code". 🧪 અમારા Linux પર output:

```text
ls: cannot access 'nofile': No such file or directory
exit code = 2
```

`ls` નિષ્ફળ ગયું, તેથી exit code 0 નહીં પણ 2. (`;` એટલે "સફળ હોય કે ન હોય, પછીનો command ચલાવો.")

### Labs માં આવતાં shell નિશાન — એક જ table માં

આગળનાં પ્રકરણોમાં આવા commands આવશે:
`TOOL_NAME=greet TOOL_ARGS='{"name":"Ada"}' bash tmp/book-labs/request-trace/run-mock.sh`.
ગભરાશો નહીં — તે આ નાના ટુકડાઓથી બનેલું છે:

| નિશાન | અર્થ | ઉદાહરણ | 🍽️ |
|---|---|---|---|
| `A && B` | A સફળ થાય તો જ B | `cd x && ls` | "ગેસ ચાલુ થાય તો જ તપેલી મૂકો" |
| `A ; B` | A પછી B, ગમે તે થાય | `ls nofile; echo $?` | "પછી તો કરવું જ" |
| `A \| B` | A નું stdout B ના input માં | `cat menu.txt \| grep દાળ` | "એક વાસણમાંથી બીજામાં ગાળવું" |
| `A > f` | stdout ને file `f` માં | `echo hi > a.txt` | "થાળી ટેબલને બદલે ડબ્બામાં" |
| `A 2> f` | stderr ને file `f` માં | `ls nofile 2> err.txt` | "બૂમો રેકોર્ડરમાં" |
| `NAME=value A` | ફક્ત આ command માટે **environment variable** | `DSH_HOME=$PWD/tmp/home pnpm dsh …` | "આજના ઓર્ડર માટે ખાસ સૂચના" |
| `$NAME` | variable ની value | `echo $HOME` | "ચિઠ્ઠી ખોલીને વાંચો" |
| `X=$(A)` | A નું stdout variable X માં | `O=$(bash make-overlay.sh)` | "જવાબ ખિસ્સામાં રાખો" |
| `'...'` | text જેમ છે તેમ (અંદર `$` નો અર્થ નહીં) | `'{"name":"Ada"}'` | "સીલબંધ પરબીડિયું" |
| `"..."` | text, પણ અંદર `$NAME` ખૂલે | `"$SID"` | "ખુલ્લું પરબીડિયું" |
| `\` (line ના અંતે) | command આગળની line માં ચાલુ | | "વાક્ય ચાલુ છે" |
| `Ctrl+C` | ચાલતો process અટકાવો (`SIGINT`) | | "અચાનક ગેસ બંધ" — પ્રકરણ 5 |

> 📦 **Environment variable** — process ને બહારથી આપેલી નામવાળી સેટિંગ. ઉદાહરણ: `DEEPSEEK_BASE_URL` (model ક્યાં છે), `DSH_HOME` (harness પોતાની files ક્યાં રાખે). પ્રકરણ 1 નું આખું lab આના પર ચાલે છે.

## પ્ર.3 🟢 Data ના ત્રણ આકાર: JSON, YAML, CSV

એક જ ઓર્ડર — "ટેબલ 4: 2 ગુજરાતી થાળી, ઓછું તીખું" — ત્રણ આકારમાં:

**JSON** (JavaScript Object Notation) — `{ }` માં નામ-value જોડી, `[ ]` માં યાદી:

```json
{ "table": 4, "dish": "ગુજરાતી થાળી", "qty": 2, "spicy": false, "extras": ["છાશ", "પાપડ"] }
```

**YAML** — indentation (આગળની જગ્યા) થી માળખું, `-` થી યાદી:

```yaml
table: 4
dish: ગુજરાતી થાળી
qty: 2
spicy: false
extras:
  - છાશ
  - પાપડ
```

**CSV** (Comma-Separated Values) — table: પહેલી line માં column નામો (**header**), પછી દરેક line એક row:

```text
table,dish,qty,spicy
4,ગુજરાતી થાળી,2,false
7,પંજાબી થાળી,1,true
```

| આકાર | ક્યાં વપરાય આ પુસ્તકમાં | કેમ |
|---|---|---|
| JSON | tool arguments, session events, HTTP body | program માટે સ્પષ્ટ અને કડક |
| **JSONL** (JSON Lines) | session log file: **એક line = એક JSON event** | ફક્ત અંતે ઉમેરવું સહેલું — "ચોપડામાં નવી લીટી" |
| YAML | `cordis.yml`, overlays/patches | માણસ માટે વાંચવું સહેલું |
| CSV | પ્રકરણ 4 નો `csv_compare`, પ્રકરણ 7 નું bank ↔ Tally reconciliation | Excel/Tally/bank exports આ જ આકારમાં આવે |

> ⚠️ **સૌથી સામાન્ય ભૂલો:** JSON માં છેલ્લા item પછી `,` ન ચાલે અને નામો `"double quotes"` માં જ જોઈએ. YAML માં tab નહીં, spaces જ. CSV માં field ની અંદર comma હોય તો આખું field `"..."` માં મૂકવું પડે — પ્રકરણ 4 નો parser આ સંભાળે છે.

## પ્ર.4 🟢 Internet ની ટપાલ: HTTP, API, API key, streaming

> 📦 **Client / Server** — માંગનાર / આપનાર. તમારું browser client છે, website નું computer server છે.
>
> 📦 **HTTP request** — client નો પત્ર: **method** (`GET` = માંગો, `POST` = કંઈક મોકલો), **URL** (સરનામું), **headers** (પરબીડિયા પરની નોંધો), **body** (અંદરનો પત્ર, ઘણી વાર JSON).
>
> 📦 **HTTP response** — server નો જવાબ: **status code** + headers + body.

જે status codes આ પુસ્તકમાં ખરેખર આવશે:

| Code | અર્થ | 🍽️ | પ્રકરણ |
|---|---|---|---|
| `200` | બરાબર | "ઓર્ડર મળ્યો" | 1, 3 |
| `401` | તમે કોણ છો તે સાબિત નથી (authentication) | "membership card ખોટું" | 5 (`AUTH`) |
| `429` | બહુ ઝડપથી બહુ માંગણીઓ (rate limit) | "લાઇન વ્યસ્ત છે, થોડી વાર પછી" | 5 (retry) |
| `500` | server ની અંદર ભૂલ | "agency ના રસોડામાં ગડબડ" | 5 (`SERVER`) |

> 📦 **API** (Application Programming Interface) — એક program બીજા program સાથે કેવી રીતે વાત કરે તેના નિયમો. ઉદાહરણ: "DeepSeek ને `POST https://api.deepseek.com/...` પર આ આકારનું JSON મોકલો."
>
> 📦 **API key** — API વાપરવાની ગુપ્ત ચાવી, જે account અને બિલ સાથે જોડાયેલી હોય. 🍽️ agency નું membership card. **આ આખું પુસ્તક API key વગર ચાલે છે** — આપણે "રિહર્સલ મહારાજ" (mock server) વાપરીશું.
>
> 📦 **localhost અને port** — `localhost` એટલે "આ જ computer"; port એક જ computer પરના ઘણા servers ના "બારી નંબર". પ્રકરણ 1 માં mock server `localhost` ના port `8000` પર બેસશે.
>
> 📦 **Streaming / SSE** — આખો જવાબ એક સાથે નહીં, ટીપે ટીપે. SSE (Server-Sent Events) માં server `data: {...}` lines મોકલતું જાય. 🍽️ મહારાજ ફોન પર રેસીપી એક-એક વાક્ય બોલતા જાય, આખી લખીને મોકલવાને બદલે. તેથી જ AI નો જવાબ screen પર ધીમે ધીમે લખાતો દેખાય છે.

## પ્ર.5 🟢 JavaScript: જરૂર પૂરતું

> 📦 **Node.js** — browser વગર JavaScript ચલાવતો program. `node file.mjs` લખો એટલે file ચાલે.

Node ન હોય તો પ્રકરણ 0 નું setup (Node 24) પહેલાં કરી લો, પછી અહીં પાછા આવો. આ પ્રકરણનાં ઉદાહરણો કોઈ પણ નવા Node પર ચાલે છે; 🧪 અમે Node v22.23 પર ચલાવ્યાં છે.

### (a) Variable, object, array, function

Book lab code: [`labs/pravesh/thali.mjs`](../labs/pravesh/thali.mjs)

```js
const thali = {
  name: 'ગુજરાતી થાળી',
  price: 250,
  items: ['રોટલી', 'દાળ', 'ભાત', 'શાક'],
}

function bill(qty) {
  return thali.price * qty
}

console.log(thali.name)          // object નું એક field
console.log(thali.items.length)  // array માં કેટલી વસ્તુ
console.log(thali.items[0])      // પહેલી વસ્તુ: index 0 થી ગણતરી
console.log(bill(3))             // function ને બોલાવ્યું
console.log(JSON.stringify(thali))
```

| શબ્દ | અર્થ | અહીં |
|---|---|---|
| `const` | નામ, જેની value બદલાશે નહીં | `thali` |
| **Object** `{ }` | નામ-value જોડીઓનો સમૂહ | `thali` |
| **Array** `[ ]` | ક્રમવાળી યાદી; ગણતરી **0** થી | `items` |
| **Function** | નામવાળું કામ; input (**parameter**) લે, `return` થી output આપે | `bill(qty)` |
| `//` | comment — computer માટે નહીં, માણસ માટે | |

**ચલાવતા પહેલાં ધારો** કે શું છપાશે. પછી:

```bash
node labs/pravesh/thali.mjs
```

🧪 Output:

```text
ગુજરાતી થાળી
4
રોટલી
750
{"name":"ગુજરાતી થાળી","price":250,"items":["રોટલી","દાળ","ભાત","શાક"]}
```

છેલ્લી line જુઓ: `JSON.stringify` એ object ને JSON text બનાવ્યું. Harness દરેક session event ને આ જ રીતે JSON બનાવીને file માં લખે છે.

### (b) Module: `import` અને `export`

મોટો program ઘણી files માં વહેંચાય છે. એક file `export` કરે, બીજી `import` કરે:

```js
// teaching pseudocode
// menu.mjs
export const price = 250
// order.mjs
import { price } from './menu.mjs'
```

આ પુસ્તકનો દરેક plugin એક module છે, જે `export const name = …` અને `export function apply(ctx) { … }` કરે છે (પ્રકરણ 0).

### (c) Class — એક જ ઢાંચામાંથી ઘણી વસ્તુ

```js
// teaching pseudocode
class Waiter {
  constructor(name) { this.name = name }
  takeOrder(dish) { return `${this.name} એ ${dish} નો ઓર્ડર લીધો` }
}
const ramesh = new Waiter('રમેશભાઈ')
```

`class` એ ઢાંચો છે, `new Waiter(...)` તેમાંથી બનેલી એક વસ્તુ (**instance**). Harness નો agent loop `ReactLoopAgent` નામનો class છે (પ્રકરણ 1).

### (d) Errors: `throw`, `try`, `catch`, `finally`

```js
// teaching pseudocode
try {
  cook()                       // કદાચ ભૂલ ફેંકે (throw)
} catch (error) {
  console.log('ભૂલ:', error.message)
} finally {
  console.log('ચોપડામાં નોંધ: ઓર્ડર પૂરો')   // ગમે તે થાય, આ ચાલે જ
}
```

> 📦 **`finally`** — "સફળતા, ભૂલ કે રદ — ગમે તે થાય, આ code ચાલશે જ." પ્રકરણ 1 માં જોશો કે harness `turn/end` (ઓર્ડર પૂરો) ની નોંધ `finally` માં જ લખે છે, તેથી દરેક શરૂ થયેલા ઓર્ડરનો અંત ચોપડામાં હોય જ.

### (e) Promise, `async`/`await`, અને રદ કરવું (`AbortController`)

Model નો જવાબ, file વાંચવી, network — આ બધું **સમય લે છે**. JavaScript રાહ જોતી વખતે અટકી નથી જતું; તે **Promise** ("પછી જવાબ આપીશ" નું વચન) વાપરે છે.

> 📦 **Promise** — ભવિષ્યમાં આવનારા પરિણામનું વચન. 🍽️ ટોકન: "તમારો ઓર્ડર નં. 12 છે, તૈયાર થાય ત્યારે બોલાવીશું."
>
> 📦 **`await`** — "આ વચન પૂરું થાય ત્યાં સુધી અહીં રાહ જુઓ." `async` function ની અંદર (અથવા `.mjs` file ના top level પર) વપરાય.
>
> 📦 **`AbortController` / `AbortSignal`** — ચાલુ કામ રદ કરવાનો સંકેત. Controller "રદ કરો" બટન છે; signal એ બટન સાથે જોડાયેલો દીવો, જે કામ કરનાર જોતો રહે.

Book lab code: [`labs/pravesh/rasoi-async.mjs`](../labs/pravesh/rasoi-async.mjs)

```js
function cook(dish, ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(`${dish} તૈયાર`), ms)
    signal?.addEventListener('abort', () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })
}

console.log('1. ઓર્ડર લીધો')
const dal = await cook('દાળ', 300)
console.log('2.', dal)

const controller = new AbortController()
setTimeout(() => controller.abort(), 100) // 100ms પછી "રદ" નો સંકેત
try {
  await cook('ખીચડી', 1000, controller.signal)
  console.log('3. ખીચડી તૈયાર (આ line નહીં છપાય)')
} catch (error) {
  console.log('3. રદ થયું:', error.name)
}
console.log('4. રસોડું ફરી તૈયાર')
```

**ચલાવતા પહેલાં ધારો:** ખીચડીને 1000ms જોઈએ, પણ 100ms પર "રદ" દબાય છે. કઈ line છપાશે?

```bash
node labs/pravesh/rasoi-async.mjs
```

🧪 Output:

```text
1. ઓર્ડર લીધો
2. દાળ તૈયાર
3. રદ થયું: AbortError
4. રસોડું ફરી તૈયાર
```

> 💡 **આ નાનો program પ્રકરણ 5 નો નકશો છે.** ત્યાં Ctrl+C દબાવશો ત્યારે harness નો agent loop પોતાના `AbortController` થી બરાબર આ જ રીતે ચાલુ model call રદ કરશે, `catch` માં કારણ `aborted` નક્કી કરશે, અને `finally` માં ચોપડામાં `turn/end` લખશે.

## પ્ર.6 🟢 TypeScript: JavaScript + "ડબ્બા પરનાં લેબલ"

> 📦 **TypeScript** — JavaScript + **types**. Type એટલે value કેવા પ્રકારની છે તેની નોંધ: `number`, `string`, `boolean`, અથવા પોતે બનાવેલો આકાર. 🍽️ કોઠારના ડબ્બા પરનું લેબલ: "ખાંડ" લખેલા ડબ્બામાં મીઠું મૂકો તો કોઠારી તરત રોકે.

Types ફક્ત **તપાસ** માટે છે; program ચાલે ત્યારે ભૂંસાઈ જાય છે. ખોટું લેબલ હોય તો તપાસનાર (**compiler**, `tsc`) ચલાવતા પહેલાં જ ભૂલ પકડે:

```ts
const n: number = 'x'
```

🧪 TypeScript 6.0.3 નું `tsc --noEmit` આ file પર:

```text
bad.ts(1,7): error TS2322: Type 'string' is not assignable to type 'number'.
```

DeepSeek Harness નો આખો code TypeScript માં છે. તેને વાંચવા માટે આ ત્રણ આકાર પૂરતા છે (પ્રકરણ 0 માં વધુ બે ઉમેરાશે):

Book lab code: [`labs/pravesh/types.ts`](../labs/pravesh/types.ts)

```ts
type Order = { dish: string; qty: number; spicy?: boolean }   // spicy? = વૈકલ્પિક field

type Result =
  | { kind: 'served'; bill: number }
  | { kind: 'rejected'; reason: string }                     // discriminated union

function serve(order: Order): Result {
  if (order.qty <= 0) return { kind: 'rejected', reason: 'qty શૂન્યથી મોટી જોઈએ' }
  return { kind: 'served', bill: order.qty * 250 }
}

function describe(result: Result): string {
  switch (result.kind) {
    case 'served': return `બિલ ₹${result.bill}`
    case 'rejected': return `નકાર: ${result.reason}`
    default:
      result satisfies never   // બધા કેસ handle થયા એવું compiler પાસે સાબિત કરાવવું
      throw new Error('unreachable')
  }
}
```

| આકાર | અર્થ | 🍽️ |
|---|---|---|
| `type Order = {…}` | object નો આકાર | ઓર્ડર-ફોર્મનાં ખાનાં |
| `spicy?: boolean` | `?` = ભરવું ફરજિયાત નથી | "વૈકલ્પિક: તીખાશ" |
| `A \| B` (**union**) | આ અથવા પેલું | લાલ કે લીલી ચિઠ્ઠી |
| **Discriminated union** | એક `kind` field જોઈને નક્કી થાય કે કયો આકાર | ચિઠ્ઠી પરનો stamp: "પીરસ્યું" કે "નકાર્યું" |
| `satisfies never` | "કોઈ કેસ બાકી નથી" નો compiler પુરાવો; નવો `kind` ઉમેરો અને ભૂલો તો compile જ નહીં થાય | ચેકલિસ્ટ પર દરેક ખાનું ✔ |

```bash
node labs/pravesh/types.ts
```

🧪 Output (Node v22.23 પર; Node 24 પર પણ `node file.ts` સીધું ચાલે છે, કારણ કે Node types ભૂંસીને ચલાવે છે):

```text
બિલ ₹500
નકાર: qty શૂન્યથી મોટી જોઈએ
```

🧪 આ જ file `tsc --strict` તપાસમાં પણ exit 0 આપે છે.

## પ્ર.7 🟡 Event અને listener: "ઘંટડી વાગે ત્યારે કોણ દોડે?"

> 📦 **Event** — કંઈક થયું તેની જાહેરાત. ઉદાહરણ: "નવો ઓર્ડર આવ્યો", "tool નું પરિણામ આવ્યું".
>
> 📦 **Listener** — event થાય ત્યારે ચાલતું function. 🍽️ ઘંટડી વાગે ત્યારે દોડતો કર્મચારી.

Harness માં events ઘણી રીતે "વગાડાય" છે. સૌથી મહત્વની રીત છે **waterfall** (ધોધ): listeners એક સાંકળમાં ઊભા છે; દરેક listener ઓર્ડર જુએ, ઇચ્છે તો બદલે, અને પછી **`next()`** બોલાવી આગળ મોકલે. છેલ્લે ખરું કામ (default) થાય.

Book lab code (રમકડું — Cordis નો code **નથી**): [`labs/pravesh/waterfall.mjs`](../labs/pravesh/waterfall.mjs)

```js
function waterfall(listeners, value, last) {
  const run = (i, v) => (i === listeners.length ? last(v) : listeners[i](v, next => run(i + 1, next ?? v)))
  return run(0, value)
}

const kitchen = order => `${order} → રસોડામાં બન્યું`

const listeners = [
  (order, next) => { console.log('  [ચોકીદાર] ઓર્ડર જોયો:', order); return next() },
  (order, next) => { console.log('  [મેનેજર] તીખાશ ઓછી કરી'); return next(order + ' (ઓછું તીખું)') },
]
console.log('A:', waterfall(listeners, 'દાળ-ભાત', kitchen))

// next() ભૂલી જાઓ તો સાંકળ અટકે: રસોડા સુધી ઓર્ડર પહોંચતો જ નથી.
const forgetful = [(order, next) => { console.log('  [ભૂલકણો] ઓર્ડર જોયો:', order) }]
console.log('B:', waterfall(forgetful, 'દાળ-ભાત', kitchen))
```

```bash
node labs/pravesh/waterfall.mjs
```

🧪 Output:

```text
  [ચોકીદાર] ઓર્ડર જોયો: દાળ-ભાત
  [મેનેજર] તીખાશ ઓછી કરી
A: દાળ-ભાત (ઓછું તીખું) → રસોડામાં બન્યું
  [ભૂલકણો] ઓર્ડર જોયો: દાળ-ભાત
B: undefined
```

**B જુઓ:** ભૂલકણા listener એ `next()` ન બોલાવ્યું, તેથી રસોડા સુધી ઓર્ડર પહોંચ્યો જ નહીં — પરિણામ `undefined`. પ્રકરણ 6 ની "મારો observer plugin વર્તન બદલી નાખે છે" નિષ્ફળતા બરાબર આ જ છે. **યાદ-ચાવી: "ધોધમાં પાણી આગળ વહેવા દો — `next()` બોલાવો."**

## પ્ર.8 🟢 AI model ખરેખર શું કરે છે — અને શું નથી કરતું

### (a) Model = "આગળનો શબ્દ" ધારનાર

> 📦 **Token** — model text ને નાના ટુકડામાં તોડે છે; દરેક ટુકડો token. એક English શબ્દ આશરે 1–2 token; ગુજરાતી શબ્દ ઘણી વાર વધુ.
>
> 📦 **AI model (LLM — Large Language Model)** — અત્યાર સુધીના tokens જોઈને "આગળ કયો token આવે" તે ધારતું ગણિતીય મોડેલ. આ ધારણા વારંવાર કરવાથી આખો જવાબ બને છે.

12મા ધોરણમાં mobile keyboard નું "next word suggestion" જોયું હશે — "હું ઘરે" લખો તો "જાઉં છું" સૂચવે. Model એ જ વિચારનું ઘણું મોટું, ઘણું સારું રૂપ છે.

### (b) Model ને "યાદ" રહેતું નથી

> 📦 **Context window** — model એક વખતમાં કેટલા tokens જોઈ શકે તેની મર્યાદા. પ્રકરણ 1 ના અમારા run માં ચોપડામાં `"contextWindow":1048576` નોંધાયું છે (આશરે દસ લાખ tokens) — 🧪 [evidence/two-calls.session.txt](../evidence/two-calls.session.txt).

Model દરેક call વખતે **શૂન્યથી** શરૂ કરે છે. પાછલી વાત યાદ રાખવી હોય તો **આખો ઇતિહાસ ફરીથી મોકલવો** પડે. 🍽️ મહારાજની યાદશક્તિ નથી; રમેશભાઈ દર વખતે ચોપડામાંથી આખી વાત વાંચીને સંભળાવે છે. પ્રકરણ 1 માં આ સંખ્યામાં દેખાશે: પહેલા call માં 5 messages, બીજામાં 7.

### (c) Model પાસે હાથ નથી: tool call

Model ફક્ત **text** લખી શકે છે. File ખોલવી, command ચલાવવો — એ model કરી શકતું નથી. તો agent file કેવી રીતે વાંચે?

> 📦 **Tool** — harness પાસેનું એક કામ (function), જે model માંગી શકે. ઉદાહરણ: `read` (file વાંચો), `write`, `edit`, `bash`.
>
> 📦 **Tool call** — model ની લેખિત માંગ: "આ tool, આ arguments સાથે ચલાવો." 🍽️ મહારાજની કોઠાર-ચિઠ્ઠી.

પ્રકરણ 1 ના અમારા run માં model એ ખરેખર આ "ચિઠ્ઠી" લખી હતી (🧪 stored session માંથી):

```json
{"type":"tool-call","id":"mock-call-1","name":"read","arguments":"{\"file_path\":\"README.md\"}"}
```

Harness આ ચિઠ્ઠી વાંચે, `read` tool ચલાવે, README ની સામગ્રી **tool result** તરીકે ઇતિહાસમાં ઉમેરે, અને model ને **ફરી** પૂછે. હવે model પાસે README છે, એટલે તે સાર લખે.

### (d) પાંચ શબ્દો — નાનાથી મોટું

| શબ્દ | એક વાક્ય | 🍽️ |
|---|---|---|
| **Model** | text વાંચી text કે tool call લખે; હાથ નથી, યાદ નથી | મહારાજ |
| **Provider** | model ને network પર પહોંચાડતી સેવા (HTTP API) | રસોઈ-સેવા agency, ફોન પર |
| **Agent** | model ↔ tools નો loop, કામ પૂરું થાય ત્યાં સુધી | રમેશભાઈની દોડધામ |
| **Harness** | agent + tools + ચોપડો + સુરક્ષા + UI — આખું તંત્ર | આખું ભોજનાલય |
| **Plugin** | harness ની એક બદલી શકાય તેવી ઈંટ | દરેક કાઉન્ટર/કર્મચારી |

**યાદ-ચાવી "મો-પ્રો-એ-હા-પ્લ" — "મોટો પ્રોફેસર એક હાથે પ્લેટ":** **મો**ડેલ, **પ્રો**વાઇડર, **એ**જન્ટ, **હા**ર્નેસ, **પ્લ**ગિન — અંદરથી બહાર.

## પ્ર.9 🟡 40 lines નો રમકડા-agent: પ્રકરણ 1 નું ટ્રેલર

હવે બધું જોડીએ. નીચેનો program **DeepSeek Harness નથી** — તે એક રમકડું છે, જેમાં નકલી model છે. પણ તેનો આકાર ખરા harness જેવો જ છે, અને event નામો પણ જાણીજોઈને ખરા harness જેવાં રાખ્યાં છે.

Book lab code: [`labs/pravesh/toy-agent.mjs`](../labs/pravesh/toy-agent.mjs) (મુખ્ય ભાગ)

```js
const log = []                                      // ચોપડો: ફક્ત ઉમેરાય, ભૂંસાય નહીં
const append = (type, data = {}) => {
  const event = Object.freeze({ seq: log.length, type, ...data })
  log.push(event)
  console.log(`#${event.seq} ${type}`, JSON.stringify(data))
}

// નકલી model: છેલ્લો message tool result ન હોય તો tool માંગે, નહીં તો જવાબ લખે.
function fakeModel(messages) {
  const last = messages[messages.length - 1]
  if (last.role !== 'tool') return { toolCall: { name: 'read', args: { file_path: 'menu.txt' } } }
  return { text: `આજના મેનુમાં ${last.content.split('\n').length} વાનગી છે.` }
}

function turn(task) {
  const messages = [{ role: 'user', content: task }]  // history: દરેક વખતે આખી મોકલાય
  append('turn/start')
  for (let step = 1; ; step++) {
    append('step/start', { step })
    const reply = fakeModel(messages)                // model call
    if (reply.toolCall) {
      append('tool/call', reply.toolCall)
      const result = tools[reply.toolCall.name](reply.toolCall.args)
      append('tool/result', { chars: result.length })
      messages.push({ role: 'assistant', toolCall: reply.toolCall }, { role: 'tool', content: result })
      append('step/end', { step })
      continue                                       // tool વપરાયો → turn પૂરો નથી
    }
    append('step/end', { step })
    append('turn/end', { reason: 'completed', modelCalls: step, messagesSentLast: messages.length })
    return reply.text
  }
}
```

**ચલાવતા પહેલાં ધારો:** model કેટલી વાર બોલાવાશે? છેલ્લા call માં કેટલા messages જશે?

```bash
node labs/pravesh/toy-agent.mjs
```

🧪 Output:

```text
#0 turn/start {}
#1 step/start {"step":1}
#2 tool/call {"name":"read","args":{"file_path":"menu.txt"}}
#3 tool/result {"chars":29}
#4 step/end {"step":1}
#5 step/start {"step":2}
#6 step/end {"step":2}
#7 turn/end {"reason":"completed","modelCalls":2,"messagesSentLast":3}
જવાબ: આજના મેનુમાં 6 વાનગી છે.
```

```mermaid
sequenceDiagram
  autonumber
  participant U as ગ્રાહક (task)
  participant L as રમેશભાઈ (loop)
  participant M as મહારાજ (fakeModel)
  participant T as કોઠાર (read tool)
  participant C as ચોપડો (log)
  U->>L: "મેનુ વાંચીને કહો"
  L->>C: turn/start, step/start
  L->>M: messages (1)
  M-->>L: tool call: read menu.txt
  L->>C: tool/call
  L->>T: read("menu.txt")
  T-->>L: 6 lines
  L->>C: tool/result, step/end, step/start
  L->>M: messages (3): task + tool call + result
  M-->>L: text: "6 વાનગી"
  L->>C: step/end, turn/end completed
  L-->>U: જવાબ
```

### આ રમકડામાંથી ત્રણ શબ્દો

> 📦 **Turn** — ગ્રાહકના એક ઓર્ડરથી "હવે કંઈ બાકી નથી" સુધીનું આખું કામ. અહીં 1 turn.
>
> 📦 **Step** — મહારાજ સાથેની **એક** વાતચીત + તેમણે માંગેલા tools. અહીં 2 steps.
>
> 📦 **Session log (ચોપડો)** — દરેક ઘટનાની ક્રમાંક (`seq`) વાળી નોંધ; ફક્ત ઉમેરાય. `Object.freeze` એટલે લખેલી લીટી કોઈ બદલી ન શકે.

| રમકડામાં | ખરા DeepSeek Harness માં (પ્રકરણ 1) |
|---|---|
| `fakeModel` | DeepSeek API (lab માં mock server) |
| `turn()` નો `for` loop | `ReactLoopAgent.turn()` અને `step()` |
| `tools.read` | `read` tool, `ctx.fs` દ્વારા |
| `log` array | session log, JSONL file માં સચવાય |
| 2 model calls, છેલ્લે 3 messages | 2 model calls, છેલ્લે **7** messages (system prompt અને ત્રણ વધારાના user context messages સાથે) |
| કોઈ સુરક્ષા નહીં | sandbox, approval, retries, cancellation (પ્રકરણ 5) |
| એક જ file | ~100 plugins (પ્રકરણ 2) |

> ⚠️ **રમકડું અહીં તૂટે છે:** ખરા harness માં model ને બધા tools નું વર્ણન (schema) મોકલાય છે, જવાબ streaming માં ટુકડે ટુકડે આવે છે, ચોપડો disk પર સચવાય છે, અને દરેક ભાગ plugin છે. પણ **turn → steps → tool call → tool result → ફરી model** નો આકાર બરાબર એ જ છે. પ્રકરણ 1 વાંચતી વખતે આ રમકડું મનમાં રાખો.

## પ્ર.10 🟢 Git અને open source: code નો ફોટો-આલ્બમ

> 📦 **Repository (repo)** — project ની બધી files + તેમનો આખો ઇતિહાસ. ઉદાહરણ: GitHub પરનું `deepseek-ai/deepseek-harness`.
>
> 📦 **Git** — દરેક ફેરફારનો ઇતિહાસ રાખતું tool.
>
> 📦 **Commit** — ઇતિહાસનો એક ફોટો, જેની પાછળ એક અનન્ય નંબર — **SHA** — લખેલો હોય. ઉદાહરણ: `fcc0ad4…`.
>
> 📦 **Clone** — repository ની પૂરી નકલ પોતાના computer પર.
>
> 📦 **Branch** — ઇતિહાસની એક શાખા, જેમાં નવા ફોટા ઉમેરાતા જાય. `master`/`main` મુખ્ય શાખા.
>
> 📦 **Pull request (PR)** — "મારો આ ફેરફાર તમારા repository માં લો" એવી વિનંતી, review માટે.
>
> 📦 **Upstream** — મૂળ project, જેમાં આપણે સુધારો સૂચવીએ. 🍽️ ભોજનાલય chain ની મુખ્ય કચેરી.

**આ પુસ્તક એક જ ફોટા પર બંધાયેલું છે** (`fcc0ad4`). Software રોજ બદલાય છે; ફોટો બદલાતો નથી. તેથી પુસ્તકની દરેક source link એ ફોટાની ચોક્કસ lines બતાવે છે. પ્રકરણ 0 માં તમે આ ફોટામાં "ઊભા" રહેશો.

## પ્ર.11 🟢 આ પુસ્તક કેવી રીતે વાંચવું

દરેક પ્રકરણ આ જ ક્રમમાં ચાલે છે, જેથી તમને હંમેશા ખબર હોય કે ક્યાં છો:

1. 🎬 **વાર્તા** — ભોજનાલયમાં આજે કયો પ્રશ્ન આવ્યો.
2. 🎯 **તમે શું કરી શકશો** — પ્રકરણનું વચન.
3. 🗺️ **નકશો** — પ્રકરણ એક ચિત્રમાં.
4. **વિષય** — 📦 નવો શબ્દ જ્યાં આવે ત્યાં જ સમજૂતી, 🍽️ ઉપમા, પછી ખરો code અને source link.
5. 🧪 **Lab** — commands અને અપેક્ષિત output.
6. 🔮 **આગાહી કસોટી** — ચલાવતા **પહેલાં** ધારો. ખોટી ધારણા સુધરે ત્યારે શીખેલું સૌથી લાંબું યાદ રહે છે.
7. 🩺 **નિષ્ફળતા અને નિદાન** — એક ખરી ભૂલ અને તેને શોધવાનો રસ્તો.
8. ✅ **સાર** — યાદ-ચાવીઓ, ગેરસમજો, પુનરાવર્તન કાર્ડ.
9. 🧠 **Mastery check** — જવાબો [પરિશિષ્ટ D](../appendix/D-lab-solutions.md) માં.
10. 🎬 **આગળ શું** — વાર્તા આગલા દિવસ સાથે જોડાય.

### રોજનું સમયપત્રક (15 દિવસ)

| દિવસ | પ્રકરણ | વાર્તામાં | Lab નો સમય (આશરે) |
|---|---|---|---|
| 1 | પ્રવેશ (આ) | પરિણામનો દિવસ | 1–2 કલાક |
| 2 | [0 પાયો](00-paayo-ane-pratham-run.md) | ભોજનાલયની ચાવીઓ | 2–3 કલાક (install + build) |
| 3–4 | [1 મુસાફરી](01-request-ni-musafari.md) | એક ઓર્ડર દરવાજાથી થાળી સુધી | 2 કલાક |
| 5–6 | [2 Cordis](02-cordis-plugin-architecture.md) | સવારે ભોજનાલય ખૂલે | 2 કલાક |
| 7 | [3 અંદર](03-tools-sessions-adapters.md) | ત્રણ ઓરડા અંદરથી | 2 કલાક |
| 8–9 | [4 પોતાનો plugin](04-potano-plugin.md) | આરવનું પોતાનું કાઉન્ટર | 3 કલાક |
| 10–11 | [5 તૂટે તો](05-debugging-permissions-reliability.md) | ખરાબ દિવસ | 3 કલાક |
| 12–13 | [6 Maintainer](06-maintainer-architecture.md) | મુખ્ય કચેરીને સૂચન | 3 કલાક |
| 14–15 | [7 અંતિમ પ્રોજેક્ટ](07-antim-project-mastery.md) | મુનીમજીનો હિસાબ + પરીક્ષા | 4 કલાક |

ઉતાવળ નથી. કોઈ પ્રકરણ બે વાર વાંચવું પડે તો એ સામાન્ય છે — 🔴 વિભાગો તો ખાસ બીજી વાંચન માટે જ છે.

## 🔮 આગાહી કસોટી

`toy-agent.mjs` માં `fakeModel` ને એવો બદલો કે તે **પહેલી જ વાર** text આપે (tool ન માંગે): `if (last.role !== 'tool')` વાળી line ને comment કરી દો. **ચલાવતા પહેલાં લખો:** (1) કેટલા steps? (2) `tool/call` event આવશે? (3) `messagesSentLast` શું હશે? (4) જવાબમાં શું છપાશે? (સંકેત: `last.content` હવે tool result નહીં, તમારું task છે.)

જવાબ: [પરિશિષ્ટ D — પ્રવેશ](../appendix/D-lab-solutions.md#pravesh).

## 🩺 નિષ્ફળતા: `Error: Cannot find module '…/labs/pravesh/thali.mjs'`

**લક્ષણ.** પુસ્તકના folder માં `node labs/pravesh/thali.mjs` બરાબર ચાલ્યું. પછી `cd ~/bhojanalay` કરીને એ જ command ચલાવ્યો, અને આ આવ્યું (🧪 path ટૂંકાવ્યો છે):

```text
Error: Cannot find module '/home/aarav/bhojanalay/labs/pravesh/thali.mjs'
  code: 'MODULE_NOT_FOUND',
```

Exit code `1`.

**ટૂંકો નિદાન માર્ગ.**

1. ભૂલ સંદેશ ધ્યાનથી વાંચો — Node કયો **પૂરો path** શોધતું હતું તે તેમાં લખેલું છે.
2. એ path ની શરૂઆત જુઓ: `/home/aarav/bhojanalay/…` — એટલે relative path `labs/pravesh/thali.mjs` ને Node એ **હાલના folder** (`pwd`) સામે જોડ્યો.
3. ઉપાય: પુસ્તકના folder માં પાછા જાઓ (`cd`), અથવા absolute path આપો.
4. પુરાવો: ફરી ચલાવો; exit code `0` અને `ગુજરાતી થાળી` થી શરૂ થતું output.

**શીખ:** relative path "ક્યાંથી ગણવું" એ હંમેશા કોઈક નક્કી કરે છે — shell માં હાલનું folder. પ્રકરણ 2 માં આ જ પ્રશ્ન મોટા રૂપમાં આવશે: overlay માં લખેલો plugin path harness **કોની સામે** શોધે છે?

ભૂલ સંદેશ શત્રુ નથી, નકશો છે. દરેક પ્રકરણના 🩺 વિભાગમાં આપણે આ જ ટેવ પાડીશું: **લક્ષણ → સંદેશ વાંચો → કારણ → ઉપાય → ફરી ચલાવીને પુરાવો.**

<a id="saral-samaj"></a>

## ✅ સાર — પ્રવેશ પ્રકરણ એક પાનામાં

**એક વાક્યમાં:** computer files અને processes થી ચાલે, terminal થી આપણે તેને આદેશ આપીએ, programs JSON/YAML/CSV માં વાત કરે, internet પર HTTP થી, JavaScript માં `async`/`await` થી રાહ જોવાય અને `AbortController` થી રદ થાય — અને AI agent એ "model પૂછો → tool ચલાવો → ફરી પૂછો" નો loop છે, જેની દરેક ઘટના ચોપડામાં લખાય છે.

### યાદ-ચાવીઓ

- **"0 = બધું બરાબર"** — exit code.
- **"થાળી stdout માં, બૂમો stderr માં."**
- **"મો-પ્રો-એ-હા-પ્લ"** — model, provider, agent, harness, plugin.
- **"મહારાજ પાસે હાથ નથી, યાદ નથી"** — tool call અને આખો ઇતિહાસ ફરી મોકલવો.
- **"ધોધમાં પાણી આગળ વહેવા દો"** — waterfall માં `next()`.
- **"`finally` ગમે તે થાય, ચાલે જ."**

### સામાન્ય ગેરસમજો

| ગેરસમજ | સાચું |
|---|---|
| "AI model પોતે file ખોલે છે." | Model ફક્ત tool call લખે; file harness ખોલે. |
| "Model ને પાછલી વાત યાદ છે." | દરેક call માં આખો ઇતિહાસ ફરી મોકલાય છે. |
| "Exit code 0 નહીં, તો computer બગડ્યું." | Exit code ફક્ત "આ process સફળ થયો કે નહીં" કહે છે; કારણ stderr માં વાંચો. |
| "API key વગર AI શીખી ન શકાય." | આ આખું પુસ્તક key વગર mock provider સાથે ચાલે છે. |
| "TypeScript ના types program ચાલે ત્યારે તપાસાય છે." | Types ફક્ત compile વખતે (`tsc`) તપાસાય; ચાલતી વખતે ભૂંસાઈ જાય. |

### પુનરાવર્તન કાર્ડ

જવાબ જોયા પહેલાં મોટેથી બોલો, પછી ખોલો.

<details><summary>1. Absolute અને relative path માં શું ફરક?</summary>

Absolute `/` થી શરૂ થાય અને ગમે ત્યાંથી એક જ જગ્યા બતાવે; relative "હું જ્યાં છું ત્યાંથી" ગણાય. પ્રકરણ 2 અને 4 માં overlay માં absolute path કેમ જોઈએ તે આ ફરક પર આધારિત છે.
</details>

<details><summary>2. `O=$(bash make-overlay.sh)` શું કરે?</summary>

Script ચલાવી તેનું stdout (અહીં એક file નો path) variable `O` માં મૂકે; પછી `$O` થી વાપરાય.
</details>

<details><summary>3. HTTP 429 અને 401 માં ફરક?</summary>

429 = બહુ ઝડપથી માંગણીઓ (થોડી રાહ જોઈ ફરી પ્રયાસ યોગ્ય); 401 = ઓળખ/ચાવી ખોટી (ફરી પ્રયાસથી કંઈ નહીં સુધરે). પ્રકરણ 5 માં harness બરાબર આ ભેદ પાડે છે.
</details>

<details><summary>4. રમકડા-agent માં 2 steps કેમ થયા?</summary>

Step 1 માં model એ text ને બદલે tool call આપ્યો, તેથી turn પૂરો ન થયો; tool result ઉમેરી step 2 માં ફરી પૂછ્યું, ત્યારે text આવ્યું.
</details>

<details><summary>5. `AbortController` અને `finally` નું જોડાણ શું?</summary>

Controller "રદ" નો સંકેત આપે; `await` વાળું કામ ભૂલ ફેંકે; `catch` કારણ નક્કી કરે; `finally` ગમે તે થાય તો પણ અંતિમ નોંધ લખે.
</details>

### મિત્રને સમજાવો (3 મિનિટ)

ભોજનાલયની ઉપમા વાપરીને કોઈ મિત્રને સમજાવો કે "AI agent README કેવી રીતે વાંચે છે, જ્યારે model ને હાથ જ નથી?" પછી એ જ વાત ઉપમા વગર, ફક્ત model, tool call, tool result, loop શબ્દોથી કહો. જ્યાં અટકો ત્યાં પ્ર.8–પ્ર.9 ફરી વાંચો.

<a id="swa-kasoti"></a>

## 🧠 સ્વ-કસોટી / Mastery check

આ પાંચેયના જવાબ સહેલાઈથી આવડે તો તમે પ્રકરણ 0 માટે તૈયાર છો:

1. `cd ~/bhojanalay && ls nofile; echo $?` — છેલ્લે શું છપાશે, અને `&&` ને બદલે `;` હોત તો શો ફરક પડત?
2. એક જ ઓર્ડરને JSON અને YAML બંનેમાં લખો.
3. `await` શું કરે છે, અને model call જેવા કામ માટે તે કેમ જરૂરી છે?
4. `{ kind: 'served' } | { kind: 'rejected' }` જેવા type માં `satisfies never` કેમ ઉપયોગી છે?
5. Waterfall listener `next()` ન બોલાવે તો શું થાય? `waterfall.mjs` ના output થી સમજાવો.

જવાબો: [પરિશિષ્ટ D — પ્રવેશ](../appendix/D-lab-solutions.md#pravesh).

## 🎬 આગળ શું

રાત્રે ભોજનાલય બંધ થતાં મીરાદીદી કહે છે: "આજે તેં computer ની ભાષા શીખી અને રમકડા-agent ચલાવ્યો. કાલે આપણે **ખરા** DeepSeek Harness ની ચાવીઓ લઈશું — એ જ ફોટા (`fcc0ad4`) પર — અને તેમાં તારો પહેલો plugin ચલાવીશું. API key વગર."

---

આગળ: [પ્રકરણ 0 — પાયો અને પ્રથમ run](00-paayo-ane-pratham-run.md) · આખો નકશો: [સમગ્ર નકશો](overview-samagra-naksho.md)
