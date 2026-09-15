import { useEffect, useRef, useState } from 'react'

import Container from '@/components/ui/Container'
import SliderArrow from '@/components/ui/SliderArrow'
import { CATEGORIES } from '@/constants/categories'

import MenuCategoryCard from './MenuCategoryCard'

// Блок «Меню»: горизонтальный слайдер категорий, уходит за правый край экрана
export default function MenuSlider() {
  const trackRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateArrows = () => {
    const track = trackRef.current
    setCanScrollPrev(track.scrollLeft > 5)
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 5)
  }

  // пересчитываем стрелки при изменении размера окна
  useEffect(() => {
    const observer = new ResizeObserver(updateArrows)
    observer.observe(trackRef.current)
    return () => observer.disconnect()
  }, [])

  // листаем ровно на одну карточку
  const scrollByCard = (direction) => {
    const track = trackRef.current
    const card = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section className="pb-[77px] md:pb-[157px] xl:pb-[159px]">
      <Container className="flex items-center">
        <h2 className="text-title md:text-display lg:ml-[calc((100%+20px)/4)] xl:ml-[calc((100%+20px)/3)]">
          Меню
        </h2>

        <div className="ml-auto flex gap-5 md:gap-10">
          <SliderArrow
            direction="prev"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard(-1)}
          />
          <SliderArrow direction="next" disabled={!canScrollNext} onClick={() => scrollByCard(1)} />
        </div>
      </Container>

      <ul
        ref={trackRef}
        onScroll={updateArrows}
        className="mt-[23px] no-scrollbar flex snap-x snap-mandatory scroll-pl-gutter gap-[10px] overflow-x-auto py-[10px] pr-[var(--page-x)] pl-gutter md:mt-[54px] md:gap-5"
      >
        {CATEGORIES.map((category) => (
          <li key={category.slug} className="shrink-0 snap-start">
            <MenuCategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  )
}
