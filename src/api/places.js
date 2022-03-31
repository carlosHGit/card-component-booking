import axios from "axios";

const API = process.env.PLACES_APP_API || 'http://localhost:3000/api/places';


export const getPlaces = async () => {
  const data  = await axios.get(`${API}`);
  return data.data;
};

