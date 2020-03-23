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
                    <button class="date-picker form-input" type="button">
                      Depart
                      <span class="marked">—</span>
                      Return
                    </button>
                  </div>
                  <div class="dropdown-field-wrapper form-field-wrapper">
                    <DropDown>
                      <div class="dropdown-body-header">
                        <span>Who is travelling?</span>
                        <button class="close-btn"
                                :class="{ 'is-focused': isActive }"
                                @click.prevent="formFieldToggle"
                        >

                        </button>
                      </div>
                      <div class="dropdown-body-controls">
                        <div class="counter-wrapper">Adults
                          <div class="counter-buttons-count"><Counter /></div>
                        </div>
                        <div class="counter-wrapper">Children
                          <div class="counter-buttons-count"><Counter /></div>
                        </div>
                        <div class="counter-wrapper">Infants
                          <div class="counter-buttons-count"><Counter /></div>
                        </div>
                        <div class="dropdown-cabin-type counter-wrapper">Cabin Type
                        </div>
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
