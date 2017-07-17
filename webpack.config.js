var webpack = require("webpack");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/js",
        publicPath: __dirname + "/dist/js"
    }, devServer: {
        inline: true,
        contentBase: __dirname + "/dist/",
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
            }
        ]
    }
}







