import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'es6-promise/auto'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import store from './store'


Vue.use(BootstrapVue);


Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
