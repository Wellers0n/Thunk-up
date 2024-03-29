const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "cheap-eval-source-map",
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff"
          }
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff2"
          }
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff2"
          }
        }
      },
      {
        test: /\.(otf)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/octet-stream"
          }
        }
      },
      {
        test: /\.svg(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name].[ext]",
            mimetype: "image/svg+xml"
          }
        }
      },
      {
        test: /\.(png|jpg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv()
  ]
};
