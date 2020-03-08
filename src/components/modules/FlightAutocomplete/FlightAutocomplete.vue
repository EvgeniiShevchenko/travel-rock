<template>
  <!-- <div> -->
  <multiselect
    :id="multiselectConfig.id"
    :value="setValue(multiselectConfig.id)"
    :placeholder="multiselectConfig.placeholder"
    :options="foundAirports"
    track-by="iataCode"
    label="iataCode"
    :searchable="true"
    :internal-search="false"
    open-direction="bottom"
    :clear-on-select="false"
    :showNoResults="false"
    group-values="data"
    group-label="title"
    :hideSelected="false"
    :preserveSearch="true"
    @search-change="handlerDepartRoute"
    @select="setSelectedValue"
    @close="closeMethod"
  >
    <template slot="singleLabel" slot-scope="{option}">
      <span class="option__desc">
        <span
          v-if="trun === true"
          class="option__title"
        >{{ multiselectConfig.setInputLabel(option) }}</span>
        <span v-else class="option__title">{{ multiselectConfig.placeholder }}</span>
      </span>
    </template>
    <template slot="option" slot-scope="{option}" style="display: none">
      <div class="option__desc">
        <span class="option__title">{{ multiselectConfig.setOptionsLabel(option) }}</span>
      </div>
    </template>
    <template slot="caret">
      <span />
    </template>
    <template slot="noOptions" style="display: none">
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
        op: [],
        value: "",
        placeholder: ""
      })
    }
  },
  data: function() {
    return {
      selectOption: {},
      trun: true
    };
  },
  computed: {
    test(fff) {
      console.log(fff);
      if (typeof fff === String) {
        return "From";
      } else {
        return "Yes";
      }
    },
    ...mapGetters({
      departure: "searchPage/departureName",
      arrival: "searchPage/arrivalName",
      foundAirports: "searchPage/getResultAutocomplete",
      isAutocompleteLoading: "searchPage/getStatusAutocomplete"
    })
  },
  methods: {
    // test(props) {
    //   console.log(props);
    // },
    closeMethod(value, id) {
      const nemo = trip => {
        if (typeof trip !== "object") {
          this.trun = false;
          this.resetAutocomplete();
        } else {
          this.trun = true;
        }
      };
      // console.log(this.departure, this.arrival);
      // if (typeof this.departure !== "object") {
      //   this.trun = false;
      // } else {
      //   this.trun = true;
      // }

      switch (id) {
        case "departure":
          nemo(this.departure);
          break;
        case "arrival":
          nemo(this.arrival);
          break;
        default:
          break;
      }
      console.log(this.departure);
      // switch (id) {
      //   case "departure":
      //     console.log("I`m working");
      //     this.updateDeparturePlace({
      //       iataCode: "lfmbvkdff",
      //       city: "vdlkfnvldfn"
      //     });
      //     this.resetAutocomplete();
      //     break;
      //   case "arrival":
      //     this.updateArrivalPlace(value);
      //     this.resetAutocomplete();
      //     break;
      //   default:
      //     break;
      // }
      // console.log(222222222, { name: "lfmbvkdff", sity: "vdlkfnvldfn" }, id);
    },
    setGroupTitle(props) {
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
      //         ...this.optionGroupTitle,W
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
      console.log(33333, value, id);
      switch (id) {
        case "departure":
          this.selectOption = value;
          this.updateDeparturePlace(value);
          this.resetAutocomplete();
          break;
        case "arrival":
          this.updateArrivalPlace(value);
          this.resetAutocomplete();
          break;
        default:
          break;
      }
    },
    setValue(id) {
      switch (id) {
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
    console.log(this.multiselectConfig);
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

// .multiselect__option {
//   min-height: 0;
//   // padding: 0;
// }

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
  padding-left: 20px;
  margin-left: 35px;
}

.multiselect__option ::before {
  content: "";
  // padding: 2px;
  height: 12px;
  width: 12px;
  background-image: url("../../../assets/images/airplane.svg");
  left: 0;
  position: absolute;
}

.multiselect__option--group {
  background: none;
  position: relative;
  margin-left: 16px;
  background: none;
  // padding-left: 0;
}

.multiselect__option--group ::before {
  content: "";
  // left: 0;
  height: 15px;
  width: 11px;
  background-image: url("../../../assets/images/position-marker.svg");
  position: absolute;
}

.multiselect__option--disabled {
  background: none !important;
}
</style>

