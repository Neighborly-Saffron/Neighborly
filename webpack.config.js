const path = require('path');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './Client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'public' + '/dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'dist/'
  },
  module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
		],
	},
	plugins: [
    new Dotenv({systemvars: true}),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /.js$|.css$|.jsx/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // new BundleAnalyzerPlugin()
  ],
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: 'eval-cheap-module-source-map',
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  }
}