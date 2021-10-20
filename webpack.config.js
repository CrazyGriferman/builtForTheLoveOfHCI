const path = require("path");

module.exports = {
  resolve: {
    extensions: ["js", "ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/components"),
      "@components": path.resolve(__dirname, "src/components"),
      // ...etc
    },
  },
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve("url-loader"),
  options: {
    name: "static/media/[name].[hash:8].[ext]",
    esModule: false,
  },
};
