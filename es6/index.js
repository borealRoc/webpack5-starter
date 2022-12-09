const a = 1;
const arr = [1, 2, 3];
arr.map((item) => {
  console.log(item);
});
// Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OOOOOKKKKK");
  }, 1000);
});
p.then(
  (result) => {
    console.log(result);
  },
  (reason) => {
    console.log(reason);
  }
);
// 装饰器
@log("Hello")
class MyClass {}
function log(text) {
  return function (target) {
    target.prototype.logger = () => console.log(`${text}, ${target.name}`);
  };
}
const mc = new MyClass();
mc.logger();
