var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
      "./js/scripts.js"
    ],
    output: {
        path: __dirname + "/",
        filename: "scripts.min.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            // ! used to 'pipe' or combine
            loader: 'style-loader!css-loader!sass-loader'
        },
      {
        test:/\.html$/,
        loader: "raw-loader"
      }]
    },
    devServer: {
      contentBase: './',
      inline: true
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};
