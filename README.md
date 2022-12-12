# webpack5-starter

## 1. 使用 Babel 处理 ES6

- 基本处理

```javascript
{
    test: /\.js$/,
    use: {
        loader: 'bable-loader',
        options: {
            preset: ['@babel/preset-env']
        }
    }
}
```

- 处理 Promise 等高级特性

```javascript
preset: [
  [
    "@babel/preset-env",
    {
      /**
       * false: 默认值，无视浏览器兼容配置，引入所有 polyfill
       * entry: 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
       * usage: 根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
       */
      useBuiltIns: "false | entry | usage",
    },
  ],
];
```

- 支持 class 装饰器写法

```javascript
plugins: [
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  ["@babel/plugin-proposal-class-properties", { loose: true }],
  ["@babel/plugin-proposal-private-methods", { loose: true }],
  ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
];
```

## 2. 处理 ts

- 借助 'ts-loader' 或 '@babel/preset-typescript'
