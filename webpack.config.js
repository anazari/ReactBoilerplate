var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "app");
var OUTPUT = path.resolve(__dirname, "public");
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
    }]
  }
};
 
module.exports = config;