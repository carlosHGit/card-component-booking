import { useRef } from 'react';
import styled from 'styled-components';
import rigthArrow from '../assets/logos/icons-rigth-arrow.svg'
import leftArrow from '../assets/logos/icons-rigth-arrow.svg'
import Image from 'next/image'



export default function Slider(props) {
  const sliderImages = props.images;
  const velocidad = 300; // a posible env/config vble in he future
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {

      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener('transitionend', transicion);
      }
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const before = async () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      await setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  return (
    <MainContainer>
      <SliderContainer ref={slideshow}>
        {sliderImages.map(image => (
          <Slide key={image}>
            <a>
              <ImageContainer
                alt='image'
                src={image}
                width={291}
                height={260}
                objectFit={'cover'}
              />
            </a>
          </Slide>
        ))}
      </SliderContainer>
      <SliderControls>
        <Arrow onClick={before}>
          <ArrowContainer>
            {/* <Image
              alt=''
              src={leftArrow}
            /> */}
            <img
              alt='lArrow'
              src={'https://cdn-icons-png.flaticon.com/128/1665/1665761.png'}
              height={40}
              width={40}
            />
          </ArrowContainer>
        </Arrow>
        <Arrow rigth onClick={next}>
          <ArrowContainer>
            {/* <Image
              alt=''
              src={rigthArrow}
              /> */}
            <img
              alt='rArrow'
              src={'https://cdn-icons-png.flaticon.com/128/1665/1665761.png'}
              height={40}
              width={40}
            />
          </ArrowContainer>
        </Arrow>
      </SliderControls>
    </MainContainer>
  );
}

const ArrowContainer = styled.div`
  display:  grid;
  place-items: center;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: white;
`;

const ImageContainer = styled.img`
  border-radius: 32px;
`;

const MainContainer = styled.div`
	position: relative;
`;

const SliderContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
  min-height: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	position: relative;
`;

const SliderControls = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Arrow = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
  transform:  ${props => props.rigth ? '' : 'rotate(180deg)'};

	${props => props.rigth ? 'right: 0' : 'left: 0'}
`;

export { Slider, Slide };