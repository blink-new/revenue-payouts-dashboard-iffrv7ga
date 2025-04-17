
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { RevenueChart } from "./RevenueChart"
import { RevenueMetrics } from "./RevenueMetrics"
import { Button } from "./ui/button"
import { Download, Calendar } from "lucide-react"
import { DatePickerWithRange } from "./date-range-picker"
import { addDays } from "date-fns"

export function RevenueOverview() {
  const [date, setDate] = useState({
    from: new Date(2023, 0, 1),
    to: addDays(new Date(), 0),
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Revenue Overview</h2>
          <p className="text-muted-foreground">
            Track your revenue and payout performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <RevenueMetrics />
      
      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
          <TabsTrigger value="balance">Balance</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>
                  Your revenue over the selected period
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Tabs defaultValue="weekly" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pl-2">
              <RevenueChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payout History</CardTitle>
              <CardDescription>
                Your recent payouts and pending transfers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">June 2023 Payout</p>
                      <p className="text-sm text-muted-foreground">Processed on Jul 2, 2023</p>
                    </div>
                  </div>
                  <div className="font-medium">$12,234.00</div>
                </div>
                <div className="flex items-center justify-between border-t p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">May 2023 Payout</p>
                      <p className="text-sm text-muted-foreground">Processed on Jun 2, 2023</p>
                    </div>
                  </div>
                  <div className="font-medium">$10,675.00</div>
                </div>
                <div className="flex items-center justify-between border-t p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">April 2023 Payout</p>
                      <p className="text-sm text-muted-foreground">Processed on May 2, 2023</p>
                    </div>
                  </div>
                  <div className="font-medium">$9,389.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="balance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Balance</CardTitle>
              <CardDescription>
                Your current balance and pending payouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Available for payout</p>
                    <p className="text-3xl font-bold">$4,250.00</p>
                  </div>
                  <Button>Withdraw</Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Pending clearance</p>
                    <p className="text-sm font-medium">$1,500.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Processing</p>
                    <p className="text-sm font-medium">$0.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">On hold</p>
                    <p className="text-sm font-medium">$250.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}