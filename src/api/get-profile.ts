import { api } from '@/lib/axios'

interface getProfileResponse {
  email: string
  phone: string | null
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: Date
}

export async function getProfile() {
  const response = await api.get<getProfileResponse>('/me')

  return response.data
}
