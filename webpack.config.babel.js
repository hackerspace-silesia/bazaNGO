import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
  template: path.join(__dirname, 'app/index.html')
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.template,
  filename: 'index.html',
  inject: 'body'
})

const productionPluginConfig = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const CleanWebpackPluginConfig = new CleanWebpackPlugin(PATHS.build)

const baseConfig = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      "node_modules"
    ]
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true
  },
  plugins: [HtmlWebpackPluginConfig, new HotModuleReplacementPlugin()]
}

const productionConfig = {
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js'
  },
  plugins: [CleanWebpackPluginConfig, HtmlWebpackPluginConfig, productionPluginConfig]
}

export default Object.assign({}, baseConfig,
  isProduction ? productionConfig : developmentConfig)
