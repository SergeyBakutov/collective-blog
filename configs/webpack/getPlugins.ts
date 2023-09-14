import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type TGetPluginsOptions = {
  htmlTemplatePath: string
}

export function getPlugins(options: TGetPluginsOptions): webpack.WebpackPluginInstance[] {
  const { htmlTemplatePath } = options

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: htmlTemplatePath })
  ]
}
