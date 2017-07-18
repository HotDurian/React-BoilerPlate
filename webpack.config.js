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
            }
        ]
    }
}







