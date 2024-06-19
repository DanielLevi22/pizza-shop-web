import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'
export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '2015-01-01', receipt: 100 },
    { date: '2015-01-02', receipt: 20000 },
    { date: '2015-01-03', receipt: 4000 },
    { date: '2015-01-04', receipt: 3000 },
    { date: '2015-01-05', receipt: 100 },
    { date: '2015-01-06', receipt: 10 },
    { date: '2015-01-07', receipt: 20 },
  ])
})
