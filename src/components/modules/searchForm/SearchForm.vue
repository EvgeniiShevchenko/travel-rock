<template>
  <main class="main-content">
    <div class="container">
      <div class="search-form-wrapper">
        <div class="service-tabs-wrapper">
          <!-- <searchBar @select-flights="shownFlights" @select-hotels="shownHotels" /> -->
          <searchBar />
          <!-- <button
            class="tab-item current"
            type="button"
          >
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-plane" />
            </svg>
            <span class="tab-text">Flights</span>
          </button>
          <button
            class="tab-item"
            type="button"
          >
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-hotel" />
            </svg>
            <span class="tab-text">Hotels</span>
          </button>-->
        </div>
        <div v-show="activeTab === 'flights'" class="form-wrapper">
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
              <div class="depart-location input-wrapper">
                <input class="departure form-input" type="text" placeholder="From" />
                <svg class="conbined-icon">
                  <use xlink:href="../../../assets/images/icons-sprite.svg#icon-arrow-pointers" />
                </svg>
              </div>
              <div class="arrival-location input-wrapper">
                <input class="arrival form-input" type="text" placeholder="To" />
              </div>
              <div class="booking input-wrapper">
                <button class="date-picker form-input" type="button">
                  Depart
                  <span class="marked">—</span>
                  Return
                </button>
              </div>
              <div class="ticket-info input-wrapper">
                <button class="drop-down-list form-input" type="button">
                  1 Passenger, Economy
                  <svg class="chevron-icon">
                    <use xlink:href="../../../assets/images/icons-sprite.svg#icon-dropdown" />
                  </svg>
                </button>
              </div>
            </div>

            <button class="search-btn" type="submit">Search</button>
          </form>
        </div>
        <div v-show="activeTab === 'hotels'" class="form-wrapper" />
      </div>
    </div>
  </main>
</template>

<script src="./SearchForm.js"></script>

<style lang="scss" scoped>
@import "./SearchForm.scss";
</style>
