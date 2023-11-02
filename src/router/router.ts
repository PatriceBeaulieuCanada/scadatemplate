import { createRouter, createWebHistory } from 'vue-router';
import GraphDb from '../views/Touffeteur/GraphDb.vue'
import EfficiencyVue from '@/views/Touffeteur/Efficiency.vue';

const routes = [
    // { path:'/', component: HomeView },
    // { path:'/usersingleview', component: UserSingleView },
    { path: '/efficiency', component: EfficiencyVue},
    { path: '/graphdb', component: GraphDb}
]

export const router = createRouter({
    history: createWebHistory('/'),routes
})