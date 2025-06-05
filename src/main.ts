import { createApp } from 'vue'
import App from './App.vue'
import ViteComp from './index'

const app = createApp(App)
app.use(ViteComp)
app.mount('#app') 