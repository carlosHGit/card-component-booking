import Link from "next/link";
import styled from 'styled-components';


export default function Home() {
  return (
    <>
      <Container>
        <h1>Bienvenidos a Places Squad</h1>
        <Link href={'/Places'}>
          <Anchor>
            Ir a places
          </Anchor>
        </Link>
      </Container>
    </>
  )
}

const Anchor = styled.a`
  text-decoration: underline;
  color: lightcoral;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  place-items: center;
`;
