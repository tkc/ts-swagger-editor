const webpack = require("webpack");
const baseConfig = require("./webpack.config");
const path = require("path");

/** @type import('webpack').Configuration */
module.exports = {
  ...baseConfig,
  context: path.resolve(__dirname, "./public"),
  entry: {
    index: [path.resolve(__dirname, "src/index.tsx")],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/index.html" }],
    },
    disableHostCheck: true,
    index: "index.html",
    port: 4000,
  },
  plugins: [],
};
