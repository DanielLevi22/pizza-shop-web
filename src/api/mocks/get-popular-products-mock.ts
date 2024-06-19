import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'
export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pepperoni', amount: 30 },
    { product: 'Mussarela', amount: 25 },
    { product: 'Calabresa', amount: 28 },
    { product: 'Frango', amount: 35 },
    { product: 'Carne do sol', amount: 55 },
  ])
})
