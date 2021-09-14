/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

webpack: (config) => {
//worker
config.module.rules.unshift({
  test: /pdf\.worker\.(min\.)?js/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[contenthash].[ext]",
        publicPath: "_next/static/worker",
        outputPath: "static/worker"
      }
    }
  ]
});

return config;
}}
;