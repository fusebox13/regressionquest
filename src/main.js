import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import './styles/vendor.scss';
import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCircle, faPlusCircle, faTrash, faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import Nav from "@/components/Nav";

import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
FontAwesomeLibrary.add(
  faPlus, 
  faCircle, 
  faPlusCircle, 
  faTrash, 
  faCaretSquareDown,
  faCaretSquareUp
)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fal', FontAwesomeLayers)
Vue.component('NavBar', Nav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
