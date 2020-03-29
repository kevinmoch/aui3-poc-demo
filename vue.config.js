module.exports = {
  outputDir: 'dist/vue',
  publicPath: './',
  css: {
    extract: process.env.PLATFORM_ENV !== 'card'
  },
  chainWebpack: config => {
    if (process.env.PLATFORM_ENV !== 'card') {
      config.plugin('html').tap(args => {
        args[0].template = 'public/vue.html'
        return args
      })
    }
  }
}
