import PlaceCard from "../components/PlaceCard";
import { getPlaces } from '../utils/places'
import { useQuery } from "react-query";
import { randomInfo } from '../utils/fakeData'


export default function Home() {
  console.log(randomInfo(1))
  const { data: places, error, isLoading } = useQuery(["places"], getPlaces)

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

