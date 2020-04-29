import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/about',
            component: About
        },

        {
            path: '/contact',
            component: Contact
        },
    ]
})