import api from '../../services/api';

const getDefaultState = () => {
  return {
    isStatusLoadingResults: false,
    foundFlights: [],
    filterByDefault: {},
    flightFilterParams: {
      selectFilter: [],
      price: 0,
      duration: {
        readyDuration: 0,
        selectDuration: [],
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

    getFilterParams(state) {
      return state.flightFilterParams;
    },

    getFilterDefault(state) {
      return state.filterByDefault;
    },

    getFilterDuration(state) {
      return state.flightFilterParams.duration.selectDuration;
    },

    getActiveFilters(state) {
      return state.flightFilterParams.selectFilter;
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
    },

    setMinMaxDuration(state, { minDuration, maxDuration }) {
      state.flightFilterParams.duration.minDuration = minDuration;
      state.flightFilterParams.duration.maxDuration = maxDuration;
      state.flightFilterParams.duration.readyDuration = 'any';

      state.filterByDefault = JSON.parse(JSON.stringify(state.flightFilterParams));
    },

    setFilterDuration(state, { data, single }) {
      state.flightFilterParams.duration.selectDuration = data;
      if (single === true && data === state.flightFilterParams.duration.maxDuration) {
        state.flightFilterParams.duration.readyDuration = 'any';
        return;
      }
      state.flightFilterParams.duration.readyDuration = data;
    },

    setByDefaultFilterDuration(state, payload) {
      state.flightFilterParams.duration.selectDuration = !payload
        ? [state.flightFilterParams.duration.minDuration, state.flightFilterParams.duration.maxDuration]
        : state.flightFilterParams.duration.maxDuration;

      state.flightFilterParams.duration.readyDuration = 'any';
    },

    setByDefaultFilter(state, payload) {
      state.flightFilterParams = JSON.parse(JSON.stringify(payload));
    },

    setFilter(state, payload) {
      const AllFilters = state.flightFilterParams.selectFilter;
      const isSetParam = state.flightFilterParams.selectFilter.includes(payload);

      !isSetParam ? (state.flightFilterParams.selectFilter = [...AllFilters, payload]) : null;
    },

    deleteFilter(state, payload) {
      const deleteFilterParam = state.flightFilterParams.selectFilter.filter(item => {
        return item !== payload;
      });

      state.flightFilterParams.selectFilter = deleteFilterParam;
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
    },

    setMinMaxDuration({ commit }, value) {
      commit(
        'setFilterDuration',
        !value.single ? { data: value.data, single: value.single } : { data: value.data[1], single: value.single }
      );
      commit('setMinMaxDuration', { minDuration: value.data[0], maxDuration: value.data[1] });
    },

    setFilterDuration({ commit }, duration) {
      commit('setFilterDuration', duration);
    },

    setByDefaultFilterDuration({ commit }, payload) {
      commit('setByDefaultFilterDuration', payload);
    },

    setByDefaultFilter({ commit }, payload) {
      commit('setByDefaultFilter', payload);
    },

    setFilter({ commit }, filterType) {
      commit('setFilter', filterType);
    },

    deleteFilter({ commit }, filterType) {
      commit('deleteFilter', filterType);
    }
  }
};
