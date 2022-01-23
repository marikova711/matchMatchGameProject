const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
        {
            test: /\.js$/i,
            use: ["babel-loader"]
        },
        {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },

           {
            test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
            type: 'asset/resource',
        },
    ]

 },
  devServer: {
    static: {
      directory: path.resolve(__dirname,'public') 
    },
     open: true,
     liveReload: true,
     port: 8080,
     historyApiFallback: true
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/images'),
      redux_main: path.resolve(__dirname, 'src/redux'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  }
};