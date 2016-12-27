import path from 'path';
import validate from 'webpack-validator';

export default validate({
    context: path.join(__dirname, '..'),
    target: 'web',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },

            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            },

            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },

            {
                test: /\.(png|gif|jpg|jpeg)$/i,
                loader: 'url?limit=1024&name=images/[name].[hash].[ext]'
            },

            {
                test: /\.json$/i,
                loader: 'json'
            }
        ]
    },

    output: {
        path: path.join(__dirname, '..', 'public'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    plugins: [],

    externals: []
});
