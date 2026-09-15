import { Outlet } from 'react-router-dom'

import ScrollToTop from '@/components/common/ScrollToTop'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

// Общий каркас для всех страниц: Header сверху, Footer снизу,
// текущая страница рендерится на месте <Outlet />.
// page-glow — синее свечение на фоне (слой «bg» в Figma).
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip page-glow">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
