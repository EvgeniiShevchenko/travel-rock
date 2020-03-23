import axios from 'axios';
import timeOutPromise from '@/mixins/timeOutPromise.js';

export const getAirports = async function() {
  try {
    await timeOutPromise(0);

    const data = await axios.get('airportsPlaces.json', { method: 'GET' });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFlights = async function() {
  try {
    await timeOutPromise(0);

    const data = await axios.get('foundFlights.json', { method: 'GET' });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAirports,
  getFlights
};
