import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import account, { IAccountState } from '@/store/modules/Account'
import modulePost, { IPostState } from '@/store/modules/ModulePost'
import moduleSidebar from '@/store/modules/ModuleSidebar'

export interface State {
  count: number,
  account: IAccountState
  modulePost: IPostState,
  moduleSidebar: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    count: 0
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    account,
    modulePost,
    moduleSidebar
  },
})

export function useStore () {
  return baseUseStore(key)
}
