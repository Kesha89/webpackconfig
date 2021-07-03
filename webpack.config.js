 const path = require('path');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
 
 

    module.exports = {
      entry: {
        app: './src/index.js'
      },

     output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
      },
      devServer: {
        overlay: true
      },
      module: {

        rules: [
           
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
          },
            
          {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']      
          },

          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader',
            
          }

          
  ]
},

plugins: [
  new UglifyJsPlugin(),
  new MiniCssExtractPlugin({
      filename: "[name].css",
  }),
  

  ],
  optimization: {
    minimizer:[new UglifyJsPlugin()],
    minimizer:[ new minify({})]
  },
  
  
  
}

