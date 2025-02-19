import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config) return config;

    // ✅ `config.module?.rules`이 `undefined`일 경우 빈 배열로 초기화
    if (!config.module) {
      config.module = { rules: [] };
    }

    // ✅ `config.module.rules`이 `undefined`일 경우 빈 배열로 초기화
    if (!config.module.rules) {
      config.module.rules = [];
    }

    // 기존 CSS 로더에서 .vanilla.css 파일 제외
    config.module.rules.forEach((rule) => {
      if (rule && typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('test.css')) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    // Vanilla Extract 관련 플러그인 추가
    config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());

    // Vanilla Extract를 위한 로더 추가
    config.module.rules.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
          },
        },
      ],
    });

    return config;
  },
};

export default config;
