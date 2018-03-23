const path = require('path');


module.exports = {
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.join(__dirname, '/node_modules'),
        include: path.join(__dirname, '/src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, '/node_modules'),
        include: path.join(__dirname, '/src'),
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
