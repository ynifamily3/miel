const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    script: "./src/script/index.js",
  },
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  devServer: {
    port: 7777,
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].bundle.js",
    publicPath: path.join("/"),
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              useRelativePath: true,
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[name].[chunkhash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      inject: true,
      filename: path.join(__dirname, "./dist/index.html"),
    }),
  ],
};
