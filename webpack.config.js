const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader',MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }, { inject: false }), new MiniCssExtractPlugin()],
    devServer: {
        port: 9000,
        stats: 'errors-only',
        open: true,
      }
};