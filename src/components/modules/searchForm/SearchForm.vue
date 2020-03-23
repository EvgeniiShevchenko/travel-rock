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
                       <datePicker></datePicker>
                      </div>
                      <div class="dropdown-field-wrapper form-field-wrapper">
                        <DropDown />
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
