var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
  mode:"development",  
  entry:"./js/app.js",
  output: { filename: "out.js",
    path: path.resolve(__dirname, "dist") },
  watch: true,
  module: {
    rules: [{
      test: /\.js$/, exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'sass-loader'
      ],
  }]
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
}