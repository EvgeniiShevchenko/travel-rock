import axios from 'axios';
import path from 'path';

export const getAirports = async function() {
  try {
    const data = await axios.get('airportsPlaces.json', { method: 'GET' });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAirports
};
