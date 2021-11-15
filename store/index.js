export const state = () => ({
  myState: 0,
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}