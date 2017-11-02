import Vue from 'vue';
import router from './js/router';

require("./styles.scss");

const app = new Vue({
  el: '#page',
  router,
});