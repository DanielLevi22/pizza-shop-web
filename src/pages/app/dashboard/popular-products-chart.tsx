import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const DATA = [
  { product: 'Pepperoni', amount: 30 },
  { product: 'Mussarela', amount: 25 },
  { product: 'Calabresa', amount: 28 },
  { product: 'Frango', amount: 35 },
  { product: 'Carne do sol', amount: 55 },
]
export function PopularProductsChart() {
  const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
  ]

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>

          <BarChart className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={DATA}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {DATA[index].product.length > 12
                      ? DATA[index].product.substring(0, 12).concat('...')
                      : DATA[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {DATA.map((_, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={COLORS[i]}
                  className="stroke-background hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
