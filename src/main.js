import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//router
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
