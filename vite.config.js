import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
		react()
	],
	base: '', //To change the path to relative
	build: {
		outDir: 'build',
		sourcemap: true,
		assetsDir: 'static'
	},
	server:
  {
    host: true,
    open: true
  },
})
