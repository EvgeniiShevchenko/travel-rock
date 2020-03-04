<template>
  <div class="autocomplete">
    <selectAutocomplete
      class="autocomplete-departure"
      :multiselectConfig="multiselectConfigDeparture"
    />
    <selectAutocomplete class="autocomplete-arrival" :multiselectConfig="multiselectConfigArrival" />
  </div>
</template>
<script src="./FlightRoundTrip"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped>
</style>
