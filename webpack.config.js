const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const debug = argv.mode === "development";
  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    ],

    devtool: debug ? "inline-cheap-source-map" : false,
    target: "node",

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
        },
      ],
    },

    resolve: {
      extensions: [".ts", ".js"],
    },
  };
};
