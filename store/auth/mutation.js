export default {
  setCurrentUser (state, payload) {
    state.currentUser = payload
    state.isloggedIn = true
  },
  setBranchCode (state, branchCode) {
    state.branchCode = branchCode
  }
}