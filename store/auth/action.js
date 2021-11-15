export default {
  login ({ commit }) {
    // POST /auth/login , axios.post(url, payload).then()
    // if success then set response.data
    // axios.post('http://localhost:8888/api/login', payload).then( (res) => {
    //   console.log('res : ', res)
    //   commit('setCurrentUser', response.data.data)
    // }
    // )
    commit('setCurrentUser', response.data)
  }
}