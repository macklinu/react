import { defineConfig } from 'tsup'

export default defineConfig(() => ({
  entry: ['src/index.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  sourcemap: true,
  minify: true,
  onSuccess: 'cp ./src/index.css ./dist/index.css',
}))
