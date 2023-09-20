import type webpack from 'webpack'

interface TResolversOptions {
  srcPath: string
}

export function getResolvers (options: TResolversOptions): webpack.ResolveOptions {
  const { srcPath } = options

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    alias: {}
  }
}
