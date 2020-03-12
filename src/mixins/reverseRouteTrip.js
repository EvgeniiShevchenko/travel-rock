export default {
  methods: {
    reverseRoute() {
      this.reverseRouteTrip({ departureValue: this.departure, arrivalValue: this.arrival });
    }
  }
};
