import api from '../../services/api';

const getDefaultState = () => {
  return {
    isStatusLoadingResults: false,
    foundFlights: [],
    flightFilterParams: {
      price: 0,
      duration: {
        selectDuration: 0,
        maxDuration: 0,
        minDuration: 0
      },
      stops: ['Nonstop', '1 stop', '2+ stops'],
      airlines: [],
      airports: {
        departure: [],
        arrival: []
      }
    }
  };
};

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    getStatusLoadingResults(state) {
      return state.isStatusLoadingResults;
    },

    getFoundFlights(state) {
      return state.foundFlights;
    },

    getFlightFilterDuration(state) {
      return state.flightFilterParams.duration;
    }
  },

  mutations: {
    setStatusLoadingResults(state, payload) {
      state.isStatusLoadingResults = payload;
    },

    setFoundFlights(state, payload) {
      state.foundFlights = payload;
    },

    setFilterFlightDuration(state, payload) {
      state.flightFilterParams.duration = { ...state.flightFilterParams.duration, selectDuration: payload };
    }
  },

  actions: {
    async setFlightResultData({ commit }) {
      commit('setStatusLoadingResults', true);

      const { data } = await api.getFlights();

      commit('setFoundFlights', data);

      commit('setStatusLoadingResults', false);
    },

    setFoundFlights({ commit }, flights) {
      commit('setFoundFlights', flights);
    },

    setFilterFlightDuration({ commit }, value) {
      commit('setFilterFlightDuration', value);
    }
  }
};
