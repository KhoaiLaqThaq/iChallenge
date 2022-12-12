import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import account, { IAccountState } from '@/store/modules/Account'
import modulePost, { IPostState } from '@/store/modules/ModulePost'
import moduleSidebar from '@/store/modules/ModuleSidebar'
import moduleExam, { IExamState } from '@/store/modules/ModuleExam'

export interface State {
  count: Number,
  loading: Boolean,
  error: String
  account: IAccountState
  modulePost: IPostState,
  moduleSidebar: any,
  moduleExam: IExamState,
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    count: 0,
    loading: false,
    error: ''
  },
  getters: {},
  mutations: {
    setLoading(state, value) {
      state.loading = value
    },
    setError(state, value) {
      state.error = value
    }
  },
  actions: {},
  modules: {
    account,
    modulePost,
    moduleSidebar,
    moduleExam
  },
})

export function useStore () {
  return baseUseStore(key)
}
