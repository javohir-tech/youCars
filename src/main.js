import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//antd
import  Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

//router
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
