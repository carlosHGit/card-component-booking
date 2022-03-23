import axios from "axios";
import { useQuery } from "react-query";


const API = process.env.PLACES_APP_API || "http://localhost:3000/api";


const getPlaces = () =>
  axios.get(`${API}/places`)
    .then(response => response.data)


export default function useGetPlaces() {
  return useQuery(["places"], () => getPlaces());
}
