# પરિશિષ્ટ H — Chapter status અને resume notes

"Verified" એટલે: પ્રકરણના દરેક command અને output આ પુસ્તક લખતી વખતે pinned commit પર ચલાવ્યા છે (અથવા ⚠️ ચિહ્ન સાથે સ્પષ્ટ લખ્યું છે કે નથી ચલાવ્યા), દરેક source link [`tools/citations.py`](../tools/citations.py) થી બન્યો છે, અને [`tools/verify_book.py`](../tools/verify_book.py) pass થાય છે.

| પ્રકરણ | Draft | Verified | ⚠️ બાકી |
|---|---|---|---|
| પ્રવેશ — શૂન્યથી શરૂઆત (2026-11-09) | ✔ | ✔ (પ્રવેશ labs; પરિશિષ્ટ G) | — |
| 0 પાયો અને પ્રથમ run | ✔ | ✔ | Windows + WSL2 path |
| 1 એક requestની મુસાફરી | ✔ | ✔ | real provider |
| 2 Cordis અને plugin architecture | ✔ | ✔ | upstream Cordis repository નું અલગ inspection |
| 3 Tools, sessions, adapters | ✔ | ✔ | — |
| 4 પોતાનો plugin | ✔ | ✔ | — |
| 5 Debugging, permissions, reliability | ✔ | ✔ | interactive debugger; kernel sandbox enforcement |
| 6 Maintainer અને architecture | ✔ | ✔ | latency કારણનું profiling |
| 7 અંતિમ પ્રોજેક્ટ | ✔ | ✔ | Tally connector (extension design જ) |
| પરિશિષ્ટ A–H | ✔ | ✔ | — |

## 2026-11-10 પુનર્લેખન: વાર્તા પોતે જ technical

- **ધ્યેય:** વાર્તા અને technical ને અલગ વિભાગોમાં રાખવાને બદલે એક કરવા. ભોજનાલયની દરેક **ઘટના** harness નો એક **નિયમ** છે, અને ઘટનામાં નિયમનું કારણ છે.
- **માળખું:** દરેક પ્રકરણ હવે **દૃશ્યો** માં છે; દરેક દૃશ્ય 🎬 ઘટના → ❓ આરવનો પ્રશ્ન → 💻 code માં → 🔬 expert નજર. અલગ 📦/🍽️ boxes અને 🟢🟡🔴 નિશાન કાઢ્યાં; નવો શબ્દ તેના દૃશ્યના 💻 ભાગમાં સમજાવેલો છે. દરેક ✅ સાર "ઘટના → નિયમ" table થી શરૂ થાય છે; આખી યાદી [સમગ્ર નકશો, 3a](../book/overview-samagra-naksho.md) માં.
- **🔬 Expert નજર:** દરેક દૃશ્યમાં નવો ભાગ — નિયમ કેમ બન્યો, તૂટે તો શું બગડે, અને expert કયો પ્રશ્ન પૂછે. આ ભાગ design rationale છે; તેમાંના source-level દાવા એ જ દૃશ્યના 💻 ભાગના ✅/🧪 પુરાવા પર ઊભા છે.
- **વાર્તામાં ફેરફાર:** મહારાજ "દરેક વાતચીત પછી બધું ભૂલી જાય છે" એ હવે વાર્તાનું તથ્ય છે (model ને યાદ નથી), "ઉપમા તૂટે છે" ની નોંધ નહીં. નવી ઘટનાઓ (દા.ત. "લસણ વગર" નો ઝઘડો, ઓર્ડર 7, ઝડપી મદદનીશ, છેલ્લી ઘંટડી) શીખવવા માટે ઉમેરી છે. પાત્ર ↔ technical ભાગ નો નકશો બદલ્યો નથી.
- **Core:** commands, expected outputs, evidence links, source citations, labs code, mastery check પ્રશ્નો, `#saral-samaj` / `#swa-kasoti` / `#upsanhar` anchors — બધું મૂળ જેવું. `tools/verify_book.py` pinned commit સામે pass.
- **નવું પ્રકરણ લખો તો:** દરેક technical નિયમ માટે પહેલાં એવી ઘટના શોધો જેમાં નિયમ **ન હોવાથી** કંઈક બગડે; પછી દૃશ્ય લખો.

## 2026-11-09 પુનર્લેખન

- **વાચક:** "basic programming જાણતો college graduate" થી બદલી "12મું ધોરણ પાસ, programming વગર". નવું [પ્રવેશ પ્રકરણ](../book/pravesh-shunya-thi-shuruaat.md) અને `labs/pravesh/` ઉમેર્યા.
- **વાર્તા:** આખું પુસ્તક એક જ વાર્તા (અન્નપૂર્ણા થાળી ઘર, 15 દિવસ) માં; પાત્રોની યાદી પ્રવેશ પ્રકરણમાં. પ્રકરણ બદલતી વખતે પાત્ર ↔ technical ભાગ નો નકશો ન બદલો.
- **માળખું:** દરેક પ્રકરણમાંથી અલગ "સરળ સમજ" વિભાગ કાઢી, તેની સામગ્રી જ્યાં શબ્દ પહેલી વાર આવે ત્યાં (📦 box) અને અંતના "✅ સાર" માં ભેળવી. `#saral-samaj` anchor હવે ✅ સાર પર છે.
- **Core:** commands, expected outputs, evidence links, source citations, labs code, mastery check પ્રશ્નો — બધું મૂળ જેવું.

## Resume notes (નવી session માટે)

- **Pinned source:** `git worktree add --detach <dir> fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159` — line numbers આ tree પરથી જ.
- **Citations ફરી બનાવવા:** `python3 tools/citations.py <dir> > appendix/citations.generated.md` અને પછી `python3 tools/refdefs.py book/*.md appendix/*.md`.
- **નવો commit pin કરવો હોય તો:** `tools/citations.py` માં `SHA` બદલો, generator ચલાવો — જે pattern ન મળે તે નિષ્ફળ થશે, અને એ જ પ્રકરણો ફરી ચકાસવાનાં છે. પછી બધા labs (`run-mock.sh` runs, tests) ફરી ચલાવી `evidence/` બદલો.
- **આગળ લખવા જેવા વિષયો** (coverage map ના ○): compaction, subagents, MCP, PTC executor, Web UI/Typert remote API, SDK/ACP. નવું પ્રકરણ લખો તો એ જ દૃશ્ય-માળખું (🎬 ઘટના → ❓ → 💻 → 🔬) અને પાત્રો વાપરો.
