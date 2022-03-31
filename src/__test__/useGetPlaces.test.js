import { rest } from 'msw'
import { renderHook } from '@testing-library/react-hooks'
import { server } from '../setupTests'
import { createWrapper } from './utils'
import { usePlaces } from '../hooks/useGetPlaces'

describe('GIVEN an user that wants to fetch places from EndPoint', () => {
  describe('WHEN the server return 3 places', () => {
    test('THEN react query first loading and then an array of 3 positions', async () => {
      const { result, waitFor } = renderHook(() => usePlaces(), {
        wrapper: createWrapper()
      })
      await waitFor(() => result.current.isSuccess)
      expect(result.current.data?.length).toBe(1)
    })
  })
})

describe('GIVEN an user that wants to fetch places from EndPoint', () => {
  describe('WHEN the server returns 500 code', () => {
    test('THEN react query await for "isError" state and then check that\
      "error" exists and "data" does not exist', async () => {
      server.use(
        rest.get('*', (req, res, ctx) => {
          return res(ctx.status(500))
        })
      )
      const { result, waitFor } = renderHook(() => usePlaces(), {
        wrapper: createWrapper()
      })
      await waitFor(() => result.current.isError)
      expect(result.current.data).toBeUndefined() && expect(result.current.error).toBeDefined()
    })
  })
})
