import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import { Button } from '../../ui/button'
import { ChevronDown, Loader2 } from 'lucide-react'
import { setAlert } from '../../../stores/alertSlice'
import { logout } from '../../../features/auth/stores/authSlice'
import type { RootState } from '../../../stores'

export default function UserDropdown() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const user = useSelector((state: RootState) => state.auth.user)

  const handleLogout = async () => {
    setLoading(true)

    dispatch(setAlert({
      message: "Logging out...",
      type: "info",
    }))

    await new Promise(resolve => setTimeout(resolve, 500))

    localStorage.removeItem("auth")
    dispatch(logout())

    dispatch(setAlert({
      message: "Logout berhasil",
      type: "success",
    }))

    setLoading(false)
    navigate("/", { replace: true })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          disabled={loading}
          className="flex items-center gap-2 px-2 font-mono"
        >
          <span className="text-sm font-medium">
            {user?.name ?? "User"}
          </span>

          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={12}
        align="end"
        className="w-64 font-mono"
      >
        <div className="px-2 py-1">
          <p className="text-sm font-medium">
            {user?.name ?? "User"}
          </p>
          <p className="text-xs text-muted-foreground">
            {user?.email ?? "user@example.com"}
          </p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="#">
            Edit profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="#">
            Account settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          disabled={loading}
          className="cursor-pointer"
        >
          {loading ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}