import PlaceCard from "../components/PlaceCard";
import useGetPlaces from '../hooks/useGetPlaces'


export default function Places() {
  const { data: places, error, isLoading } = useGetPlaces();

  return (
    <>
      {error && <section>Error fetching posts: {error.message}</section>}

      {isLoading && <section>Loading places... </section>}

      {places && places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </>
  )
}


