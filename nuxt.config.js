export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // ssr: false,
  // target: 'static',
  head: {
    title: 'koreasafe-manager',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    bodyAttrs: {
      class: 'main-body leftmenu ltr light-theme dark-menu',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.7/css/perfect-scrollbar.min.css',
      },
      {
        href: 'assets/plugins/bootstrap/css/bootstrap.min.css',
        rel: 'stylesheet',
      },
      // <!-- Icons css-->
      { href: 'assets/web-fonts/icons.css', rel: 'stylesheet' },
      {
        href: 'assets/web-fonts/font-awesome/font-awesome.min.css',
        rel: 'stylesheet',
      },
      { href: 'assets/web-fonts/plugin.css', rel: 'stylesheet' },
      // <!-- Style css-->
      { href: 'assets/css/plugins.css', rel: 'stylesheet' },
      // <!-- INTERNAL Switcher css -->
      { href: 'assets/switcher/demo.css', rel: 'stylesheet' },
      { href: 'assets/switcher/css/switcher.css', rel: 'stylesheet' },
      { href: 'assets/css/style.css', rel: 'stylesheet' },
      { href: 'assets/css/new-style.css', rel: 'stylesheet' },
      { href: 'assets/css/new-common.css', rel: 'stylesheet' },
    ],
    script: [
      {
        hid: 'script',
        src: 'assets/plugins/jquery/jquery.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/bootstrap/js/popper.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/bootstrap/js/bootstrap.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/perfect-scrollbar/pscroll1.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/select2/js/select2.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/datatable/js/jquery.dataTables.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/datatable/js/dataTables.bootstrap5.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/datatable/dataTables.responsive.min.js',
        defer: true,
      },
      {
        hid: 'script',
        src: 'assets/plugins/apexcharts/apexcharts.js',
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/lodash.js',
    { src: '@/plugins/persistedState.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // 'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/axios
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  server: {
    port: process.env.NODE_ENV === 'production' ? null : 5000,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },
}
