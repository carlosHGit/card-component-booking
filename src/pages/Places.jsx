import PlaceCard from "../components/PlaceCard";
import Header from "../components/Header";
import styled from 'styled-components';
import {usePlaces} from '../hooks/useGetPlaces'



export default function Places() {
  // const test = usePlaces();
  const { data: places, error, isLoading } = usePlaces();

  return (
    <>
      <Header/>
      {error && <p>Error fetching posts: {error.message}</p>}

      {isLoading &&
        <LoaderContainer>
          <LoadingMessage>
            Loading places...
          </LoadingMessage>
        </LoaderContainer>}
      {/* {console.log(places,'**** dentro del comp********')} */}
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