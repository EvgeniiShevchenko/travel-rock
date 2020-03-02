import api from '../../services/api';

const getDefaultState = () => {
  return {
    departureLocation: '',
    arrivalLocation: '',
    resultAutocomplete: [{ name: 'evgenii', id: 1 }],
    isLoadingAutocomplete: false
    // airportsPlaces: []
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
      const dataAutocomplete = [...state.resultAutocomplete, ...payload];
      state.resultAutocomplete = dataAutocomplete;
    },
    setStatusAutocomplete(state, payload) {
      state.isLoadingAutocomplete = payload;
    }
  },

  actions: {
    async handlerRoute({ commit }, name) {
      const filterValue = name.value.toUpperCase().trim();
      console.log(name.value);

      switch (name.name) {
        case 'departure':
          commit('setDeparture', name.value);
          break;
        case 'arrival':
          commit('setArrival', name.inputName);
          break;
        case 'selectDeparture':
          commit('setDeparture', name.inputName);
          return;
        default:
          break;
      }

      if (filterValue.length < 3) {
        return;
      }

      commit('setStatusAutocomplete', true);
      const { data } = await api.getAirports();

      const filterAirports = data.filter(item => {
        const filterTarget = item.name.toUpperCase().trim();
        return filterTarget.includes(filterValue);
      });

      console.log(filterAirports);
      // commit('setDataAutocomplete', data);
      commit('setDataAutocomplete', filterAirports);
      commit('setStatusAutocomplete', false);
    },
    async handlerAutocomplete({ commit }) {
      commit('setStatusAutocomplete', true);
      const { data } = await api.getAirports();
      console.log(data);
      commit('setDataAutocomplete', data);
      commit('setStatusAutocomplete', false);
    }
  }
};
