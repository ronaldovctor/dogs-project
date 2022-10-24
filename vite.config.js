import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://ronaldovctor.github.io/dogs-project/',
	plugins: [svgr(), react()],
})
