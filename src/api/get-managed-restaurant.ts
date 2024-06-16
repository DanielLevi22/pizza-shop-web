import { api } from '@/lib/axios'

export interface getManagerRestaurantResponse {
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<getManagerRestaurantResponse>(
    '/managed-restaurante',
  )

  return response.data
}
