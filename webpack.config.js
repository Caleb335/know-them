const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: "/build/"
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
                test: /\.(png|svg|jpeg|gif|jpg)$/i,
                use: ["file-loader"]
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
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}