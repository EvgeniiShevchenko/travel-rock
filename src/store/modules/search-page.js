const getDefaultState = () => {
  return {
    nameSearchTab: 'flights'
  };
};

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    getSearchTabName(state) {
      return state.nameSearchTab;
    }
  },

  mutations: {
    setNameSearchTab(state, payload) {
      state.nameSearchTab = payload;
    }
  },

  actions: {
    changeSearchTab({ commit }, tabName) {
      commit('setNameSearchTab', tabName);
    }
  }
};
