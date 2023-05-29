# vue-use-wasm

- 使用wasm-pack publish发布到 npm上

```shell
# cd hello-wasm

wasm-pack publish
```

- 引入

```shell
pnpm add test-wasm-tool
```

- 使用

```js
import { to_string, add } from 'test-wasm-tool'

console.log(to_string(5) + to_string(1))

console.log(add(1, 2))

```

