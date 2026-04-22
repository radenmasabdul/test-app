import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../stores'
import Alerts from '../components/global/Alerts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.mode)
  
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <>
      <Alerts />
      {children}
    </>
  )
}
