<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const allAlign = ref<VxeTablePropTypes.Align>(null)

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
])

onMounted(() => {
  // initUpdate()
})

// eslint-disable-next-line unused-imports/no-unused-vars
async function initUpdate() {
  try {
    const { shouldUpdate, manifest } = await checkUpdate()
    globalThis.console.log('888', shouldUpdate, manifest)
    if (shouldUpdate) {
    // You could show a dialog asking the user if they want to install the update here.
      globalThis.console.log(`Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`)
      // Install the update. This will also restart the app on Windows!
      await installUpdate()
      // On macOS and Linux you will need to restart the app manually.
      // You could use this step to display another confirmation dialog.
      await relaunch()
    }
  }
  catch (error) {
    console.error('err', error)
  }
}
</script>

<template>
  <div>
    <div>1.0.5</div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="allAlign = 'left'">
          居左0
        </vxe-button>
        <vxe-button @click="allAlign = 'center'">
          居中1
        </vxe-button>
        <vxe-button @click="allAlign = 'right'">
          居右2
        </vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table :align="allAlign" :data="tableData">
      <vxe-column type="seq" width="60" />
      <vxe-column field="name" title="Name" />
      <vxe-column field="sex" title="Sex" />
      <vxe-column field="age" title="Age" />
    </vxe-table>
  </div>
</template>
