import Vue from "vue";
import Vuex from "vuex";
import TestSuite from "@/modules/vuex/TestSuite";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TestSuite
  }
});
