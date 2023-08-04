import { createApp } from 'vue'

import App from '@/App.vue'
import plugins from '@/plugins'
import '@/styles/index.less'

const app = createApp(App)
app.use(plugins)
app.mount('#app')
