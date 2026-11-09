// Book lab code (પ્રવેશ પ્રકરણ): TypeScript types નો પહેલો પરિચય.
// Run (Node 24): node types.ts
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

console.log(describe(serve({ dish: 'થાળી', qty: 2 })))
console.log(describe(serve({ dish: 'થાળી', qty: 0 })))
