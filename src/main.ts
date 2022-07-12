import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import './utils/rem'
import './styles/index.scss'
import './utils/swiper'
import 'vant/es/toast/style';

const app = createApp(App)

app.use(router)

app.mount('#app')
