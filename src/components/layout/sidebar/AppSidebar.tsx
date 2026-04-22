import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Network,
  Activity,
  MoreHorizontal,
  ChevronDown,
} from 'lucide-react'
import { useSidebar } from './hooks/useSidebar'
import Logo from '@/assets/vite.svg'

type NavItem = {
  name: string
  icon: React.ReactNode
  path?: string
}

type NavSection = {
  title: string
  items: NavItem[]
}

const dashboardItem: NavItem = {
  name: "Dashboard",
  icon: <LayoutDashboard size={20} />,
  path: "/dashboard",
}

const navSections: NavSection[] = [
  {
    title: "Management",
    items: [
      { name: "Users", icon: <Users size={20} />, path: "/users" },
      { name: "Network", icon: <Network size={20} />, path: "/network" },
    ],
  },
  {
    title: "Monitoring",
    items: [
      { name: "Activity Logs", icon: <Activity size={20} />, path: "/activity" },
    ],
  },
]

export default function AppSidebar() {
  const {
    isExpanded,
    isHovered,
    isMobile,
    isMobileOpen,
    setIsHovered,
  } = useSidebar()

  const location = useLocation()
  const isCollapsed = !isExpanded && !isHovered && !isMobileOpen

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Management: true,
    Monitoring: true,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const renderItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-1 font-mono">
      {items.map((item) => {
        const active = location.pathname === item.path

        return (
          <li key={item.name}>
            <Link
              to={item.path!}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                ${
                  active
                    ? "bg-emerald-600 text-white font-medium"
                    : "text-emerald-800 hover:bg-emerald-600 hover:text-white dark:text-white"
                }`}
            >
              {item.icon}

              {!isCollapsed && (
                <span className="text-sm font-mono">{item.name}</span>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen border-r
        bg-white dark:bg-gray-950
        transition-all duration-300
        ${isMobile ? (isMobileOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        ${isMobile ? "w-72" : isExpanded || isHovered ? "w-72" : "w-20"}
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-3 px-4 py-4 ${isCollapsed ? "justify-center" : ""}`}>
        <img src={Logo} alt="Logo" className="h-9 w-9" />
        {!isCollapsed && (
          <span className="text-lg font-semibold tracking-tight font-mono text-emerald-800 dark:text-white">
            Observa Nexus
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6 p-4">
        <div>{renderItems([dashboardItem])}</div>
        {navSections.map((section) => (
          <div key={section.title}>
            {isCollapsed ? (
              <div className="mb-3 flex justify-center">
                <MoreHorizontal size={16} className="text-muted-foreground" />
              </div>
            ) : (
              <button
                onClick={() => toggleSection(section.title)}
                className="font-mono mb-2 mt-4 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{section.title}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openSections[section.title] ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            {(isCollapsed || openSections[section.title]) &&
              renderItems(section.items)}
          </div>
        ))}
      </div>
    </aside>
  )
}