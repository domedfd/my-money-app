const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  outpout: {
    path: __dirname + "/public",
    filename: "./app.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
      jquery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      bootstrap: "modules/admi-lte/bootstrap/js/bootstrap.js"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquety",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("app.css")
  ],
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loader: "bable-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-load", "css-loader")
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: "file"
      }
    ]
  }
};