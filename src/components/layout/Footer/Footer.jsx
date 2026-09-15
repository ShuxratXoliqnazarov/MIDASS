import { Link } from 'react-router-dom'

import Container from '@/components/ui/Container'
import { CONTACTS } from '@/constants/contacts'
import { FOOTER_NAV } from '@/constants/navigation'

// TODO: сверстать по макету (Figma: компонент «Footer »).
// Сейчас это минимальный каркас.
export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <Container className="flex flex-wrap items-center justify-between gap-6 text-caption">
        <nav className="flex flex-wrap gap-6">
          {FOOTER_NAV.map((item) => (
            <Link key={item.title} to={item.to} className="underline hover:text-primary">
              {item.title}
            </Link>
          ))}
        </nav>

        <span className="text-muted">{CONTACTS.copyright}</span>
      </Container>
    </footer>
  )
}
