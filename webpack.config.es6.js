'use strict';

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const production = process.env.NODE_ENV === 'production';
const nodeEnv = production ? 'production' : 'development';

console.log(`Mode: \u001b[3${production ? '1' : '3'}m${nodeEnv}\u001b[0m`);

const buildPath = path.resolve(__dirname, `./${nodeEnv}/build`);
const sourcePath = path.resolve(__dirname, './development/source');
const modulesPath = path.resolve(__dirname, './node_modules');


const stats = {

    hash: false,
    timings: true,
    publicPath: false,

    assets: true,
    children: false,
    chunks: false,
    modules: false,
    source: false,
    version: false,

    reasons: !production,
    warnings: true,
    errors: true,
    errorDetails: !production,

    colors: { green: '\u001b[32m' }

};

const entry = {
    frameworks: ['react', 'react-dom'],
    app: './app'
}

const plugins = [

    new webpack.NoErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'frameworks',
        chunks: ['app'],
        filename: `[name].js`
    }),

    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    new webpack.NamedModulesPlugin(),

    new ExtractTextPlugin({
        filename: "styles.css",
        disable: false,
        allChunks: true
    }),


];

if (production) {
    plugins.push(

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: { comments: false },
        })

    );
} else {

    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );

    entry['dev-server'] = [
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server'
    ];

}

module.exports = {

    plugins,
    entry,
    stats,

    context: sourcePath,
    devtool: (production ? undefined : 'source-map'),

    output: {
        filename: `[name].js`,
        library: (production ? undefined : '[name]'),
        path: buildPath,
        publicPath: '/'
    },


    module: {
        rules: [{

            test: /\.s?css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader'/*, 'sass-loader'*/],
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
            })

        }/*,{

            test: /\.styl$/,
            use: [
                'style',
                'css',
                {
                    loader: 'stylus',
                    options: {
                        use: [ require('nib')() ],
                        import: ['~nib/lib/nib/index.styl'],
                        sourceMap: true
                    }
                }
            ]

        }*/,{

            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ 'react-hot', 'babel'],
            options:{
                presets: ['react', 'es2015', 'stage-0' ],
                sourceMap: true
            }

        },{

            test: /\.(html|svg|ttf|woff|woff2|xml|jpg|jpeg|png|gif|bmp|ico|eot|txt|pdf|doc|docx|rtf)$/,
            exclude: /node_modules/,
            use: 'file',
            query: { name: '[name].[ext]' }

        }]
    },

    resolve: {
        extensions: [ '.js', '.jsx', '.css', '.scss', '.sass' ],  /*'.webpack-loader.js', '.web-loader.js', '.loader.js', */
        modules: [ sourcePath, modulesPath ]
    },

    resolveLoader: {
        extensions: [ '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js' ],
        moduleExtensions: ['-loader', '-loaders']
    },


    devServer: {
        contentBase: buildPath,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: production ? 80 : 3000,
        compress: production,
        inline: !production,
        hot: !production,
        stats,
        proxy: [{
            path: '/api/**',
            changeOrigin: true,
            target: 'http://jsonplaceholder.typicode.com/',
            pathRewrite: {'^/api': ''}
        }]
    }

};
