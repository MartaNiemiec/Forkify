const path = require('path'); //This is to include a built in node module, called path, and then put it in the path variable.

// adjusting an object and export it using node.js syntax
module.exports = {
  // entry point = is where webpack will start the bundling. We can specify one or more files
  entry: './src/js/index.js',
  // output property = tells webpack exactly where to save a bundle file
  output: {
    path: path.resolve(__dirname, 'dist/js'),  // path.resolve is a method which is available to us through 'path' variable package that we included on line1, we will then join the current absolute path '__dirname' with the one that we want our bundle to be in so 'dist/js'. And so webpack will output our file to 'dist' directory with bundle.js file name. 
    filename: 'bundle.js'
  }
};