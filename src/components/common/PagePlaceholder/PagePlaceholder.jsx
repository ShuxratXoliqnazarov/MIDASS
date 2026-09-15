import Container from '@/components/ui/Container'

// ВРЕМЕННАЯ заглушка страницы. Удаляется, когда страница свёрстана.
export default function PagePlaceholder({ title, figmaFrame, children }) {
  return (
    <Container className="py-20">
      <h1 className="text-heading leading-tight">{title}</h1>
      <p className="mt-4 text-caption text-muted">
        Figma: <span className="text-primary">{figmaFrame}</span> — страница ещё не свёрстана
      </p>
      {children}
    </Container>
  )
}
