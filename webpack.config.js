var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js",
    publicPath: "js"
  },
  devServer: {
    inline: true,
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["latest", "env", "react", "es2015"]
          }
        }
      }, {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: ['json-loader']
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=2000000'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
