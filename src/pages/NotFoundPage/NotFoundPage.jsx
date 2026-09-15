import { Link } from 'react-router-dom'

import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'

export default function NotFoundPage() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-display leading-none text-primary">404</h1>
      <p className="mt-6 text-body">Страница не найдена</p>
      <Link
        to={ROUTES.HOME}
        className="mt-8 inline-block text-caption uppercase underline hover:text-primary"
      >
        На главную
      </Link>
    </Container>
  )
}
