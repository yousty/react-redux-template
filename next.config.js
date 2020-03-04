require("dotenv").config()

module.exports = {
  ...(process.env.NODE_ENV !== "development" && {
    assetPrefix: ""
  }),
  serverRuntimeConfig: {
    EXAMPLE_SERVER_ENV_VAR: process.env.EXAMPLE_SERVER_ENV_VAR,
  },
  publicRuntimeConfig: {
    EXAMPLE_RUNTIME_ENV_VAR: process.env.EXAMPLE_RUNTIME_ENV_VAR,
    NODE_ENV: process.env.NODE_ENV,
  }
}
