const path = require("path");
const env = process.env.NODE_ENV;

/** @type import('webpack').Configuration */
module.exports = {
  mode: env || "development",
  context: path.resolve(__dirname, "./public/"),
  entry: {
    index: [path.resolve(__dirname, "src/index.tsx")],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "light-ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
    alias: {
      src: path.resolve(__dirname, "./src"),
      models: path.resolve(__dirname, "./models"),
    },
  },
  performance: { hints: false },
  node: { fs: "empty" },
};
