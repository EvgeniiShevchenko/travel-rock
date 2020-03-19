import axios from 'axios';

export const getAirports = async function() {
  try {
    const timeoutPromise = timeout =>
      new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, timeout)
      );

    await timeoutPromise(0);

    const data = await axios.get('airportsPlaces.json', { method: 'GET' });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAirports
};
