import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

interface TPluginsOptions {
  htmlTemplatePath: string
  isDev: boolean
}

export function getPlugins(options: TPluginsOptions): webpack.WebpackPluginInstance[] {
  const { htmlTemplatePath, isDev } = options
  const plugins: webpack.WebpackPluginInstance[] = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: htmlTemplatePath }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({
      overlay: false
    }))
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugins
}
