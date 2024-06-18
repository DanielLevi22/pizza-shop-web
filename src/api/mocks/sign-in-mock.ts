import { http, HttpResponse } from 'msw'

import { SigInBody } from '../sign-in'

export const signInMock = http.post<never, SigInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'daniel@email.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-cookie': 'auth=sample-jwt',
        },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
