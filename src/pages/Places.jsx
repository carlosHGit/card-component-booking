import PlaceCard from "../components/PlaceCard";
import useGetPlaces from '../hooks/useGetPlaces';
import styled from 'styled-components';



export default function Places() {
  const { data: places, error, isLoading } = useGetPlaces();

  return (
    <>
      {error && <p>Error fetching posts: {error.message}</p>}

      {isLoading &&
        <LoaderContainer>
          <LoadingMessage>
            Loading places...
          </LoadingMessage>
        </LoaderContainer>}

      {places && places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </>
  )
}


const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;


const LoadingMessage = styled.p`
  color: lightcoral;
;
`;