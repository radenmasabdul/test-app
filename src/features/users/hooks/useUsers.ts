import { useMemo, useState } from "react"
import { useGetUsersQuery } from "../services/users.api"

export type TableRow = {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  company: string;
}

export function useUsers() {
  const { data = [], isLoading, error } = useGetUsersQuery()

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const limit = 5

  const filteredUsers = useMemo(() => {
    const keyword = search.toLowerCase().trim()

    return data.filter((user) => {
      return (
        user.name.toLowerCase().includes(keyword) ||
        user.username.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword) ||
        user.address.city.toLowerCase().includes(keyword) ||
        user.company.name.toLowerCase().includes(keyword)
      )
    })
  }, [data, search])

  const total = filteredUsers.length

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * limit
    const end = start + limit

    return filteredUsers.slice(start, end)
  }, [filteredUsers, page])

  const tableData: TableRow[] = useMemo(() => {
    return paginatedUsers.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      company: user.company.name,
    }))
  }, [paginatedUsers])

  const handleSearch = ({ keyword }: { keyword: string }) => {
    setSearch(keyword)
    setPage(1)
  }

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage)
  }

  return {
    tableData,
    total,
    page,
    limit,
    search,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
  }
}