import getConfig from "next/config"

const { publicRuntimeConfig = {}, serverRuntimeConfig = {} } = getConfig() || {}

const { EXAMPLE_RUNTIME_ENV_VAR, NODE_ENV, TRACKING_ID } = publicRuntimeConfig

const {
  EXAMPLE_SERVER_ENV_VAR,
} = serverRuntimeConfig

export {
  NODE_ENV,
  EXAMPLE_SERVER_ENV_VAR,
  EXAMPLE_RUNTIME_ENV_VAR,
  TRACKING_ID
}
