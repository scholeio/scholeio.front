const path = require("path");

module.exports = {
  entry: "./src/ts/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
    filename: "./bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader"
      }
    ]
  }
};
