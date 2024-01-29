// noinspection TypeScriptValidateTypes

import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  components: {
    dirs: [
      {
        watch: true,
        path: '~/components/shared',
        global: false,
        pathPrefix: true,
        preload: true,
        prefetch: true,
        priority: 3,
        enabled: true,
      },
      {
        watch: true,
        path: '~/components/modules',
        global: false,
        pathPrefix: false,
        prefix: '',
        preload: true,
        priority: 2,
      },
    ],
  },
  css: [
    '~/assets/css/fonts.scss',
    /* '~/assets/css/global.scss', */
  ],
  ssr: false,
  modules: [
    '@nuxtjs/storybook',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-svgo',
    '@nuxt/image',
    '@formkit/nuxt',
  ],
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
  typescript: {
    typeCheck: true,
  },
  vite: {
    // assetsInclude: ['/sb-preview/runtime.js'],
    // or
    server: {
      preTransformRequests: false,
    },
    plugins: [
      svgLoader(),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // nuxt/image
  image: {
    screens: {
      // uses a max-width rule so change this accordingly
      xs: 449,
      sm: 767,
      md: 1023,
      lg: 1279,
      xl: 1335,
      max: 1335,
    },
    provider: 'storyblok',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          quality: 90,
        },
      },
      cover: {
        modifiers: {
          format: 'webp',
          quality: 90,
        },
      },
    },
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
    providers: {
      s3: {
        provider: '~/providers/s3.provider.ts',
        options: {
          baseURL: 'https://d2ttwt9gu7swv4.cloudfront.net',
        },
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/global',
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
  eslint: {
    lintOnStart: false,
    emitError: true,
    failOnError: false,
  },
  svgo: {
    defaultImport: 'component',
    autoImportPath: './assets/icons/',
  },
  formkit: {
    autoImport: true,
  },
})
