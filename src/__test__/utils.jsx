import { render } from '@testing-library/react'
import { rest } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const handlers = [
  rest.get(
    '*/places',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            "id": 1,
            "title1": "Loft en Medellín",
            "title2": "New Loft near Parque de los Pies Des...",
            "perks": "2 huéspedes · 1 habitación · 1 cama · 1 baño · Wifi · Cocina · Estacionamiento gratuito",
            "calification": "4,53",
            "comments": "15",
            "price": "285,044",
            "like": true,
            "images": [
              "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ]
          }
        ]
        )
      )
    }
  ),
]

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>
      ),
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  )
}
