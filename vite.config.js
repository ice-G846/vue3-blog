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
  },
  configureWebpack: (config) => {
		// 生产环境取消console打印    
		config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
		// 如果是多环境打包
		//if (process.env.NODE_ENV === 'production') {
		//config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
		// }
	},
  port: 8080,
}
