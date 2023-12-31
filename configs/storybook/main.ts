import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import webpack from 'webpack'

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../../public'],
  webpackFinal: async (config) => {
    config.resolve?.modules?.push(path.resolve(__dirname, '../../src'))
    config.resolve?.extensions?.push('.tsx', '.ts')
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
              localIdentName: '[path][name]__[local]'
            }
          }
        },
        'sass-loader'
      ]
    })

    if (config.module?.rules) {
      config.module.rules = config.module?.rules?.map((rule, index, arr) => {
        if (rule && rule !== '...') {
          const { test } = rule

          if (test?.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
          }
        }

        return rule
      })
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.plugins?.push(new webpack.DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook')
    }))

    return config
  }

}
export default config
