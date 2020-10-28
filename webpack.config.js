const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bundle.js',
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['@babel/preset-env']
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        clientLogLevel: 'error',
        stats: 'errors-only',
        open: true,
      }
};