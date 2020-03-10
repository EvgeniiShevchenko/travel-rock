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
    async handlerRoute({ commit }, { id, value }) {
      const filterValue = value.toUpperCase().trim();

      switch (id) {
        case 'departure':
          commit('setDeparture', value);
          break;
        case 'arrival':
          commit('setArrival', value);
          break;
        default:
          return;
      }

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();

      let filterAirports = data.filter(item => {
        const filterTarget = item.city.toUpperCase().trim();
        return filterTarget.includes(filterValue);
      });

      if (filterValue.length === 0) {
        filterAirports = [];
      }

      if (id === 'departure') {
        commit('setResultDepartureAutocomplete', filterAirports);
      } else {
        commit('setResultArrivalAutocomplete', filterAirports);
      }

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
    }
  }
};
