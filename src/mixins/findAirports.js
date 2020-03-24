export default (targetValue, data) => {
  const inputValue = targetValue.toUpperCase().trim();
  let filterAirports = [];

  filterAirports = data.filter(item => {
    const filterSearchValue = item.city.toUpperCase().trim();

    return filterSearchValue.includes(inputValue);
  });

  if (filterAirports.length === 0) {
    filterAirports = data.filter(item => {
      if (!item.iataCode) return false;
      return item.iataCode.includes(inputValue);
    });
  }

  if (filterAirports.length === 0) {
    filterAirports = data.filter(item => {
      return item.shortCityName.includes(inputValue);
    });
  }

  return filterAirports;
};
