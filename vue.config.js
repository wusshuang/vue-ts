// const CompressionPlugin = require('compression-webpack-plugin')
// const FileManagerPlugin = require('filemanager-webpack-plugin')
const fs = require('fs')

const Html = require('./html.config')

// cdn预加载使用
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'element-ui': 'ELEMENT',
  'echarts': 'echarts'
}

const cdn = {
  // 开发环境
  dev: {
    css: [
      // 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: []
  },
  // 生产环境
  build: {
    css: [
      // 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.3/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/element-ui@2.8.2/lib/index.js',
      'https://cdn.jsdelivr.net/npm/echarts@4.2.1/dist/echarts.min.js'
    ]
  }
}

const NODE_ENV = process.env.NODE_ENV

let tempHtml = ''

//  根据不同的打包环境，加载不同的模板
switch (NODE_ENV) {
  case 'development':
    tempHtml = Html.html
    break
  case 'production':
    if (process.env.VUE_APP_TITLE === 'cdn') {
      tempHtml = Html.cdnHtml
    } else {
      tempHtml = Html.html
    }
    break
  default:
    console.log('没有匹配到任何模式')
}

fs.writeFileSync("./public/index.html", tempHtml)

module.exports = {
  publicPath: '/',

  css: {
    loaderOptions: {
      sass: {
        // 配置全局的 scss 数据
        data: `@import "@/assets/css/main.scss";`
      }
    }
  },

  chainWebpack: config => {
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        if (process.env.VUE_APP_TITLE === 'cdn') {
          args[0].cdn = cdn.build
        } else {
          args[0].cdn = cdn.dev
        }
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
  },

  // 修改webpack config, 使其不打包externals下的资源
  configureWebpack: config => {
    const myConfig = {}

    if (process.env.NODE_ENV === 'production') {
      if (process.env.VUE_APP_TITLE === 'cdn') {
        // 1. 生产环境npm包转CDN
        myConfig.externals = externals
      } else {
        /**
         * 关闭host check，方便使用ngrok之类的内网转发工具
         */
        myConfig.devServer = {
          disableHostCheck: true
        }
      }

    }
    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭host check，方便使用ngrok之类的内网转发工具
       */
      myConfig.devServer = {
        disableHostCheck: true
      }
    }
    //  过滤生产环境的 console.log()
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }

    return myConfig
  },

  // 去除打包之后的 map 文件
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,

  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     return {
  //       plugins: [new CompressionPlugin({
  //         test: /\.js$|\.html$|\.css/,
  //         threshold: 10240,
  //         deleteOriginalAssets: false
  //       })]
  //     }
  //   }
  // }

  // configureWebpack: {  //webpack的相关配置在这里
  //   plugins: [
  //     new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
  //       onEnd: {
  //         delete: [   //首先需要删除项目根目录下的dist.zip
  //           './dist.zip',
  //         ],
  //         archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
  //           {source: './dist', destination: './dist.zip'},
  //         ]
  //       }
  //     })
  //   ]
  // }
}
