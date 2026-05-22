// test.js  — run with: node test.js

const IconFlow = require('./dist/index.js')   // test the built output

// 1. Test default instantiation
const flow = new IconFlow()
console.log('Default size:',        flow.defaultSize)        // 24
console.log('Default animation:',   flow.defaultAnimation)   // shake
console.log('Default trigger:',     flow.defaultTrigger)     // hover
console.log('Default speed:',       flow.defaultSpeed)       // 1
console.log('Default color:',       flow.defaultColor)       // currentColor
console.log('Default strokeWidth:', flow.defaultStrokeWidth) // 2

// 2. Test custom options
const custom = new IconFlow({
  size: 32,
  animation: 'bounce',
  trigger: 'click',
  speed: 2,
  color: '#e11d48'
})
console.log('\nCustom size:',      custom.defaultSize)      // 32
console.log('Custom animation:',  custom.defaultAnimation) // bounce
console.log('Custom trigger:',    custom.defaultTrigger)   // click

// 3. Test getDefaults() — this is the core wrapper method
const defaults = flow.getDefaults()
console.log('\ngetDefaults():', defaults)
// { size: 24, color: 'currentColor', speed: 1, strokeWidth: 2, animation: 'shake', trigger: 'hover' }

// 4. Test getDefaults() with overrides
const overridden = flow.getDefaults({ animation: 'heartbeat', color: '#0f172a' })
console.log('\ngetDefaults() with overrides:', overridden)
// animation should be heartbeat, color #0f172a, rest stay as defaults

// 5. Test override doesn't mutate original
console.log('\nOriginal animation unchanged:', flow.defaultAnimation) // still shake