import { Link } from 'react-router-dom'

import fireIcon from '@/assets/images/fire.webp'
import promoBottom from '@/assets/icons/promo-bottom.svg'
import promoTop from '@/assets/icons/promo-top.svg'
import { getCatalogPath } from '@/constants/routes'
import { cn } from '@/utils/cn'

// Карточка категории в слайдере «Меню» (UI kit → menu).
// Hover: карточка вытягивается на 10px вверх и вниз, фон синий, тарелки увеличиваются.
export default function MenuCategoryCard({ category }) {
  const isPromo = category.slug === 'promo'

  return (
    <Link
      to={getCatalogPath(category.slug)}
      className="group relative block h-[180px] w-[130px] md:h-[314px] md:w-[233px]"
    >
      <div
        className={cn(
          'absolute inset-0 overflow-hidden transition-all duration-300 group-hover:-inset-y-[10px]',
          isPromo ? 'bg-accent' : 'bg-black group-hover:bg-navy',
        )}
      >
        {/* слой размером с карточку — позиции тарелок не прыгают при hover */}
        <div className="absolute inset-x-0 top-1/2 h-[180px] -translate-y-1/2 md:h-[314px]">
          {isPromo ? (
            <>
              <img
                src={promoTop}
                alt=""
                className="absolute top-[7.8%] left-[7.7%] w-[85.4%] md:top-[7.3%] md:left-[17.2%] md:w-[67.4%]"
              />
              <img
                src={promoBottom}
                alt=""
                className="absolute bottom-[7.8%] left-[7.7%] w-[85.4%] md:bottom-[9.2%] md:left-[17.2%] md:w-[67.4%]"
              />
            </>
          ) : (
            category.plates?.map((plate, index) => (
              <img
                key={plate.src}
                src={plate.src}
                alt=""
                loading="lazy"
                style={{ left: `${plate.x}%`, top: `${plate.y}%`, width: `${plate.w}%` }}
                className={cn(
                  'absolute max-w-none transition-transform duration-300 group-hover:scale-[1.23]',
                  index === 0 ? 'group-hover:-translate-y-[14%]' : 'group-hover:translate-y-[12%]',
                )}
              />
            ))
          )}
        </div>
      </div>

      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center gap-1 text-center text-[14px] leading-[17px] md:text-body md:leading-6',
          isPromo ? 'uppercase' : 'mx-auto max-w-[80px] group-hover:underline md:max-w-[120px]',
        )}
      >
        {category.title}
        {isPromo && <img src={fireIcon} alt="" className="size-[14px] md:size-[18px]" />}
      </span>
    </Link>
  )
}
