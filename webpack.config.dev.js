import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //enables displaying debug info
  devtool: 'inline-source-map', 
  noInfo: false, // webpack will display a list of all files it's bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //bundle code in way that browser (not node) can understand
  output: { // this doesn't actually build files, that's in prod
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { // tell server where code is
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(), // replace modules w/o full broswer refresh
    new webpack.NoErrorsPlugin() // error control for hot reloading
  ],
  module: { // tell webpack types of file to handle
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, // this and below are for handling bootstrap
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
