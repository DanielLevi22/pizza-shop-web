import { api } from '@/lib/axios'
export interface SignUpBody {
  email: string
  managerName: string
  phone: string
  restaurantName: string
}
export async function signUp({
  email,
  managerName,
  phone,
  restaurantName,
}: SignUpBody) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
