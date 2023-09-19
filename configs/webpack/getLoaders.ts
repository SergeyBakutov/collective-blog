import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type TLoadersOptions = {
  isDev: boolean
}

export function getLoaders(options: TLoadersOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader',
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource'
  }

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
