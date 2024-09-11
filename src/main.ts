import { createApp } from 'vue'
import App from '@/App.vue'
import * as plugins from '@/plugins'

const app = createApp(App)
app.use(plugins)
app.mount('#app')
