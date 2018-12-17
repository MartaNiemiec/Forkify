const path = require('path'); //This is to include a built in node module, called path, and then put it in the path variable.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// adjusting an object and export it using node.js syntax
module.exports = {
  // entry point = is where webpack will start the bundling. We can specify one or more files
  entry: ['babel-polyfill', './src/js/index.js'],

  // output property = tells webpack exactly where to save a bundle file
  output: {
    path: path.resolve(__dirname, 'dist'),  // path.resolve is a method which is available to us through 'path' variable package that we included on line1, we will then join the current absolute path '__dirname' with the one that we want our bundle to be in so 'dist'. And so webpack will output our file to 'dist' directory with bundle.js file name. 
    filename: 'js/bundle.js'
    },
  devServer: {
    //content base = here we will specify the folder from which webpack should serve our files. And in this case that is the distribution folder = "dist" (dist is fof files for the client and "src" folder is only for development purposes)
    contentBase: './dist'
  },  

  // plugins  receives an ARRAY of all the plugins that we are using
  plugins: [
    // HtmlWebpackPlugin is like a function constructor 
    // each time that we are bundling our JavaScript files, we also want to copy our source html into the distribution folder and include the script to our JavaScript bundler
    new HtmlWebpackPlugin({
      filename: 'index.html', // creating file
      template: './src/index.html'  // template file,starting html file
    })
  ],
  module: {
    rules: [
        {
          test: /\.js$/,  //regular expression, test will look for all the files and test if thej end in ".js"
          exclude: /node_modules/,  // exclude everything which is inside node_module folder
          use: {
            loader: 'babel-loader'
          }
        }
    ]
  }
};