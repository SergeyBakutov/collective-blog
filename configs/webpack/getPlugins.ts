import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type TPluginsOptions = {
  htmlTemplatePath: string
}

export function getPlugins(options: TPluginsOptions): webpack.WebpackPluginInstance[] {
  const { htmlTemplatePath } = options

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: htmlTemplatePath }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    })
  ]
}
