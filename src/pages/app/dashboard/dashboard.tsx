import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amoun-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <meta
        property="og:image"
        content="https://pizza-shop-web-rouge.vercel.app/opengraph.png"
      />
      <meta
        property="og:url"
        content="https://pizza-shop-web-rouge.vercel.app/pagina"
      />
      <meta property="og:type" content="website" />
      <meta
        name="twitter:image"
        content="https://pizza-shop-web-rouge.vercel.app/opengraph.png"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
