import _ from "lodash";

(async () => {
  console.log("app2自己的add", _.add(1, 2));
  const { sayHello } = await import("RemoteApp/foo");
  sayHello();
  const { superAdd } = await import("RemoteApp/utils");
  superAdd(10, 20);
})();
