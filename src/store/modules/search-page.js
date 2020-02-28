import api from '../../services/api';

const getDefaultState = () => {
  return {
    departureLocation: 'new',
    arrivalLocation: '',
    value: { name: 'Vue.js', language: 'JavaScript' },
    options: []
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
    },
    getAutocompleteData(state) {
      return state.options;
    }
  },

  mutations: {
    changeDeparture(state, payload) {
      state.departureLocation = payload;
    },
    changeArrival(state, payload) {
      state.arrivalLocation = payload;
    },
    setAirports(state, payload) {
      const newArray = [...state.options, ...payload];
      state.options = newArray;
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
    },
    getAirports({ commit }) {
      const airports = api.getAirports();
      commit('setAirports', airports);
    }
  }
};
