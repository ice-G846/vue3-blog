const path = require('path')
// vite.config.js # or vite.config.ts

console.log(path.resolve(__dirname, './src'))

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src'),
    '/components/': path.resolve(__dirname, './src/components')
  }
}