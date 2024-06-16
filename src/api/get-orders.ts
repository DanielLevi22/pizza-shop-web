import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
}

interface getOrdersResponse {
  orders: {
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
    createdAt: string
    orderId: string
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<getOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
