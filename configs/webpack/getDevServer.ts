import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { type TDevServerOptions } from './types/devServer'

export function getDevServer(options: TDevServerOptions): DevServerConfiguration {
  const { port } = options

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false
    }
  }
}
