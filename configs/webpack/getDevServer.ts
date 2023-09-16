import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type TDevServerOptions = {
  port: number
}

export function getDevServer(options: TDevServerOptions): DevServerConfiguration {
  const { port } = options

  return {
    port,
    open: true,
    historyApiFallback: true
  }
}
