import webpack from 'webpack'

export function getResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
