const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  return {   
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }]
      },
      plugins: [
        CSSExtract
      ],
      // source-map will only load whend dev tools are opened in browser
      // inline-source-map is larger and is not suitable for production
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        //Tell dev-server we're handling router via client-side
        historyApiFallback: true
      }    
  };
}


