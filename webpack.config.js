const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: "development",
  entry: {
    main: "./main.js",
  },
  output: {
    // path: resolve("dist"),
    path: path.resolve(__dirname, "dist"),
    filename: "icon.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      // {
      //   test: "/.tsx?$/",
      //   use: "ts-loader",
      //   include: [],
      // },
    ],
  },
  plugins: [
    new MiniCss({
      filename: "css/[name].css",
    }),

    new CleanWebpackPlugin({}),
  ],

  // resolve: {
  //   extensions: [".ts", ".tsx", ".js"],
  // },

  devServer: {
    host: "localhost",
    stats: "errors-only",
    port: 8081,
    open: true,
  },
};
