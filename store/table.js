import table from '../static/table'
export const state = ()=>({
  api:[]
})
export const actions = {
  fetchApi({commit,dispatch}){
    // const api = table
    commit('apiFetch', table)
  }
}
export const mutations = {
  apiFetch(state,api){
    state.api = api
  }
}
export const getters = {
  api: s => s.api
}
