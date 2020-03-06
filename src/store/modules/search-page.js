import api from '../../services/api';

const getDefaultState = () => {
  return {
    departureLocation: '',
    arrivalLocation: '',
    resultAutocomplete: [],
    isLoadingAutocomplete: false
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
      return state.arrivalLocation;
    },
    getResultAutocomplete(state) {
      return state.resultAutocomplete;
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
    setDataAutocomplete(state, payload) {
      const dataAutocomplete = payload;

      state.resultAutocomplete = dataAutocomplete;
    },
    setStatusAutocomplete(state, payload) {
      state.isLoadingAutocomplete = payload;
    },
    setAutocompleteResult(state) {
      state.resultAutocomplete = [];
    }
  },

  actions: {
    async handlerRoute({ commit }, name) {
      const filterValue = name.value.toUpperCase().trim();

      switch (name.name) {
        case 'departure':
          commit('setDeparture', name.value);
          break;
        case 'arrival':
          commit('setArrival', name.value);
          break;
        default:
          return;
      }
      console.log('next');

      if (filterValue.length < 3) {
        return;
      }

      commit('setStatusAutocomplete', true);

      const { data } = await api.getAirports();

      const filterAirports = data.filter((item, index) => {
        console.log(item);
        const filterTarget = item.data[index].city.toUpperCase().trim();
        // const filterTarget = item.city.toUpperCase().trim();
        return filterTarget.includes(filterValue);
      });

      commit('setDataAutocomplete', filterAirports);

      commit('setStatusAutocomplete', false);
    },
    updateDeparturePlace({ commit }, value) {
      commit('setDeparture', value);
    },
    updateArrivalPlace({ commit }, value) {
      commit('setArrival', value);
    },
    resetAutocompleteResult({ commit }) {
      commit('setAutocompleteResult');
    }
  }
};
