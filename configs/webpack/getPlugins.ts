import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type TPluginsOptions = {
  htmlTemplatePath: string
}

export function getPlugins(options: TPluginsOptions): webpack.WebpackPluginInstance[] {
  const { htmlTemplatePath } = options

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: htmlTemplatePath })
  ]
}
