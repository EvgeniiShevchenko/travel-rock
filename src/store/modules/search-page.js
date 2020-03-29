import api from '../../services/api';
import findAirports from '../../mixins/findAirports';

const getDefaultState = () => {
  return {
    nameNavigationTab: 'flights',
    departureLocation: '',
    arrivalLocation: '',
    resultDepartureAutocomplete: [],
    resultArrivalAutocomplete: [],
    isLoadingAutocomplete: false,
    errorAutocomplete: {
      name: '',
      message: '',
      status: false,
      location: []
    },
    flightFilterParams: {
      price: 0,
      duration: 0,
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
    getNavigationTabName(state) {
      return state.nameNavigationTab;
    },

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
    },

    getErrorsAutocomplete(state) {
      return state.errorAutocomplete;
    },

    getFlightFilterDuration(state) {
      return state.flightFilterParams.duration;
    }
  },

  mutations: {
    setNameNavigationTab(state, payload) {
      state.nameNavigationTab = payload;
    },

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
    },

    resetAutocompleteError(state) {
      state.errorAutocomplete = { ...state.errorAutocomplete, ...getDefaultState().errorAutocomplete };
    },

    setAutocompleteError(state, payload) {
      state.errorAutocomplete = { ...state.errorAutocomplete, ...payload };
    },

    setFilterFlightDuration(state, payload) {
      state.flightFilterParams = { ...state.flightFilterParams, duration: payload };
    },

    resetAutocompleteArrivalError(state) {
      const resetError = state.errorAutocomplete.location.filter(item => item !== 'arrival');

      if (resetError.length !== 0) {
        state.errorAutocomplete = { ...state.errorAutocomplete, location: resetError };
      } else {
        state.errorAutocomplete = { ...state.errorAutocomplete, ...getDefaultState().errorAutocomplete };
      }
    },

    resetAutocompleteDepartureError(state) {
      const resetError = state.errorAutocomplete.location.filter(item => item !== 'departure');

      if (resetError.length !== 0) {
        state.errorAutocomplete = { ...state.errorAutocomplete, location: resetError };
      } else {
        state.errorAutocomplete = { ...state.errorAutocomplete, ...getDefaultState().errorAutocomplete };
      }
    }
  },

  actions: {
    switchNavigationTab({ commit }, tabName) {
      commit('setNameNavigationTab', tabName);
    },

    async handlerDepartureRoute({ commit }, value) {
      commit('setDeparture', value);

      if (value.length < 3) {
        commit('resetResultDepartureAutocomplete');
        return;
      }

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();

      commit('setResultDepartureAutocomplete', findAirports(value, data));

      commit('setStatusAutocomplete', false);
    },

    async handlerArrivalRoute({ commit }, value) {
      commit('setArrival', value);

      if (value.length < 3) {
        commit('resetResultArrivalAutocomplete');
        return;
      }

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();

      commit('setResultArrivalAutocomplete', findAirports(value, data));

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
      commit('resetAutocompleteError');
      commit('setDeparture', arrivalValue);
      commit('setArrival', departureValue);
    },

    handlerAutocompleteError({ commit }, errorInfo) {
      commit('setAutocompleteError', errorInfo);
    },

    resetAutocompleteError({ commit }) {
      commit('resetAutocompleteError');
    },
    
    setFilterFlightDuration({ commit }, value) {
      commit('setFilterFlightDuration', value);
    },

    resetAutocompleteArrivalError({ commit }) {
      commit('resetAutocompleteArrivalError');
    },

    resetAutocompleteDepartureError({ commit }) {
      commit('resetAutocompleteDepartureError');
    }
  }
};
