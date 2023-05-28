import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles.css'

import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupAssets, setupScrollbarStyle, setupVxeTable } from '@/plugins'

async function bootstrap() {
  const app = createApp(App)
  app.use(Antd)
  setupVxeTable(app)
  setupAssets()
  setupScrollbarStyle()
  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}

bootstrap()
