const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");

module.exports = merge(baseConfig, {
  entry: "./asset/index",
  output: {
    path: path.resolve(__dirname, "./asset/build"),
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        // type: "asset",
        // parser: {
        // 用于限定文件大小阈值，对标 url-loader 的 limit 属性
        //   dataUrlCondition: {
        //     // 6kb以下的图片被转换成base64
        //     maxSize: 6 * 1024, // 6kb
        //   },
        // },
        type: "asset/resource",
        // 图片压缩
        use: {
          loader: "image-webpack-loader",
          options: {
            /**
             * mozjpeg：用于压缩 JPG(JPEG) 图片；
             * optipng：用于压缩 PNG 图片；
             * pngquant：同样用于压缩 PNG 图片；
             * svgo：用于压缩 SVG 图片；
             * gifsicle：用于压缩 Gif 图；
             * webp：用于将 JPG/PNG 图压缩并转化为 WebP 图片格式
             */
            optipng: {
              quality: 80,
            },
            // 图像压缩是一种非常耗时的操作，建议只在生产环境下开启
            disable: process.env.NODE_ENV === "development",
          },
        },
        // 响应式图片
        oneOf: [
          {
            type: "javascript/auto",
            resourceQuery: /sizes?/,
            use: [
              {
                loader: "responsive-loader",
                options: {
                  adapter: require("responsive-loader/sharp"),
                },
              },
            ],
          },
          {
            type: "asset/resource",
          },
        ],
      },
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new SpritesmithPlugin({
      // 将 src.cwd 目录内（asset/icons）所有匹配 src.glob 规则（.png）的图片
      // 合并成一张大图并保存到 target.image 指定的文件路径(asset/assets/sprite.png)
      // 同时生成兼容 SASS/LESS/Stylus 预处理器的 mixins 代码(asset/assets/sprite.less)
      src: {
        cwd: path.resolve(__dirname, "asset/icons"),
        glob: "*.png",
      },
      target: {
        image: path.resolve(__dirname, "asset/assets/sprite.png"),
        css: path.resolve(__dirname, "asset/assets/sprite.less"),
      },
    }),
  ],
});
