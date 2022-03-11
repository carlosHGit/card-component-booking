import axios from "axios";

const API = process.env.PLACES_APP_API || "http://localhost:3005";

export const getPlacesById = async (placeId) => {
  const { data } = await axios.get(`${API}/places/${placeId}`);
  return data;
};

export const getPlaces = async () => {
  const { data } = await axios.get(`${API}/places`);
  return data;
};

