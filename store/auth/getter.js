export default {
  isAuthenticated: state => state.loggedIn,
  getCurrentUser: state => state.user
}