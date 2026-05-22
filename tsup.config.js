import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js'
    }
  },
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: false,           // no TypeScript, so no .d.ts
  external: [
    'react',
    'react-dom',
    'lucide-react'
  ],
  injectStyle: false,   // CSS handled separately
  outDir: 'dist'
})