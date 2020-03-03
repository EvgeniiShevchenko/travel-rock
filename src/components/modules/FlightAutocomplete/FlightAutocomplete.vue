<template>
  <multiselect
    :id="multiselectConfig.idSelect"
    :value="setAutocompleteValue(multiselectConfig.name)"
    :placeholder="multiselectConfig.placeholder"
    :options="foundAirports"
    label="iataCode"
    track-by="iataCode"
    :searchable="true"
    :internal-search="false"
    :loading="isAutocompleteLoading"
    :show-labels="false"
    group-label="city"
    :showLabels="false"
    open-direction="bottom"
    :preserve-search="true"
    :clear-on-select="false"
    :hideSelected="true"
    :custom-label="multiselectConfig.setListLabel"
    @search-change="handlerDepartRoute"
    @select="setSelectedValue"
  >
    <template slot="singleLabel" slot-scope="props">
      <span class="option__desc">
        <span class="option__title">{{ multiselectConfig.setInputLabel(props) }}</span>
      </span>
    </template>
    <template slot="search" slot-scope="props">
      <div class="option__desc">
        <span class="option__title">{{ props.option.name }}</span>
      </div>
    </template>
    <template slot="caret">
      <span />
    </template>
  </multiselect>
</template>

<script src="./FlightAutocomplete"></script>

<style src="./FlightAutocomplete.scss" lang="scss"></style>

