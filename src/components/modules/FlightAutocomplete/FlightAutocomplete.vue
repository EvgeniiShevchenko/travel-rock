<template>
  <!-- <div> -->
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
    :preserve-search="true"
    :clear-on-select="false"
    :show-no-results="false"
    :group-select="true"
    group-values="data"
    group-label="title"
    :hideSelected="false"
    @search-change="handlerDepartRoute"
    @input="setSelectedValue"
  >
    <template slot="singleLabel" slot-scope="props">
      <span class="option__desc">
        <span class="option__title">{{ multiselectConfig.setInputLabel(props) }}</span>
      </span>
    </template>
    <!-- <template slot="option" slot-scope="{option}">
    <div class="option__desc">-->
    <!-- <span>11111111111111111{{ setGroupTitle(option) }}</span> -->
    <!-- <span class="option__title">
          <img class="label-icon" src="@/assets/images/airplane.png" />
          {{ multiselectConfig.setListLabel(option) }}
        </span>
      </div>
    </template>-->
    <template slot="caret">
      <span />
    </template>
    <template slot="noOptions">
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
  data: function() {
    return {
      // optionGroupTitle: ["Kiev"],
      optionGroupTitle: [],
      allGroupTitle: []
    };
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
    setGroupTitle(props) {
      // let test = "";
      // if (props.iataCode !== test ) {
      //   console.log("111111111111111111");
      //   test = props.iataCode;
      // } else {
      //   console.log("22222222222222222");
      // }
      console.log(props);

      if (this.optionGroupTitle.length !== 0) {
        // lastValue = props.city;
        const oldTover = this.optionGroupTitle;
        // debugger;
        for (let i = 0; i < oldTover.length; i++) {
          if (this.allGroupTitle.length === 0) {
            this.allGroupTitle = [...this.allGroupTitle, props.city];
            return "hello";
          }
          console.log(this.allGroupTitle);
          for (let j = 0; j < this.allGroupTitle.length; j++) {
            if (this.allGroupTitle[j] !== props.city) {
              console.log("i'm work");
              this.allGroupTitle = [...this.allGroupTitle, props.city];
              console.log("to push", this.allGroupTitle);
              return "hello";
            }
          }
        }
      }
      // console.log("qqqqqqqqqqqqqqq", this.allGroupTitle);
    },
    handlerDepartRoute(value, id) {
      console.log(value, id);
      this.handlerRoute({ name: id, value: value });

      // if (this.foundAirports.length !== 0) {
      //   // this.foundAirports.map((item, index) => {
      //   for (let i = 0; i < this.foundAirports.length; i++) {
      //     if (this.optionGroupTitle.length !== 0) {
      //       if (
      //         this.foundAirports[i].city === this.optionGroupTitle[i] ||
      //         this.optionGroupTitle[i] === "undefined"
      //       ) {
      //         break;
      //       }
      //       this.optionGroupTitle = [
      //         ...this.optionGroupTitle,
      //         this.foundAirports[i].city
      //       ];
      //     } else {
      //       this.optionGroupTitle = [
      //         ...this.optionGroupTitle,
      //         this.foundAirports[i].city
      //       ];
      //     }
      //   }
      //   // });
      // }
      // console.log("optionGroupTitle");
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
  mounted: function() {
    // for (let i = 0; i < 3; i++) {
    //   console.log(
    //     this.setGroupTitle({
    //       name: "Boryspil International Airport",
    //       city: "Kiev",
    //       shortCityName: "IEV",
    //       country: "Ukraine",
    //       iataCode: "KBP",
    //       icaoCode: "UKBB",
    //       longitude: 50.345001220703125,
    //       latitude: 30.894699096679688,
    //       height: 427,
    //       region: "Europe/Kiev",
    //       type: "airport"
    //     })
    //   );
    // }
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
  font-size: 14px;
  line-height: 19px;
}

.multiselect__input {
  font-size: 14px;
  line-height: 19px;
}

.multiselect__option {
  min-height: 0;
  // padding: 0;
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
</style>

