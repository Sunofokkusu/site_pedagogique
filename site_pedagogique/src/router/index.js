import { createRouter, createWebHistory } from 'vue-router';
import PageAccueil from '@/components/pageAccueil.vue';
import notFound from '@/components/notFound.vue';
import pagePortrait from '@/components/pagePortrait.vue';
import pagePaysage from '@/components/pagePaysage.vue';
import pageAbstrait from '@/components/pageAbstrait.vue';
import allPhotos from '@/components/allPhotos.vue';
import pageJaune from '@/components/pageJaune.vue';
import pageBleu from '@/components/pageBleu.vue';
import pageNoir from '@/components/pageNoir.vue';
import pageGris from '@/components/pageGris.vue';

const routes = [
   { name: "PageAccueil", path: "/", component: PageAccueil },
   { name: "notFound", path: "/:pathMatch(.*)*", component: notFound},
   { name: "pagePortrait", path: "/portrait", component: pagePortrait},
   { name: "pagePaysage", path: "/paysage", component: pagePaysage},
   { name: "pageAbstrait", path: "/abstrait", component: pageAbstrait},
   { name: "allPhotos", path: "/all", component: allPhotos},
   { name: "pageJaune", path: "/jaune", component: pageJaune},
   { name: "pageBleu", path: "/bleu", component: pageBleu},
   { name: "pageNoir", path: "/noir", component: pageNoir},
   { name: "pageGris", path: "/gris", component: pageGris},
]

const router = createRouter({
    history: createWebHistory(), routes,
})

export default router;