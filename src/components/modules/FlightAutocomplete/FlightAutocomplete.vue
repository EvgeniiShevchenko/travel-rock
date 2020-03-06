<template>
  <multiselect
    :id="multiselectConfig.idSelect"
    :value="setAutocompleteValue(multiselectConfig.name)"
    :placeholder="multiselectConfig.placeholder"
    :options="foundAirports"
    track-by="iataCode"
    label="iataCode"
    :searchable="true"
    :internal-search="false"
    open-direction="bottom"
    :clear-on-select="false"
    :showNoResults="false"
    :reset-after="reset"
    :custom-label="customLabel"
    group-values="data"
    group-label="title"
    :hideSelected="false"
    :preserveSearch="true"
    selectLabel
    @search-change="handlerTripRoute"
    @select="setSelectedValue"
  >
    <template slot="singleLabel" slot-scope="props">
      <span class="option__desc">
        <span class="option__title">{{ multiselectConfig.setInputLabel(props) }}</span>
      </span>
    </template>
    <template slot="caret">
      <span />
    </template>
  </multiselect>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  name: "FlightAutocomplete",
  components: {
    Multiselect
  },
  props: {
    multiselectConfig: {
      type: Object,
      default: () => ({
        name: "",
        placeholder: "",
        idSelect: "",
        setListLabel: props =>
          `${props.city}, ${props.name} (${props.iataCode})`,
        setInputLabel: props =>
          `${props.option.city} (${props.option.iataCode})`
      })
    }
  },
  computed: {
    ...mapGetters({
      departure: "searchPage/departureName",
      arrival: "searchPage/arrivalName",
      foundAirports: "searchPage/getResultAutocomplete",
      isAutocompleteLoading: "searchPage/getStatusAutocomplete"
    })
  },
  methods: {
    customLabel(value) {
      return this.multiselectConfig.setListLabel(value);
    },
    handlerTripRoute(value, id) {
      this.handlerRoute({ name: id, value: value });
    },
    setSelectedValue(value, id) {
      switch (id) {
        case "departure":
          this.updateDeparturePlace(value);
          this.resetAutocomplete();
          break;
        case "arrival":
          this.updateArrivalPlace(value);
          break;
        default:
          break;
      }
    },
    setAutocompleteValue(name) {
      switch (name) {
        case "departure":
          return this.departure;
        case "arrival":
          return this.arrival;
        default:
          break;
      }
    },
    ...mapActions({
      handlerRoute: "searchPage/handlerRoute",
      handlerAutocomplete: "searchPage/handlerAutocomplete",
      updateDeparturePlace: "searchPage/updateDeparturePlace",
      updateArrivalPlace: "searchPage/updateArrivalPlace",
      resetAutocomplete: "searchPage/resetAutocompleteResult"
    })
  },
  updated: function() {
    console.log(1);
  },
  mounted: function() {
    const multiselectInput = document.getElementById("departure");
    multiselectInput.setAttribute("autocomplete", "off");
  }
};
</script>

<style src="./FlightAutocomplete.scss" lang="scss">
</style>

<style lang="scss">
.multiselect__tags {
  height: 48px;
  padding: 12px 15px;
  border-radius: 0;
  margin-bottom: 2px;
}
.multiselect__content-wrapper {
  min-width: 410px;
}

.option__title {
  font-size: 14px;
  line-height: 19px;
}

.multiselect__input {
  font-size: 14px;
  line-height: 19px;
}

.multiDropdown {
  position: absolute;
  padding: 0;
  width: 410px;
  background-color: white;
}

.dropdown-item {
  padding: 12px 15px;
}

.label-icon {
  height: 12px;
  width: 12px;
}

.multiselect__option {
  font-size: 14px;

  position: relative;

  padding-left: 50px;
}

.multiselect__option ::before {
  content: "";
  height: 12px;
  width: 12px;
  background: url("../../../assets/images/airplane.svg") no-repeat;
  background-size: 100% 100%;
  left: 35px;
  position: absolute;
}

.multiselect__option--group {
  background: none;
  position: relative;
  padding-left: 35px;

  background: none;
}

.multiselect__option--group ::before {
  content: "";
  left: 20px;
  height: 15px;
  width: 11px;
  background-image: url("../../../assets/images/position-marker.svg");
  background-size: 100% 100%;
  position: absolute;
}

.multiselect__option--disabled {
  background: none !important;
  color: black !important;
}

.multiselect__option--highlight {
  background: #e9f3fd;
  color: black;
}
</style>

