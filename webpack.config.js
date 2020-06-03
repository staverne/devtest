const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
  entry: {
    main: './main/main.js',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve  (__dirname, 'dist/'),
  },
   module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    allowTsInNodeModules: true,
                    //transpileOnly: true,
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(html|html.fr|html.en)$/,
                loader: "html-loader"
            },
            {
              test: /\.(jpe?g|png|gif)$/i,
              loader:"file-loader",
              options: {}
            } // will copy images or integrate as base64 if small

        ]
   },
   resolve: {
     alias: {
        'three/OrbitControls': path.join(__dirname, './node_modules/three/examples/js/controls/OrbitControls.js'),
        'three/STLLoader': path.join(__dirname, './node_modules/three/examples/js/loaders/STLLoader.js'),
        'cropperjs$': 'cropperjs/dist/cropper.esm.js'
     },
     extensions: [".tsx", ".ts", ".js", ".less", "css", ".scss"]
   },
   plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.ProvidePlugin({
           moment: "moment",
           "window.moment": "moment"
        }),
       new webpack.ProvidePlugin({
           paper: 'paper'
       }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
       new webpack.ProvidePlugin({
           'THREE': 'three'
       }),
      new MiniCssExtractPlugin({
        filename: "[name]/dist/[name]-min.css"
      }),
      new LiveReloadPlugin()
   ],
   optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    // We no not want to minimize our code.
    minimize: false,
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  stats: {
    modules: false,
  },
}
