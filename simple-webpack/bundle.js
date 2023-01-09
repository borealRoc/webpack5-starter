const opts = require("./webpack.config.js");
const Compiler = require("./lib/compiler.js");
new Compiler(opts).run();