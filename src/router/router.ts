import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import UserSingleView from '../views/UserSingleView.vue'
import UserView from '../views/UserView.vue'
import GraphDb from '../views/Touffeteur/GraphDb.vue'

const routes = [
    { path:'/', component: HomeView },
    { path:'/usersingleview', component: UserSingleView },
    { path: '/userview', component: UserView},
    { path: '/graphdb', component: GraphDb}
]

export const router = createRouter({
    history: createWebHistory('/'),routes
})