const path = require('path')
// vite.config.js # or vite.config.ts

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src'),
    '/components/': path.resolve(__dirname, './src/components')
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 给导入的路径最后加上 ; 
        additionalData: '@import "./src/assets/style/reset.scss";'
      }
    }
  }
}