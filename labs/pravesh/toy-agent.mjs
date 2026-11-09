// Book lab code (પ્રવેશ પ્રકરણ): 40 lines નો રમકડા-agent.
// આ DeepSeek Harness નો code નથી. ફક્ત turn, step, tool call અને ચોપડા (log) નો વિચાર
// પ્રકરણ 1 પહેલાં આંખે જોવા માટે છે. "model" અહીં નકલી છે: એ script મુજબ જવાબ આપે છે.
// Run: node toy-agent.mjs
import { readFileSync } from 'node:fs'

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

const tools = { read: ({ file_path }) => readFileSync(new URL(file_path, import.meta.url), 'utf8').trim() }

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

console.log('જવાબ:', turn('આજનું મેનુ વાંચીને કહો કેટલી વાનગી છે.'))
