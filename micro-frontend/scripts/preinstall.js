if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.log("process.env.npm_execpath", process.env.npm_execpath);
  console.log("听我劝, 用pnpm来安装");
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
