
import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import routes from './routes/routes.js'
Vue.config.productionTip = false
import store from './store'
 import VueRouter from 'vue-router';

 Vue.use(VueRouter);
export const EventBus=new Vue();
const router=new VueRouter({
mode:'history',
routes,


})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
