
import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { RevenueOverview } from './RevenueOverview'
import { PayoutsHistory } from './PayoutsHistory'
import { ModeToggle } from './mode-toggle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { UserNav } from './UserNav'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="border-b px-6 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Revenue & Payouts Dashboard</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="payouts">Payouts</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <RevenueOverview />
            </TabsContent>
            <TabsContent value="payouts" className="space-y-4">
              <PayoutsHistory />
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold">Analytics</h3>
                <p className="text-muted-foreground">Detailed analytics coming soon.</p>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold">Settings</h3>
                <p className="text-muted-foreground">Configure your dashboard preferences.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}