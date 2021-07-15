const path = require('path')
// vite.config.js # or vite.config.ts

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src'),
    '/components/': path.resolve(__dirname, './src/components')
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/assets/style/reset.scss";' // 添加公共样式
    }
  }
}