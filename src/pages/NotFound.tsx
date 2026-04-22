import { useNavigate } from 'react-router-dom'
import { AlertCircle, LayoutDashboard } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white dark:bg-gray-950">
      <Card className="w-full max-w-xl bg-white dark:bg-gray-900">
        <CardContent className="flex flex-col items-center text-center p-8 md:p-12 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-muted rounded-full blur-2xl opacity-50" />
            <AlertCircle className="relative h-20 w-20 text-red-500" strokeWidth={1.5} />
          </div>

          <div className="space-y-2 text-emerald-800">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight font-mono text-emerald-800 dark:text-white">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold font-mono text-emerald-800 dark:text-white">
              Page not found
            </h2>
          </div>

          <p className="max-w-md font-mono text-emerald-800 dark:text-white">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-800 font-mono text-white"
          >
            <LayoutDashboard className="h-4 w-4" />
            Back to dashboard
          </Button>

        </CardContent>
      </Card>
    </div>
  )
}