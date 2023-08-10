export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ideenlabor Waldkirch",
    description: "Werbeagentur, Coworking und Eventlocations in Waldkirch",
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { meta: "Author", content: "Ideenlabor Agentur" },
      { meta: "Programmierung", content: "Elias Englen | Ideenlabor Agentur" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicon.svg" },
      { rel: "stylesheet", href: "https://use.typekit.net/xjl5csb.css" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/markdownit",
    "@nuxtjs/robots",
    "nuxt-compress",
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyDIcoJ5YVwfhG_9a1QnY6s3H8AcRwc0AW8",
      },
    ],
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-div", "markdown-it-attrs"],
  },

  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
