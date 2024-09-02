import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import HomePage from "@/views/HomePage.vue";
import firstChild from "@/views/children/firstChildren.vue";
import secondChild from "@/views/children/secondChildren.vue";
import ArtsView from "@/views/ArtsView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
    children: [
      {
        path: "first_child",
        name: "first_child",
        component: firstChild,
      },
      {
        path: "second_child",
        name: "second_child",
        component: secondChild,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "PostM5",
    },
  },
  {
    path: "/arts",
    name: "ArtsView",
    component: ArtsView,
    meta: {
      title: "Artworks & Exhibtions News",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
router.beforeEach((to, from, next) => {
  if (to.name === "about") {
    return next({ name: "content" });
  }
  next();
});

/* router.afterEach((to) => {
  document.title = to.meta.title;
});
 */

router.beforeEach((to) => {
  document.title = to.meta.title;
});
