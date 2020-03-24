<template>
  <main class="main-content">
    <div class="container">
      <div class="search-form-wrapper">
        <NavigationBar />
        <div v-show="getNavigationTabName === 'flights'" class="form-wrapper">
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
                  <FlightRoundTrip />
                  <div class="booking form-field-wrapper">
                    <datePicker
                      datePickerMode="range"     @valueSelection="dateOrdering"
                    />
                  </div>
                  <div class="dropdown-field-wrapper form-field-wrapper">
                    <DropDown :isOpened="dropDownOpen" :outputText="passengerInfoSummary" @toggle="dropDownToggle">
                      <div class="dropdown-body-header">
                        <span>Who is travelling?</span>
                        <button class="close-btn" @click.prevent="dropDownToggle">
                        </button>
                      </div>
                      <div class="dropdown-body-controls">
                        <div class="counter-wrapper">Adults
                          <div class="counter-buttons-count">
                            <Counter :minCount="minAdults" :maxCount="maxAdults" @changeValue="setAdultsCount" />
                          </div>
                        </div>
                        <div class="counter-wrapper">Children
                          <div class="counter-buttons-count">
                            <Counter :maxCount="maxChildren" @changeValue="setChildrenCount"/>
                          </div>
                        </div>
                        <div class="counter-wrapper">Infants
                          <div class="counter-buttons-count">
                            <Counter :maxCount="maxInfants" @changeValue="setInfantsCount"/>
                          </div>
                        </div>
                        <div class="dropdown-cabin-type counter-wrapper">
                          <span class="select-label">Cabin Type</span>
                          <Select :options="cabinTypes" v-model="cabinType" @changeValue="setCabinType"/>
                        </div>
                        <span class="dropdown-validation">{{ dropdownValidationMsg }}</span>
                      </div>
                    </DropDown>
                  </div>
                </div>
                <button class="search-btn" type="submit">Search</button>
              </form>
            </TabItem>
            <TabItem>
              <template slot="navBtn">
                <span class="options-text">One Way</span>
              </template>
            </TabItem>
          </TabsContainer>
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
