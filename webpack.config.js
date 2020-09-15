const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './client/main.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 8000
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
         },
         {
            test: /\.s?[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },

      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}