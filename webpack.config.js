const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: "none",
   entry: {
     index: './src/index.js',
   },
   module: {
     rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     ],
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
      template: "./src/index.html"
    }),
  ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };