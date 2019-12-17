// 资源文件开启 gzip加速
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 压缩优化
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|ts)(\?.*)?$/i

const webpack = require('webpack')


module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, //去除map文件

  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },

  // webpack 配置 路径配置
  // chainWebpack: config => {
  //   // 配置文件夹别名
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('layout', resolve('src/layout'))
  //     .set('base', resolve('src/base'))
  //     .set('static', resolve('src/static'))
  //   // 移除prefetch 插件 提高访问速度
  //   config.plugins.delete('prefetch')

  //   // 修改图片输出路径
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpe?g|gif|ico|docx)(\?.*)?$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       name: path.join('../assets/', 'img/[name].[ext]')
  //     })
  // },

  configureWebpack: config => {

    if (process.env.NODE_ENV === 'production') {
      // 将每个依赖包打包成单独的js文件
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        },
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })

      // 是否生产环境中开启gzip加速
      //  config.plugins.push(
      //   new CompressionWebpackPlugin({
      //     filename: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: productionGzipExtensions,
      //     threshold: 10240,
      //     minRatio: 0.8
      //   }),
      //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // 减少 moment的体积
      //   new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/))
      console.log('生产模式')
    } else {
      console.log('开发模式')
    }
  },
  devServer: {
    port: 8080, // 端口号
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // 配置代理
    proxy: {
      '/api': {
        ws: false, // 禁用websocket
        target: 'http://10.92.130.126:8848/',
        changeOrigin: true,
      }
    }
  },
}
