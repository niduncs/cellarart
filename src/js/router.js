import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import page from '../components/page.vue';
import about from '../components/pages/about.vue';
import contact from '../components/pages/contact.vue';
import gallery from '../components/pages/gallery.vue';
import exhibits from '../components/pages/exhibits.vue';

Vue.use(VueRouter);

let routes = [
  { path: '/', component: main },
  { path: '/pages', component: page, children: [
    { path: 'about', component: about, meta: { pageName: 'about' } },
    { path: 'gallery', component: gallery, meta: { pageName: 'gallery' } },
    { path: 'exhibits', component: exhibits, meta: { pageName: 'exhibits' } },
    { path: 'contact', component: contact, meta: { pageName: 'contact' } }
  ]}
];

const router = new VueRouter({
  routes,
  components: {
    main,
    page,
  }
});

export default router;