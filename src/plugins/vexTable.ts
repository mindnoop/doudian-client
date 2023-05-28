import type { App } from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

function setupVxeTable(app: App) {
  app.use(VXETable)
}

export default setupVxeTable
