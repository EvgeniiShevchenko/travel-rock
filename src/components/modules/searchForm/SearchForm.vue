<template>
  <main class="main-content">
    <div class="container">
      <div class="search-form-wrapper">
        <div class="service-tabs-wrapper">
          <button
            class="flights tab-item current"
            type="button"
          >
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-plane" />
            </svg>
            <span class="tab-text">Flights</span>
          </button>
          <button
            class="hotels tab-item"
            type="button"
          >
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-hotel" />
            </svg>
            <span class="tab-text">Hotels</span>
          </button>
        </div>
        <div class="form-wrapper">
          <div class="trip-options">
            <button
              class="options-item current"
              type="button"
            >
              <span class="options-text ">Round Trip</span>
            </button>
            <button
              class="options-item"
              type="button"
            >
              <span class="options-text">One Way</span>
            </button>
          </div>
          <form
            action="#"
            method="post"
            name="search-form"
            class="search-form"
            novalidate
          >
            <div class="form-controls-wrapper">
              <div class="flight-route-wrapper">
                <div class="depart-wrapper">
                  <input
                    class="departure rout"
                    type="text"
                    placeholder="Los Angeles, CA"
                  >
                  <svg class="conbined-icon">
                    <use xlink:href="../../../assets/images/icons-sprite.svg#icon-arrow-pointers" />
                  </svg>
                </div>
                <input
                  class="arrival rout"
                  type="text"
                  placeholder="Amsterdam, Netherlands"
                >
              </div>
              <div class="booking-wrapper">
                <button
                  class="date-picker"
                  type="button"
                >
                  Depart
                  <span class="marked">—</span> Return
                </button>
              </div>
              <div class="ticket-info-wrapper">
                <button
                  class="drop-down-list"
                  type="button"
                >
                  1 Passenger, Economy
                </button>
                <svg class="chewron-icon">
                  <use xlink:href="../../../assets/images/icons-sprite.svg#icon-dropdown" />
                </svg>
              </div>
            </div>

            <button
              class="search-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script src="./SearchForm.js"></script>

<style lang="scss" scoped>
@import './SearchForm.scss';
</style>
