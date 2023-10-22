import { createStore } from 'vuex';

export default createStore({
  state: {
    contentData: [],
  },
  getters: {
    getContentData: (state) => state.contentData,
  },
  mutations: {
    setContentData(state, data) {
      state.contentData = data;
    },
  },
  actions: {
    loadContentData({ commit }) {
      return fetch('https://sheetdb.io/api/v1/ra5uqkz181k5r')
        .then((response) => response.json())
        .then((data) => {
          commit('setContentData', data);

          return Promise.resolve(data);
        });
    },
  },
});
