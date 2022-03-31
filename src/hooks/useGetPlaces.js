import { useQuery} from "react-query";
import {  getPlaces } from "../api/places";


export function usePlaces() {
  return useQuery('places', getPlaces);
}

