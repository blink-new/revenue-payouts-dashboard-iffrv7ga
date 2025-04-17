
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Download, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

// Sample data - in a real app, this would come from an API
const payouts = [
  {
    id: "PAY-001",
    date: "2023-12-01",
    amount: 12234.00,
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-12345",
  },
  {
    id: "PAY-002",
    date: "2023-11-01",
    amount: 10675.00,
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-12346",
  },
  {
    id: "PAY-003",
    date: "2023-10-01",
    amount: 9389.00,
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-12347",
  },
  {
    id: "PAY-004",
    date: "2023-09-01",
    amount: 8765.00,
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-12348",
  },
  {
    id: "PAY-005",
    date: "2023-08-01",
    amount: 7654.00,
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-12349",
  },
  {
    id: "PAY-006",
    date: "2024-01-01",
    amount: 4250.00,
    status: "pending",
    method: "Bank Transfer",
    reference: "REF-12350",
  },
]

export function PayoutsHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  
  const filteredPayouts = payouts.filter(payout => {
    const matchesSearch = payout.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          payout.reference.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || payout.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payout History</h2>
          <p className="text-muted-foreground">
            View and manage all your past and upcoming payouts
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Payouts</CardTitle>
          <CardDescription>
            A list of all payouts including their status and amount.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search by ID or reference..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[300px]"
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payout ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayouts.map((payout) => (
                  <TableRow key={payout.id} className="group hover:bg-muted/50">
                    <TableCell className="font-medium">{payout.id}</TableCell>
                    <TableCell>{new Date(payout.date).toLocaleDateString()}</TableCell>
                    <TableCell>${payout.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={payout.status === "completed" ? "default" : 
                                payout.status === "pending" ? "outline" : "destructive"}
                      >
                        {payout.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{payout.method}</TableCell>
                    <TableCell>{payout.reference}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}