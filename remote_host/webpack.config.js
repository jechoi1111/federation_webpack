const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced/webpack').ModuleFederationPlugin
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            excludeChunks: ['remote_host']
        }),
        new ExternalTemplateRemotesPlugin(),
        new ModuleFederationPlugin({
        name: 'remote_host',
        remotes: {
            webpack_remote: `webpack_remote@http://localhost:3000/remoteEntry.js`
        },
        filename: 'remoteEntry.js',
        exposes: {
            './TestPage': './src/pages/TestPage.tsx'
        },
        shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
            }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true,
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': '*',
        },
        port: 2000,
        hot: true
    }
}