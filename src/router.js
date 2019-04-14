import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Order from './views/Order.vue'
import Newsletter from './views/Newsletter.vue'
import Login from './views/Login.vue'

import store from './store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: function (to, from, next) {
                if (store.state.user === null) next({ path: '/login' })
                next()
            }
        },
        {
            path: '/zamowienia',
            name: 'order',
            component: Order,
            beforeEnter: function (to, from, next) {
                if (store.state.user === null) next({ path: '/login' })
                next()
            }
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: Newsletter,
            beforeEnter: function (to, from, next) {
                if (store.state.user === null) next({ path: '/login' })
                next()
            }
        }
    ]
})
