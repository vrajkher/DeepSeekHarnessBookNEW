// Book lab code (પ્રવેશ પ્રકરણ): "waterfall" નો રમકડા જેવો નમૂનો.
// આ harness/Cordis નો code નથી; ફક્ત next() નો વિચાર સમજાવવા માટે.
// Run: node waterfall.mjs
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
