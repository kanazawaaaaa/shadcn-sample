"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "インタラクティブなエリアチャート"

const chartData = [
  { date: "2024-04-01", svod: 1200000, avod: 850000, tvod: 450000 },
  { date: "2024-04-02", svod: 1150000, avod: 920000, tvod: 380000 },
  { date: "2024-04-03", svod: 1280000, avod: 780000, tvod: 520000 },
  { date: "2024-04-04", svod: 1350000, avod: 1100000, tvod: 620000 },
  { date: "2024-04-05", svod: 1420000, avod: 980000, tvod: 580000 },
  { date: "2024-04-06", svod: 1380000, avod: 1200000, tvod: 640000 },
  { date: "2024-04-07", svod: 1250000, avod: 860000, tvod: 490000 },
  { date: "2024-04-08", svod: 1480000, avod: 1350000, tvod: 720000 },
  { date: "2024-04-09", svod: 980000, avod: 620000, tvod: 320000 },
  { date: "2024-04-10", svod: 1320000, avod: 890000, tvod: 580000 },
  { date: "2024-04-11", svod: 1410000, avod: 1280000, tvod: 680000 },
  { date: "2024-04-12", svod: 1290000, avod: 950000, tvod: 540000 },
  { date: "2024-04-13", svod: 1520000, avod: 1420000, tvod: 780000 },
  { date: "2024-04-14", svod: 1180000, avod: 830000, tvod: 420000 },
  { date: "2024-04-15", svod: 1100000, avod: 750000, tvod: 380000 },
  { date: "2024-04-16", svod: 1220000, avod: 880000, tvod: 450000 },
  { date: "2024-04-17", svod: 1650000, avod: 1580000, tvod: 820000 },
  { date: "2024-04-18", svod: 1580000, avod: 1480000, tvod: 780000 },
  { date: "2024-04-19", svod: 1350000, avod: 920000, tvod: 580000 },
  { date: "2024-04-20", svod: 1050000, avod: 680000, tvod: 340000 },
  { date: "2024-04-21", svod: 1200000, avod: 850000, tvod: 420000 },
  { date: "2024-04-22", svod: 1280000, avod: 790000, tvod: 480000 },
  { date: "2024-04-23", svod: 1220000, avod: 920000, tvod: 520000 },
  { date: "2024-04-24", svod: 1680000, avod: 1320000, tvod: 720000 },
  { date: "2024-04-25", svod: 1380000, avod: 1050000, tvod: 620000 },
  { date: "2024-04-26", svod: 980000, avod: 580000, tvod: 280000 },
  { date: "2024-04-27", svod: 1720000, avod: 1680000, tvod: 920000 },
  { date: "2024-04-28", svod: 1150000, avod: 780000, tvod: 380000 },
  { date: "2024-04-29", svod: 1480000, avod: 1180000, tvod: 680000 },
  { date: "2024-04-30", svod: 1820000, avod: 1520000, tvod: 980000 },
  { date: "2024-05-01", svod: 1250000, avod: 920000, tvod: 520000 },
  { date: "2024-05-02", svod: 1520000, avod: 1280000, tvod: 720000 },
  { date: "2024-05-03", svod: 1380000, avod: 950000, tvod: 580000 },
  { date: "2024-05-04", svod: 1680000, avod: 1580000, tvod: 880000 },
  { date: "2024-05-05", svod: 1920000, avod: 1680000, tvod: 980000 },
  { date: "2024-05-06", svod: 2050000, avod: 1920000, tvod: 1120000 },
  { date: "2024-05-07", svod: 1720000, avod: 1280000, tvod: 780000 },
  { date: "2024-05-08", svod: 1280000, avod: 890000, tvod: 480000 },
  { date: "2024-05-09", svod: 1420000, avod: 980000, tvod: 520000 },
  { date: "2024-05-10", svod: 1580000, avod: 1380000, tvod: 720000 },
  { date: "2024-05-11", svod: 1650000, avod: 1180000, tvod: 680000 },
  { date: "2024-05-12", svod: 1350000, avod: 1050000, tvod: 580000 },
  { date: "2024-05-13", svod: 1320000, avod: 820000, tvod: 480000 },
  { date: "2024-05-14", svod: 1980000, avod: 1820000, tvod: 1080000 },
  { date: "2024-05-15", svod: 1880000, avod: 1580000, tvod: 920000 },
  { date: "2024-05-16", svod: 1680000, avod: 1680000, tvod: 880000 },
  { date: "2024-05-17", svod: 2120000, avod: 1820000, tvod: 1020000 },
  { date: "2024-05-18", svod: 1580000, avod: 1480000, tvod: 780000 },
  { date: "2024-05-19", svod: 1420000, avod: 920000, tvod: 580000 },
  { date: "2024-05-20", svod: 1280000, avod: 980000, tvod: 520000 },
  { date: "2024-05-21", svod: 1050000, avod: 680000, tvod: 320000 },
  { date: "2024-05-22", svod: 1020000, avod: 620000, tvod: 280000 },
  { date: "2024-05-23", svod: 1480000, avod: 1280000, tvod: 720000 },
  { date: "2024-05-24", svod: 1520000, avod: 1050000, tvod: 680000 },
  { date: "2024-05-25", svod: 1380000, avod: 1120000, tvod: 620000 },
  { date: "2024-05-26", svod: 1320000, avod: 820000, tvod: 480000 },
  { date: "2024-05-27", svod: 1880000, avod: 1720000, tvod: 980000 },
  { date: "2024-05-28", svod: 1420000, avod: 980000, tvod: 520000 },
  { date: "2024-05-29", svod: 1020000, avod: 620000, tvod: 280000 },
  { date: "2024-05-30", svod: 1680000, avod: 1380000, tvod: 780000 },
  { date: "2024-05-31", svod: 1320000, avod: 920000, tvod: 520000 },
  { date: "2024-06-01", svod: 1280000, avod: 850000, tvod: 480000 },
  { date: "2024-06-02", svod: 1980000, avod: 1680000, tvod: 1020000 },
  { date: "2024-06-03", svod: 1150000, avod: 780000, tvod: 380000 },
  { date: "2024-06-04", svod: 1920000, avod: 1520000, tvod: 920000 },
  { date: "2024-06-05", svod: 1080000, avod: 680000, tvod: 320000 },
  { date: "2024-06-06", svod: 1520000, avod: 1120000, tvod: 680000 },
  { date: "2024-06-07", svod: 1650000, avod: 1480000, tvod: 820000 },
  { date: "2024-06-08", svod: 1780000, avod: 1320000, tvod: 780000 },
  { date: "2024-06-09", svod: 1950000, avod: 1820000, tvod: 1080000 },
  { date: "2024-06-10", svod: 1280000, avod: 920000, tvod: 480000 },
  { date: "2024-06-11", svod: 1120000, avod: 720000, tvod: 380000 },
  { date: "2024-06-12", svod: 2080000, avod: 1680000, tvod: 1020000 },
  { date: "2024-06-13", svod: 1050000, avod: 620000, tvod: 280000 },
  { date: "2024-06-14", svod: 1880000, avod: 1520000, tvod: 920000 },
  { date: "2024-06-15", svod: 1650000, avod: 1380000, tvod: 780000 },
  { date: "2024-06-16", svod: 1720000, avod: 1280000, tvod: 720000 },
  { date: "2024-06-17", svod: 2120000, avod: 1920000, tvod: 1180000 },
  { date: "2024-06-18", svod: 1220000, avod: 820000, tvod: 420000 },
  { date: "2024-06-19", svod: 1680000, avod: 1180000, tvod: 720000 },
  { date: "2024-06-20", svod: 1850000, avod: 1680000, tvod: 980000 },
  { date: "2024-06-21", svod: 1350000, avod: 980000, tvod: 520000 },
  { date: "2024-06-22", svod: 1620000, avod: 1120000, tvod: 680000 },
  { date: "2024-06-23", svod: 2180000, avod: 1980000, tvod: 1220000 },
  { date: "2024-06-24", svod: 1280000, avod: 850000, tvod: 420000 },
  { date: "2024-06-25", svod: 1320000, avod: 920000, tvod: 480000 },
  { date: "2024-06-26", svod: 1920000, avod: 1520000, tvod: 920000 },
  { date: "2024-06-27", svod: 2020000, avod: 1820000, tvod: 1080000 },
  { date: "2024-06-28", svod: 1350000, avod: 950000, tvod: 520000 },
  { date: "2024-06-29", svod: 1180000, avod: 780000, tvod: 380000 },
  { date: "2024-06-30", svod: 1980000, avod: 1680000, tvod: 1020000 },
]

const chartConfig = {
  revenue: {
    label: "収益",
  },
  svod: {
    label: "SVOD",
    color: "hsl(var(--chart-1))",
  },
  avod: {
    label: "AVOD",
    color: "hsl(var(--chart-2))",
  },
  tvod: {
    label: "TVOD",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>収益推移</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            過去3ヶ月間の収益データ
          </span>
          <span className="@[540px]/card:hidden">過去3ヶ月の収益</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">過去3ヶ月</ToggleGroupItem>
            <ToggleGroupItem value="30d">過去30日</ToggleGroupItem>
            <ToggleGroupItem value="7d">過去7日</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="過去3ヶ月" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                過去3ヶ月
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                過去30日
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                過去7日
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSvod" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-svod)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-svod)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAvod" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-avod)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-avod)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTvod" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-tvod)"
                  stopOpacity={0.6}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-tvod)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                const month = date.getMonth() + 1
                const day = date.getDate()
                return `${month}/${day}`
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    const date = new Date(value)
                    const year = date.getFullYear()
                    const month = date.getMonth() + 1
                    const day = date.getDate()
                    return `${year}年${month}月${day}日`
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="tvod"
              type="natural"
              fill="url(#fillTvod)"
              stroke="var(--color-tvod)"
              stackId="a"
            />
            <Area
              dataKey="avod"
              type="natural"
              fill="url(#fillAvod)"
              stroke="var(--color-avod)"
              stackId="a"
            />
            <Area
              dataKey="svod"
              type="natural"
              fill="url(#fillSvod)"
              stroke="var(--color-svod)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
