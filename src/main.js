import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { to_string, add } from 'test-wasm-tool'

console.log(to_string(5) + to_string(1))

console.log(add(1, 2))

createApp(App).mount('#app')
