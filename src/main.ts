import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible/index.js";
import router from './router'
import store from './store/index'

let instance = createApp(App)
instance.use(router)
instance.use(store)
instance.mount('#app')