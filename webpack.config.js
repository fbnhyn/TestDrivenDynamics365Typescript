const path = require("path");
const glob = require("glob");

const entries = glob
  .sync("./ts/src/**/*.ts*")
  .filter((filename) => {
    return filename.includes("form") || filename.includes("view") || filename.includes("button");
  })

console.log(entries);

module.exports = {
  mode: "development",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "./webresources"),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};