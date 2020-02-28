import axios from 'axios';
import path from 'path';

export const getAirports = async function() {
  // const projectID = new ObjectID(id);
  try {
    // const collection = await DataBase("vue", "project").updateOne({_id: projectID}, { $push: {"Comments": newComment}});

    fetch('http://localhost:8080/data.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
    // console.log(getData);

    // return getData;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAirports
};
