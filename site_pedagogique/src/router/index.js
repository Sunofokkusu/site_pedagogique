import { createRouter, createWebHistory } from 'vue-router';
import PageAccueil from '@/components/pageAccueil.vue';
import notFound from '@/components/notFound.vue';

const routes = [
   { name: "PageAccueil", path: "/", component: PageAccueil },
   { name: "notFound", path: "/:pathMatch(.*)*", component: notFound},
]

const router = createRouter({
    history: createWebHistory(), routes,
})

export default router;