import heroImage from '@/assets/images/hero-salmon.jpg'
import Container from '@/components/ui/Container'
import { CONTACTS } from '@/constants/contacts'
import { FEATURED_DESSERT_ID, getDishById, HERO_DISH_ID } from '@/data/dishes'

import DotsPattern from './DotsPattern'
import FeaturedDessert from './FeaturedDessert'
import PromoDish from './PromoDish'

/*
 * Первый экран. Элементы стоят абсолютно, как в Figma.
 * phone: только заголовок
 * 768:   фото на всю ширину, контакты справа
 * 1024+: фото справа, контакты и «Тирамису» слева
 */
export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative h-[197px] md:h-[1090px] lg:h-[1100px] xl:h-[1060px]">
          <h1 className="relative z-10 max-w-[318px] pt-[33px] text-subheading md:pt-[34px] lg:max-w-[312px] lg:pt-[52px]">
            Доставка готовой еды из фермерских продуктов!
          </h1>

          <DotsPattern className="absolute top-[158px] -left-[76px] hidden size-[184px] md:block lg:top-[176px] xl:-left-[77px]" />

          <address className="absolute top-[34px] right-0 hidden flex-col items-end not-italic md:flex lg:top-[397px] lg:right-auto lg:left-0 lg:items-start">
            <a
              href={CONTACTS.phoneHref}
              className="text-subheading transition-colors hover:text-primary"
            >
              {CONTACTS.phone}
            </a>
            <a
              href={CONTACTS.emailHref}
              className="mt-[7px] text-[18px] leading-[22px] underline transition-colors hover:text-primary"
            >
              {CONTACTS.email}
            </a>
          </address>

          <div className="absolute top-[198px] -right-[var(--page-x)] left-0 hidden h-[504px] overflow-hidden md:block lg:top-0 lg:left-[376px] lg:h-[632px] xl:left-[380px] xl:h-[680px]">
            <img src={heroImage} alt="" className="size-full object-cover" />
          </div>

          <DotsPattern className="absolute top-[640px] -right-[190px] hidden size-[364px] md:block lg:top-[550px] lg:-right-[262px] xl:top-[560px] xl:-right-[141px]" />

          <PromoDish
            dish={getDishById(HERO_DISH_ID)}
            className="absolute top-[566px] left-[21px] z-10 hidden md:block lg:top-[476px] lg:left-[427px] xl:top-[461px] xl:left-[452px]"
          />

          <FeaturedDessert
            dish={getDishById(FEATURED_DESSERT_ID)}
            className="absolute top-[693px] left-px z-10 hidden lg:block xl:top-[740px] xl:-left-[26px]"
          />
        </div>
      </Container>
    </section>
  )
}
