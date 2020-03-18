const getDefaultState = () => {
  return {
    nameNavigationTab: 'flights'
  };
};

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    getNavigationTabName(state) {
      return state.nameNavigationTab;
    }
  },

  mutations: {
    setNameNavigationTab(state, payload) {
      state.nameNavigationTab = payload;
    }
  },

  actions: {
    switchNavigationTab({ commit }, tabName) {
      commit('setNameNavigationTab', tabName);
    }
  }
};
