import webpack from 'webpack'

export function getLoaders(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ]
}
