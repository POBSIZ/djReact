const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


const port = 3000;

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        // './src/index.tsx',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            components: __dirname + 'src/components'
        },
        extensions: ['.js', '.tsx'],
    },
    module: {
        rules: [
            // { // BABEL LOADER
            //     test: /\.(js)$/,
            //     exclude: /node_modules/,
            //     use: ['babel-loader']
            // },
            { // BABEL & TS LOADER
                test: /\.(ts|tsx|js)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            { // CSS LOADER
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { // URL LOADER
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new ForkTsCheckerWebpackPlugin({}),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
};