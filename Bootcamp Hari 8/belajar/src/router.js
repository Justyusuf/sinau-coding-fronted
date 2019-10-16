import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/Home.vue"
import Data from "./components/Data.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    }, {
        path: '/hai',
        component: Data
    }


];

const router = new VueRouter({
    routes: routes
});

export default router;