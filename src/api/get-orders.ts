import { api } from '@/lib/axios'

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

export async function getOrders() {
  const response = await api.get<getOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
