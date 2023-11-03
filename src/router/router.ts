import { createRouter, createWebHistory } from 'vue-router';
import GraphDb from '../views/Touffeteur/GraphDb.vue'
import EfficiencyVue from '../views/Touffeteur/Efficiency.vue';
import PerformanceVue from '../views/Touffeteur/Performance.vue';

const routes = [
    // { path:'/', component: HomeView },
    { path: '/efficiency', component: EfficiencyVue},
    { path: '/graphdb', component: GraphDb},
    { path: '/performance', component: PerformanceVue}
]

export const router = createRouter({
    history: createWebHistory('/'),routes
})