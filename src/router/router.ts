import { createRouter, createWebHistory } from 'vue-router';
import GraphDb from '../views/Touffeteur/GraphDb.vue'
import EfficiencyVue from '../views/Touffeteur/Efficiency.vue';
import PerformanceVue from '../views/Touffeteur/Performance.vue';
import StandardVue from '../views/Touffeteur/Standard.vue';
import RejetVue from '../views/Finition/Rejets.vue';
import TufftingTimeProdVue from '../views/Touffeteur/TufftingTimeProd.vue'

const routes = [
    // { path:'/', component: HomeView },
    { path: '/efficiency', component: EfficiencyVue},
    { path: '/graphdb', component: GraphDb},
    { path: '/performance', component: PerformanceVue},
    { path: '/standard', component: StandardVue},
    { path: '/rejet', component: RejetVue},
    { path: '/timeprod', component: TufftingTimeProdVue}
]

export const router = createRouter({
    history: createWebHistory('/'),routes
})