import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
//PINIA
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

//antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//router
import router from './router';

//pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Antd);

app.mount('#app');
