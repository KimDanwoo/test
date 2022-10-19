import _ from 'lodash'

const initState = {
  name: 'kim ',
}

export const state = () => _.cloneDeep(initState)

export const mutations = {
  // state 초기화
  initState(state) {
    Object.assign(state, _.cloneDeep(initState))
  },
}
