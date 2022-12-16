import _ from "lodash";

export const superAdd = (a, b) => {
  console.log("来自app1的superAdd", _.add(a, b));
};
