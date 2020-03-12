import api from '../../services/api';

const getDefaultState = () => {
  return {
    departureLocation: '',
    arrivalLocation: '',
    resultDepartureAutocomplete: [],
    resultArrivalAutocomplete: [],
    isLoadingAutocomplete: false
  };
};

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    getDepartureValue(state) {
      return state.departureLocation;
    },
    getArrivalValue(state) {
      return state.arrivalLocation;
    },
    getResultDepartureAutocomplete(state) {
      return state.resultDepartureAutocomplete;
    },
    getResultArrivalAutocomplete(state) {
      return state.resultArrivalAutocomplete;
    },
    getStatusAutocomplete(state) {
      return state.isLoadingAutocomplete;
    }
  },

  mutations: {
    setDeparture(state, payload) {
      state.departureLocation = payload;
    },
    setArrival(state, payload) {
      state.arrivalLocation = payload;
    },
    setResultDepartureAutocomplete(state, payload) {
      state.resultDepartureAutocomplete = payload;
    },
    setResultArrivalAutocomplete(state, payload) {
      state.resultArrivalAutocomplete = payload;
    },
    setStatusAutocomplete(state, payload) {
      state.isLoadingAutocomplete = payload;
    },
    resetResultDepartureAutocomplete(state) {
      state.resultDepartureAutocomplete = [];
    },
    resetResultArrivalAutocomplete(state) {
      state.resultArrivalAutocomplete = [];
    }
  },

  actions: {
    async handlerDepartureRoute({ commit }, value) {
      const inputValue = value.toUpperCase().trim();

      commit('setDeparture', value);

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();
      let filterAirports = data.filter(item => {
        const filterSearchValue = item.city.toUpperCase().trim();

        return filterSearchValue.includes(inputValue);
      });

      if (inputValue.length === 0) {
        filterAirports = [];
      }

      commit('setResultDepartureAutocomplete', filterAirports);

      commit('setStatusAutocomplete', false);
    },
    async handlerArrivalRoute({ commit }, value) {
      const inputValue = value.toUpperCase().trim();

      commit('setArrival', value);

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();
      let filterAirports = data.filter(item => {
        const filterSearchValue = item.city.toUpperCase().trim();

        return filterSearchValue.includes(inputValue);
      });

      if (inputValue.length === 0) {
        filterAirports = [];
      }

      commit('setResultArrivalAutocomplete', filterAirports);

      commit('setStatusAutocomplete', false);
    },
    updateDepartureValue({ commit }, value) {
      commit('setDeparture', value);
    },
    updateArrivalValue({ commit }, value) {
      commit('setArrival', value);
    },
    resetDepartureAutocompleteResult({ commit }) {
      commit('resetResultDepartureAutocomplete');
    },
    resetArrivalAutocompleteResult({ commit }) {
      commit('resetResultArrivalAutocomplete');
    },
    resetAllAutocompleteResult({ commit }) {
      commit('resetResultDepartureAutocomplete');
      commit('resetResultArrivalAutocomplete');
    },
    reverseRouteTrip({ commit }, { departureValue, arrivalValue }) {
      commit('setDeparture', arrivalValue);
      commit('setArrival', departureValue);
    }
  }
};
