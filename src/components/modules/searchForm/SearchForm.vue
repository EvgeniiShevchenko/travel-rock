<template>
  <main class="main-content">
    <div class="container">
      <div class="search-form-wrapper">
        <div class="service-tabs-wrapper">
          <button
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
          </button>
        </div>
        <div class="form-wrapper">
          <TabsContainer>
            <TabItem :selected="true">
              <template slot="navBtn">
                <span class="options-text ">Round Trip</span>
              </template>

              <form
                action="#"
                method="post"
                name="search-form"
                class="search-form"
                novalidate
              >
                <div class="form-controls-wrapper">
                  <div class="depart-location input-wrapper">
                    <input
                      class="departure form-input"
                      type="text"
                      placeholder="From"
                    >
                    <svg class="conbined-icon">
                      <use xlink:href="../../../assets/images/icons-sprite.svg#icon-arrow-pointers" />
                    </svg>
                  </div>
                  <div class="arrival-location input-wrapper">
                    <input
                      class="arrival form-input"
                      type="text"
                      placeholder="To"
                    >
                  </div>
                  <div class="booking input-wrapper">
                    <DatePicker 
                      datePickerMode="range"
                    />
                  </div>
                  <div class="ticket-info input-wrapper">
                    <button
                      class="drop-down-list form-input"
                      type="button"
                    >
                      1 Passenger, Economy
                      <svg class="chevron-icon">
                        <use xlink:href="../../../assets/images/icons-sprite.svg#icon-dropdown" />
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  class="search-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </TabItem>

            <TabItem> 
              <template slot="navBtn">
                <span class="options-text">One Way</span>
              </template>
              
            </TabItem>
          </TabsContainer>
        </div>
      </div>
    </div>
  </main>
</template>

<script src="./SearchForm.js"></script>

<style lang="scss" scoped>
@import './SearchForm.scss';
</style>
