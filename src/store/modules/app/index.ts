import { defineStore } from 'pinia'
import type { AppState } from './helper'
import { getLocalSetting } from './helper'
import { store } from '@/store'

export const useAppStore = defineStore('app-store', {
  state: (): AppState => getLocalSetting(),
  actions: {

  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
