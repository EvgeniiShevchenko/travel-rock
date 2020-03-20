<template>
  <main class="main-content">
    <div class="container">
      <div class="search-form-wrapper">
        <NavigationBar />
        <div v-show="getNavigationTabName === 'flights'" class="form-wrapper">
          <div class="trip-options">
            <button class="options-item current" type="button">
              <span class="options-text">Round Trip</span>
            </button>
            <button class="options-item" type="button">
              <span class="options-text">One Way</span>
            </button>
          </div>
          <form action="#" method="post" name="search-form" class="search-form" novalidate>
            <div class="form-controls-wrapper">
              <FlightRoundTrip />
              <div class="booking form-field-wrapper">
                <datePicker datePickerMode="range" @getValues="getTripDates" />
              </div>
              <div class="dropdown-field-wrapper form-field-wrapper">
                <DropDown />
              </div>
            </div>
            <button class="search-btn" type="submit">Search</button>
          </form>
        </div>
        <div v-show="getNavigationTabName === 'hotels'" class="form-wrapper" />
      </div>
    </div>
  </main>
</template>

<script src="./SearchForm.js"></script>

<style lang="scss" scoped>
@import "./SearchForm.scss";
</style>
