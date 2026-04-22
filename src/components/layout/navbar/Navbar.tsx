import { useEffect, useRef, useState } from 'react'
import { Menu, X, MoreHorizontal } from 'lucide-react'
import { useSidebar } from '../sidebar/hooks/useSidebar'
import DarkModeToggle from '../../global/ToggleMode'
import NotificationDropdown from './Notification'
import UserDropdown from './UserDropdown'
import { Button } from '../../ui/button'

export default function Navbar() {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false)
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleToggle = () => {
    if (window.innerWidth >= 1024) toggleSidebar()
    else toggleMobileSidebar()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 flex w-full lg:border-b bg-white dark:bg-gray-950 z-40">
      <div className="flex flex-col items-stretch justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b sm:gap-4 lg:border-b-0 lg:px-0 lg:py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handleToggle}
              className="h-9 w-9"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setApplicationMenuOpen(!isApplicationMenuOpen)}
            className="lg:hidden"
          >
            <MoreHorizontal />
          </Button>
        </div>

        <div
          className={`
            ${isApplicationMenuOpen ? "flex" : "hidden"}
            w-full flex flex-wrap justify-between items-center gap-4 px-5 py-4 border-b
            md:flex-nowrap md:justify-between md:gap-3 md:px-4 md:py-3
            lg:flex lg:flex-nowrap lg:items-center lg:justify-end lg:px-0 lg:py-0 lg:border-none
          `}
        >
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <NotificationDropdown />
          </div>

          <UserDropdown />
        </div>
      </div>
    </header>
  )
}