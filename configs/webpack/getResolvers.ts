import type webpack from 'webpack'
import { type TResolversOptions } from './types/resolvers'

export function getResolvers(options: TResolversOptions): webpack.ResolveOptions {
  const { srcPath } = options

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    alias: {}
  }
}
