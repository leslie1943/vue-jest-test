# Config
- 在 `tsconfig.json`里配置
```json
{
   "types": [
      "webpack-env",
      "jest",
      "cypress" // important 🚀
    ],
}
// "../../node_modules/cypress"
```

### 在 tests/e2e 下的 tsconfig 中
- `../../node_modules/cypress` 要配置到 `include`中, 否则 不识别 `cy`
```json
{
  "compilerOptions": {
    "target": "es5",
     "lib": ["esnext", "dom"],
  },
  "types": ["cypress"], 
  "include": ["**/*.ts","plugins/index.ts", "support/index.ts", "../../node_modules/cypress"]
}
```
