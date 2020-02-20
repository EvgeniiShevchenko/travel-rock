<template>
  <main class="main-content">
    <div class="form-search-shape">
      <div class="tabs-wrapper">
        <div class="service-tabs">
          <button class="tab-item current" type="button">
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-plane" />
            </svg>
            <span class="tab-text">Flights</span>
          </button>
          <button class="tab-item" type="button">
            <svg class="tab-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-hotel" />
            </svg>
            <span class="tab-text">Hotels</span>
          </button>
        </div>
        <div class="trip-tabs">
          <button class="tab-item" type="button">
            <span class="tab-text current">Round Trip</span>
          </button>
          <button class="tab-item" type="button">
            <span class="tab-text">One Way</span>
          </button>
        </div>
      </div>

      <form action="#" method="post" name="search-form" class="search-form" novalidate>
        <div class="inputs-wrapper">
          <div class="depart wrapper">
            <input class="departure select-item" type="text" placeholder="Los Angeles, CA" />
            <svg class="conbined-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-arrow-pointers" />
            </svg>
          </div>

          <div class="arrival wrapper">
            <input class="arrival select-item" type="text" placeholder="Amsterdam, Netherlands" />
          </div>

          <div class="reservation wrapper">
            <button class="date-picker" type="button">
              Depart
              <span class="marked">—</span> Return
            </button>
          </div>

          <div class="ticket-info wrapper">
            <button class="drop-down-list" type="button">1 Passenger, Economy</button>
            <svg class="chewron-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-dropdown" />
            </svg>
          </div>
        </div>
        <button class="search-btn" type="submit">Search</button>
      </form>
    </div>
  </main>
</template>

<script src="./SearchForm.js"></script>

<style lang="scss" scoped>
@import "./SearchForm.scss";
</style>
