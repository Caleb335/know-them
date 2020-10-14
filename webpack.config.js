const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const WriteFilePlugin = require("write-file-webpack-plugin")

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
                    {
                      loader:"style-loader",
                    },
                    {
                      loader: "css-loader",
                      options: {
                          sourceMap: true
                      }
                    },
                    {
                       loader: "sass-loader",
                       options: {
                           sourceMap: true
                       }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpeg|gif|jpg)$/i,
                loader: "file-loader",
                options: {
                    name: 'assets/images/[name].[ext]',
                    limit: 1000
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
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new WriteFilePlugin({
            test: /\.(png|jpeg|svg|gif|jpg)$/,
            useHashIndex: true
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}