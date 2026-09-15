// TODO: сверстать по макету (Figma: «Tablet_Меню», «Меню» на Phone).
// Выезжающее меню для экранов < 1024px, открывается из Header.
export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-dark" onClick={onClose}>
      {/* содержимое меню */}
    </div>
  )
}
