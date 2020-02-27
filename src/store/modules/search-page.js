const getDefaultState = () => {
  return {
    departureLocation: 'new',
    arrivalLocation: ''
  };
};

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    departureName(state) {
      return state.departureLocation;
    },
    arrivalName(state) {
      return state.departureLocation;
    }
  },

  mutations: {
    changeDeparture(state, payload) {
      state.departureLocation = payload;
    },
    changeArrival(state, payload) {
      state.arrivalLocation = payload;
    }
  },
  actions: {
    handleRoute({ commit }, name) {
      switch (name.inputName) {
        case 'departure':
          commit('changeDeparture', name.inputName);
          break;
        case 'arrival':
          commit('changeArrival', name.inputName);
          break;
        default:
          break;
      }
    }
  }
};
