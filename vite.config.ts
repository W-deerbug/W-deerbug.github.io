import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base 설정 주의:
//   - 저장소명이 "username.github.io" 이면: base: '/'
//   - 저장소명이 "portfolio" 등 서브패스라면: base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  // base: '/test/',
  base: '/',
})
