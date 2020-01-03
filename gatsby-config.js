const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/src`],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    "gatsby-transformer-yaml",
    {
      resolve: "@vai0/gatsby-plugin-netlify-cms",
      htmlTitle: "Bifrost Content Manager",
      options: {
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: "Bifrost Admin",
        customizeWebpackConfig: (config, { plugins }) => {
          config.resolve = {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
          }

          config.plugins.push(
            plugins.define({
              PRERENDER_NAVBAR: JSON.stringify(false),
            })
          )

          config.module.rules.push({
            test: /gatsby\/cache-dir.*\.js$/,
            loader: require.resolve("babel-loader"),
            options: {
              presets: [
                require.resolve("@babel/preset-react"),
                [
                  require.resolve("@babel/preset-env"),
                  {
                    shippedProposals: true,
                    useBuiltIns: "entry",
                    corejs: 2,
                  },
                ],
              ],
              plugins: [
                require.resolve("@babel/plugin-proposal-class-properties"),
              ],
            },
          })

          config.devtool = false
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "standard-lp",
        path: `${__dirname}/content/standard-lp`,
      },
    },
    {
      resolve: "gatsby-plugin-polyfill-io",
      options: {
        features: [
          "Array.from",
          "String.prototype.startsWith",
          "Object.entries",
          "Array.prototype.findIndex",
          "Array.prototype.includes",
          "Set",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.memsql.com",
        sitemap: "https://www.memsql.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: ["/assets/"] }],
      },
    },
  ],
}
