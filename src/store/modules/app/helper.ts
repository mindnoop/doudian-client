import { ss } from '@/utils/storage'

const LOCAL_NAME = 'APP_SETTING'

export type Theme = 'light' | 'dark' | 'auto'

export interface AppState {
  theme: Theme
}

export function defaultSetting(): AppState {
  return {
    theme: 'light',
  }
}

export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return {
    ...defaultSetting(),
    ...localSetting,
  }
}

export function setLocalSetting(setting: AppState): void {
  ss.set(LOCAL_NAME, setting)
}
