module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "formik/es6": "formik/dist/formik.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
        exclude: /node_modules\/(?!formik)/,
      },
    ],
  },
};
