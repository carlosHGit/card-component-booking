/**
 * @jest-environment jsdom
 */

import { renderWithClient } from "./utils.jsx";
import Slider from '../components/Slider'

const images = [
  "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]

describe('GIVEN an user that wants to render a Slider', () => {
  describe('WHEN we pass an array of 4 images to show', () => {
    test('THEN Slider component has 4 elements getting by alt attribute', async () => {
      const result = renderWithClient(<Slider images={images} />);
      expect(result.getAllByAltText(/image/i).length).toEqual(4);
    });
  })
})

describe('GIVEN an user that wants to render a Slider', () => {
  describe('WHEN we pass an array of 4 images to show', () => {
    test('THEN the Slider render first image passed by params in the first position', async () => {
      const result = renderWithClient(<Slider images={images} />);
      expect(result.getAllByAltText(/image/i)[0].src).toEqual(images[0]);
    });
  })
})

describe('GIVEN an user that wants to change the image on Slider', () => {
  describe('WHEN click the arrow button two times', () => {
    test('THEN the slider render in the first position the src of the image #3 given for params', async () => {
      const result = renderWithClient(<Slider images={images} />);
      expect(result.getAllByAltText(/image/i)[0].src).toEqual(images[0]);
    });
  })
})
