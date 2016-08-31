import webpack from 'webpack';
import path from 'path';

module.exports = {
    devServer: {
        contentBase: "./dist"
    },
    entry: {
        bundle: `${__dirname}/src/index.js`,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]

    }
};