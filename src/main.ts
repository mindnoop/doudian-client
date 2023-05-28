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
  disableRightClick()
}

function disableRightClick() {
  document.onkeydown = function (event: any) {
    const winEvent: any = window.event
    if (winEvent && winEvent.keyCode === 123) {
      event.keyCode = 0
      event.returnValue = false
    }
    if (winEvent && winEvent.keyCode === 13)
      winEvent.keyCode = 505
  }

  // 屏蔽右键菜单
  document.oncontextmenu = function (event: any) {
    if (window.event)
      event = window.event

    try {
      const the = event.srcElement
      if (!((the.tagName === 'INPUT' && the.type.toLowerCase() === 'text') || the.tagName === 'TEXTAREA'))
        return false

      return true
    }
    catch (e) {
      return false
    }
  }
}

bootstrap()
