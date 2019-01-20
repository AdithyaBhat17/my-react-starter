const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                // add this to add modularity to your css classnames
                // options: {
                //     modules: true,
                //     importLoaders: 1,
                //     localIdentName: "[name]_[local]_[hash:base64]",
                //     sourceMap: true,
                //     minimize: true
                // }
            },
        ]
        },
        {
            test: /\.(png|jpg|jpeg)$/,
            use: ["file-loader"]
        }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}