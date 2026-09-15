import Hero from './components/Hero'
import MenuSlider from './components/MenuSlider'
import PopularDishes from './components/PopularDishes'

// Figma: Desktop_Главная, Tablet_Главная (1024 / 768), Главная (Phone)
export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDishes />
      <MenuSlider />
    </>
  )
}
