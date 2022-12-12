// 接口
interface Feature {
  id: number;
  name: string;
}

// 泛型接口
interface Result<T> {
  ok: 0 | 1;
  data: T[];
}

// 泛型函数
function getFeature<T>(data: T[]): Result<T> {
  return {
    ok: 1,
    data,
  };
}

// 给泛型赋值
// 给泛型<T>赋值<Feature>后，表示dataMock必须符合 Feature[]
const dataMock = [
  { id: 1, name: "类型注解", version: "2.0" },
  { id: 2, name: "编译型语 " },
];
const features = getFeature<Feature>(dataMock).data;
console.log(features);
