import React from 'react'
import Favs from './Favs'
import starLogo from '../assets/logos/icons8-star-90 2.svg'
import Image from 'next/image'
import { Slider } from './Slider'
import styled from 'styled-components'


export default function PlaceCard(props) {
  const defaultImage = ['https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
  

  return (
    <>
      <MainContainer>
        <ImageContainer>
          <SectionSlider>
            {console.log(props.place.images)}
            <Slider images={(props.place.images.length === 0) ? defaultImage : props.place.images } />
          </SectionSlider>
        </ImageContainer>
        <DetailsContainer>
          <CardHeader>
            <p>{props.place.title1}</p>
            <Favs/>
          </CardHeader>
          <CardBody>
            <SubTitleCardBody>
              {props.place.title2}
            </SubTitleCardBody>
            <Line />
            <ParaCardBody>
              {props.place.perks}
            </ParaCardBody>
          </CardBody>
          <CardFooter>
            <ContainerPuntuation>
              {/* <Image
                src={starLogo}
                alt={"Place image"}
              /> */}
              <img
                src={'https://cdn-icons.flaticon.com/png/128/3984/premium/3984392.png?token=exp=1648696258~hmac=2930df15fa4fbbf45aad5bfa377f9acc'}
                width={30}
                height={30}
                alt={"StarIcon"}></img>
              <p>{props.place.calification}</p>
              <p>{`( ${props.place.comments} Reseñas) `}</p>
            </ContainerPuntuation>
            <ContainerPrice>
              <p>{`$${props.place.price} COP `}</p>
              <p>/ noche</p>
            </ContainerPrice>
          </CardFooter>
        </DetailsContainer>
      </MainContainer>
    </>
  )
}


const SectionSlider = styled.section`
	width: 291px;
	height: 260px;
	overflow: hidden;
`;

const MainContainer = styled.div`
  margin: 50px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 32px;
  width: 850px;
  height: 300px;
  display: grid;
  grid-template-columns: auto 1fr;
  box-shadow: 1px 3px 15px 10px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const ImageContainer = styled.div`
`;

const DetailsContainer = styled.div`
  padding-left: 20px;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  color:rgba(102, 102, 102, 1);
`;

const CardBody = styled.div`
  margin: 0;
`;

const SubTitleCardBody = styled.h2`
  font-size: 26px;
  font-weight: 400;
  margin-top: 0px;
`;

const ParaCardBody = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color:rgba(102, 102, 102, 1);
`;

const Line = styled.hr`
  width: 14%;
  margin: 0;
`;


const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;


const ContainerPuntuation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:nth-child(2){
  font-size: 18px;
  font-weight: 600;
  }

  p:nth-child(3){
  font-size: 18px;
  font-weight: 400;
  color:rgba(102, 102, 102, 1);
}`;


const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p:nth-child(1){
  font-size: 18px;
  font-weight: 600;
}

p:nth-child(2){
  font-size: 18px;
  font-weight: 400;
  color:rgba(102, 102, 102, 1);
}`;