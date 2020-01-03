const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
  let config = {
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  }

  // For local development, we disable proper sourcemaps to speed up
  // performance.
  if (stage === "develop") {
    config = {
      ...config,
      devtool: "eval",
    }
  }

  if (stage === "build-javascript") {
    config = {
      ...config,
      devtool: "cheap-module-source-map",
    }
  }

  if (stage === "build-html") {
    config = {
      ...config,
    }
  }

  actions.setWebpackConfig(config)
}
