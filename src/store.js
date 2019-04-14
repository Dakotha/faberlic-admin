import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
Vue.use(Router)

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        login (state, user) {
            state.user = user
        },
        logout (state) {
            state.user = null
        }
    }
})
