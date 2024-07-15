import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/home',
        component: HomeView,
        children: [
            {
                path: 'user',
                name: 'User',
                component: () => import('../views/UserView.vue'),
            },
            {
                path: 'data',
                name: 'Data',
                component: () => import('../views/DataView.vue'),
            },
            {
                path: 'users',
                name: 'Users',
                component: () => import('../views/UsersView.vue'),
            },
            {
                path: 'all',
                name: 'All',
                component: () => import('../views/AllDataView.vue'),
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../views/LoginView.vue'),
    },
    {
        path: '/register',
        component: () => import('../views/RegisterView.vue'),
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
  

export default router