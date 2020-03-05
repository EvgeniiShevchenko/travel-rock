<template>
  <div>
    <multiselect
      :id="multiselectConfig.idSelect"
      :value="setAutocompleteValue(multiselectConfig.name)"
      :placeholder="multiselectConfig.placeholder"
      :options="foundAirports"
      track-by="iataCode"
      :searchable="true"
      :internal-search="false"
      :show-labels="false"
      group-label="city"
      open-direction="bottom"
      :preserve-search="true"
      :clear-on-select="false"
      :show-no-results="false"
      :hideSelected="true"
      :optionHeight="400"
      @search-change="handlerDepartRoute"
      @input="setSelectedValue"
    >
      <template slot="singleLabel" slot-scope="props">
        <span class="option__desc">
          <span class="option__title">{{ multiselectConfig.setInputLabel(props) }}</span>
        </span>
      </template>
      <template slot="option" slot-scope="props">
        <span />
        <!-- <div class="option__desc">
        <span
          style="display: block;"
        >{{ `${props.option.city}, ${props.option.shortCityName} (All Airports)` }}</span>
        <span class="option__title">{{ multiselectConfig.setListLabel(props) }}</span>
        </div>-->
      </template>
      <template slot="caret">
        <span />
      </template>
      <template slot="noOptions">
        <span />
      </template>
    </multiselect>
    <ul v-if="departure.length !== 0" class="multiDropdown">
      <li
        v-for="(item, index) in foundAirports"
        :key="'labelList' + index"
        class="dropdown-item"
      >{{ "cdcvdsvdsv" }}</li>
    </ul>
    <ul v-if="departure.length !== 0" class="multiDropdown">
      <li
        v-for="(item, index) in foundAirports"
        :key="'labelList' + index"
        class="dropdown-item"
      >{{ "cdcvdsvdsv" }}</li>
    </ul>
  </div>
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
    handlerDepartRoute(value, id) {
      this.handlerRoute({ name: id, value: value });
    },
    castomeLabel(props) {
      // const cityLabel = props.option.city
      console.log(props);
    },
    setSelectedValue(value, id) {
      console.log(id);
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
}
.multiselect__content-wrapper {
  min-width: 410px;
}

.option__title {
  height: 14px;
  line-height: 19px;
}

.multiselect__input {
  height: 14px;
  line-height: 19px;
}

.multiselect__option {
  min-height: 0;
  padding: 0;
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
</style>

