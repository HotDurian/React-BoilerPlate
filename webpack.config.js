var webpack = require("webpack");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
        publicPath: "js"
    }, devServer: {
        inline: true,
        contentBase: "./dist/",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["latest",
                            "env",
                            "react",
                            "es2015"]
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                use: ['json-loader']
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=2000000'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}







