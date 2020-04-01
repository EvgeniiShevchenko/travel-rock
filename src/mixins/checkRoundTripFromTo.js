export default {
  methods: {
    checkRoundTripFromTo() {
      if (this.isEmpty(this.getDepartureValue)) {
        this.handlerError({
          name: 'is-empty',
          status: true,
          message: 'Please enter your destination',
          location: [...this.errorsAutocomplete.location, 'departure']
        });
      }

      if (this.isEmpty(this.getArrivalValue)) {
        this.handlerError({
          name: 'is-empty',
          status: true,
          message: 'Please enter your destination',
          location: [...this.errorsAutocomplete.location, 'arrival']
        });
      }
    }
  }
};
