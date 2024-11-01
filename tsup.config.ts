import fsp from 'node:fs/promises'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['packages/live/src/**/*.ts'],
  platform: 'browser',
  splitting: true,
  bundle: false,
  outDir: 'packages/live/dist',
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  external: ['react'],
})
