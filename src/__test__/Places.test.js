/**
 * @jest-environment jsdom
 */

import { renderWithClient } from "./utils.jsx";
import { server } from '../setupTests';
import { rest } from "msw";
import Places from '../pages/Places'


describe('GIVEN an user that wants to render a card', () => {
  describe('WHEN the user load de root', () => {
    test('THEN the places componet render a card with title', async () => {
      const result = renderWithClient(<Places />);
      expect(await result.findByText(/Loft en Medellín/i)).toBeInTheDocument();
    })
  })
})


describe('GIVEN an user that wants to render a card', () => {
  describe('WHEN the user fetch data with error', () => {
    test('THEN the UI show the error message', async () => {
      server.use(
        rest.get('*', (req, res, ctx) => {
          return res(ctx.status(500));
        })
      );
      const result = renderWithClient(<Places />);
      expect(await result.findByText(/Error Fetching post/i)).toBeInTheDocument();
    });
  })
})
