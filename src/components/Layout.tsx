import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
