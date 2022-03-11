import PlaceCard from "../components/PlaceCard";
import { useEffect, useState } from "react";
import MyApp from "./_app";
import { getPlaces } from '../utils/places'
import { useQuery } from "react-query";





export default function Home() {
  const { data: places, error, isLoading } = useQuery(["places"], getPlaces)
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [places, setPlaces] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getPlaces();
  //       setPlaces(data);
  //       setError(null);
  //     } catch (error) {
  //       setError(error);
  //       setPlaces(null);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  if (isLoading) {
    return (
      <div>
        Loading places...
      </div>
    );
  }

  if (error) {
    return (
      <section>
        Error fetching posts: {error.message}
      </section>
    );
  }


  return (
    <>
      {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </>
  )
}
