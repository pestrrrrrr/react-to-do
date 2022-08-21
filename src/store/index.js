import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    taskView: 'To do'
  },
  getters: {
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)
      console.log(state.tasks)
    },
    deleteTask (state, index) {
      state.tasks.splice(index, 1)
    },
    changeView (state, view) {
      state.taskView = view
    }
  },
  actions: {
  },
  modules: {
  }
})
