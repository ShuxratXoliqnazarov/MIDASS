const DRIPS = Array.from({ length: 16 }, (_, i) => i)

// Декоративные капли жёлтого «сырного соуса», бесконечно стекающие с нижнего
// края хедера — у каждой капли своя длительность/задержка для эффекта таяния.
export default function CheeseDrip() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-full flex justify-around overflow-visible px-page"
    >
      {DRIPS.map((i) => (
        <span
          key={i}
          className="h-3 w-[4px] origin-top rounded-b-full bg-gradient-to-b from-primary to-primary/0 md:h-6 md:w-[6px]"
          style={{
            animation: `cheese-drip ${2.2 + (i % 5) * 0.3}s ease-in-out ${(i % 7) * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
