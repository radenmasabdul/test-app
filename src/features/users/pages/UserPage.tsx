import { useMemo } from "react"
import { Link } from "react-router-dom"
import PageContainer from "../../../components/global/PageContainer"
import GlobalHeader from "../../../components/global/GlobalHeader"
import CardContent from "../../../components/global/CardContent"
import GlobalToolbar from "../../../components/global/GlobalToolbar"
import GlobalDataTable from "../../../components/global/GlobalDataTable"
import { Button } from "../../../components/ui/button"
import { Send } from "lucide-react"
import { useUsers, type TableRow } from "../hooks/useUsers"
import { Skeleton } from "../../../components/ui/skeleton"

export default function UserPage() {
  const {
    tableData,
    total,
    page,
    limit,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
  } = useUsers()
  
  const columns = useMemo(() => [
    { key: "name", header: "Name", width: "20%" },
    { key: "username", header: "Username", width: "15%" },
    { key: "email", header: "Email", width: "25%" },
    { key: "city", header: "City", width: "15%" },
    { key: "company", header: "Company", width: "15%" },
    {
      key: "action",
      header: "Action",
      width: "10%",
      render: (row: TableRow) => (
        <div className="flex justify-center gap-2">
          <Link to={`/users/${row.id}`}>
            <Button size="sm" variant="outline">
              <Send className="w-4 h-4" />
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ], [])

  if (error) {
    return (
      <PageContainer>
        <GlobalHeader
          title="Users Management"
          description="Manage users and access system"
        />

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-red-500 font-medium font-mono">
            Failed to load users
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Please try again later
          </p>
        </div>
      </PageContainer>
    )
  }

  if (isLoading) {
    return (
      <PageContainer>
        <GlobalHeader
          title="Users Management"
          description="Manage users and access system"
        />

        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </CardContent>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <GlobalHeader
        title="Users Management"
        description="Manage users and access system"
      />

      <CardContent>
        <div className="flex flex-wrap gap-2 md:gap-10 items-center">
          <div className="flex-1 min-w-70">
            <GlobalToolbar
              onSearch={handleSearch}
            />
          </div>
        </div>
        
        <GlobalDataTable
          columns={columns}
          data={tableData}
          page={page}
          limit={limit}
          total={total}
          onPageChange={handlePageChange}
          loading={isLoading}
        />
      </CardContent>
    </PageContainer>
  )
}