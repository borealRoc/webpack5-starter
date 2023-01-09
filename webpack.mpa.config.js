const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const setMPA = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./mpa/src/*/index.js"));

  //   console.log("entryFiles", entryFiles);
  //   entryFiles [
  //     'E:/study/webpack5-starter/mpa/src/about/index.js',
  //     'E:/study/webpack5-starter/mpa/src/home/index.js',
  //     'E:/study/webpack5-starter/mpa/src/login/index.js'
  //   ]

  entryFiles.map((item) => {
    const match = item.match(/mpa\/src\/(.*)\/index\.js$/);
    const pageName = match && match[1];

    console.log("pageName", pageName);
    // pageName about
    // pageName home
    // pageName login

    // 打包后的文件不带 pageName 嵌套
    entry[pageName] = item;
    htmlwebpackplugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `./mpa/src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    );

    // 打包后的文件带有 pageName文件夹 嵌套
    // const nestedPageName = pageName + "/" + pageName;
    // entry[nestedPageName] = item;
    // htmlwebpackplugins.push(
    //   new HtmlWebpackPlugin({
    //     template: path.join(
    //       __dirname,
    //       `./webpack-mpa-src/${pageName}/index.html`
    //     ),
    //     filename: `${nestedPageName}.html`,
    //     chunks: [pageName],
    //   })
    // );
  });
  return {
    entry,
    htmlwebpackplugins,
  };
};

const { entry, htmlwebpackplugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./mpa/build"),
    filename: "[name][chunkhash:8].js",
  },
  mode: "development",
  plugins: [new CleanWebpackPlugin(), ...htmlwebpackplugins],
};
