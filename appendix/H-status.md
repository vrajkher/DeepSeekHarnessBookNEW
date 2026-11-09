# પરિશિષ્ટ H — Chapter status અને resume notes

"Verified" એટલે: પ્રકરણના દરેક command અને output આ પુસ્તક લખતી વખતે pinned commit પર ચલાવ્યા છે (અથવા ⚠️ ચિહ્ન સાથે સ્પષ્ટ લખ્યું છે કે નથી ચલાવ્યા), દરેક source link [`tools/citations.py`](../tools/citations.py) થી બન્યો છે, અને [`tools/verify_book.py`](../tools/verify_book.py) pass થાય છે.

| પ્રકરણ | Draft | Verified | ⚠️ બાકી |
|---|---|---|---|
| પ્રવેશ — શૂન્યથી શરૂઆત (નવું, 2026-11-09) | ✔ | ✔ (પ્રવેશ labs; પરિશિષ્ટ G) | — |
| 0 પાયો અને પ્રથમ run | ✔ | ✔ | Windows + WSL2 path |
| 1 એક requestની મુસાફરી | ✔ | ✔ | real provider |
| 2 Cordis અને plugin architecture | ✔ | ✔ | upstream Cordis repository નું અલગ inspection |
| 3 Tools, sessions, adapters | ✔ | ✔ | — |
| 4 પોતાનો plugin | ✔ | ✔ | — |
| 5 Debugging, permissions, reliability | ✔ | ✔ | interactive debugger; kernel sandbox enforcement |
| 6 Maintainer અને architecture | ✔ | ✔ | latency કારણનું profiling |
| 7 અંતિમ પ્રોજેક્ટ | ✔ | ✔ | Tally connector (extension design જ) |
| પરિશિષ્ટ A–H | ✔ | ✔ | — |

## 2026-11-09 પુનર્લેખન

- **વાચક:** "basic programming જાણતો college graduate" થી બદલી "12મું ધોરણ પાસ, programming વગર". નવું [પ્રવેશ પ્રકરણ](../book/pravesh-shunya-thi-shuruaat.md) અને `labs/pravesh/` ઉમેર્યા.
- **વાર્તા:** આખું પુસ્તક એક જ વાર્તા (અન્નપૂર્ણા થાળી ઘર, 15 દિવસ) માં; પાત્રોની યાદી પ્રવેશ પ્રકરણમાં. પ્રકરણ બદલતી વખતે પાત્ર ↔ technical ભાગ નો નકશો ન બદલો.
- **માળખું:** દરેક પ્રકરણમાંથી અલગ "સરળ સમજ" વિભાગ કાઢી, તેની સામગ્રી જ્યાં શબ્દ પહેલી વાર આવે ત્યાં (📦 box) અને અંતના "✅ સાર" માં ભેળવી. `#saral-samaj` anchor હવે ✅ સાર પર છે.
- **Core:** commands, expected outputs, evidence links, source citations, labs code, mastery check પ્રશ્નો — બધું મૂળ જેવું.

## Resume notes (નવી session માટે)

- **Pinned source:** `git worktree add --detach <dir> fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159` — line numbers આ tree પરથી જ.
- **Citations ફરી બનાવવા:** `python3 tools/citations.py <dir> > appendix/citations.generated.md` અને પછી `python3 tools/refdefs.py book/*.md appendix/*.md`.
- **નવો commit pin કરવો હોય તો:** `tools/citations.py` માં `SHA` બદલો, generator ચલાવો — જે pattern ન મળે તે નિષ્ફળ થશે, અને એ જ પ્રકરણો ફરી ચકાસવાનાં છે. પછી બધા labs (`run-mock.sh` runs, tests) ફરી ચલાવી `evidence/` બદલો.
- **આગળ લખવા જેવા વિષયો** (coverage map ના ○): compaction, subagents, MCP, PTC executor, Web UI/Typert remote API, SDK/ACP. નવું પ્રકરણ લખો તો એ જ વાર્તા-માળખું (🎬 → 🎯 → 🗺️ → … → 🎬) અને પાત્રો વાપરો.
