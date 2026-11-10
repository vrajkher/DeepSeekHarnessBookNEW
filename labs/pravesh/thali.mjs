// Book lab code (પ્રવેશ પ્રકરણ): variables, object, array, function.
// Run: node thali.mjs
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
