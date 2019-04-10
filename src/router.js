import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Order from './views/Order.vue'
import Newsletter from './views/Newsletter.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/zamowienia',
            name: 'order',
            component: Order
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: Newsletter
        }
    ]
})
