import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

interface TDevServerOptions {
  port: number
}

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
