// Book lab code (પ્રવેશ પ્રકરણ): Promise, async/await, AbortController.
// Run: node rasoi-async.mjs
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
