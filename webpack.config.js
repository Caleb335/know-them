const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
    },
    
    // to bundle/resolve jsx modules
    resolve: { 
        modules: [
            'node_modules', 'src'
        ], 
        extensions: ['.jsx', '.js', '.scss'] 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:  /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: "file-loader",                     
                    options: {
                        limit: 1000,
                        name: "[name].[contenthash].[ext]"
                    }

                }                    
            },
            // add sourcemap as regards chrome err
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            }
        ]
    },
    // configure dev server so it stores every route
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'src'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
}