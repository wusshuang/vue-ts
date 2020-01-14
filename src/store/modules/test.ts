import { TestState } from '@/types/store/test.type'

const state: TestState = {
  testMessage: 'this is a test message !'
}

const getters = {
  getTestMessage(state: TestState, getters: any, rootState: any, rootGetters: any) {
    return state.testMessage
  }
}

const mutations = {
  setTestMessage(state: any, value: string) {
    state.testMessage = value
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
