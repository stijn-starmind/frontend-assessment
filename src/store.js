import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: undefined
  },
  mutations: {
    update(state, json) {
      state.data = json;
    }
  },
  actions: {
    load(context) {
      fetch('https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de').then(
        response => response.json()
      ).then(json => {
        context.commit('update', json);
      });
    }
  }
});
