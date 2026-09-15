import { Link } from 'react-router-dom'

import { Logo } from '@/components/icons'
import Container from '@/components/ui/Container'
import { CONTACTS } from '@/constants/contacts'
import { FOOTER_LEGAL, FOOTER_NAV } from '@/constants/navigation'
import { ROUTES } from '@/constants/routes'

// Figma: компонент «Footer ».
// phone: всё столбиком · 768: логотип + контакты, ссылки ниже · 1024+: одна строка
export default function Footer() {
  return (
    <footer className="bg-black">
      <Container className="pt-7 pb-[30px] md:pb-[34px] lg:pt-[50px]">
        <div className="flex flex-wrap items-center gap-y-[21px] md:gap-y-[30px]">
          <Link to={ROUTES.HOME} aria-label="MIDAS — на главную" className="w-full md:w-auto">
            <Logo className="h-[21px] w-[116px] md:h-6 md:w-[135px]" />
          </Link>

          <div className="grid w-full grid-cols-[154px_1fr] items-center md:ml-auto md:flex md:w-auto md:gap-[29px] lg:order-3">
            <a
              href={CONTACTS.phoneHref}
              className="text-[15px] leading-[18px] transition-colors hover:text-primary md:text-body md:leading-6"
            >
              {CONTACTS.phone}
            </a>
            <a
              href={CONTACTS.emailHref}
              className="text-[11px] leading-[13px] underline transition-colors hover:text-primary md:text-tiny md:leading-[15px]"
            >
              {CONTACTS.email}
            </a>
          </div>

          <nav className="grid w-full grid-flow-col grid-cols-[154px_1fr] grid-rows-2 gap-y-[17px] text-[11px] leading-[13px] md:flex md:gap-[50px] md:text-tiny md:leading-[15px] lg:order-2 lg:ml-[59px] lg:w-auto lg:gap-9 xl:ml-[calc((100%+20px)/6-135px)] xl:gap-[50px]">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="justify-self-start underline transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-5 h-px bg-white/30 md:mt-[38px]" />

        <div className="mt-[21px] flex flex-col gap-y-[17px] text-[11px] leading-[13px] md:mt-7 md:text-tiny md:leading-[15px] lg:flex-row lg:items-center">
          <span>{CONTACTS.copyright}</span>

          <div className="flex flex-col gap-[18px] md:flex-row md:gap-[45px] lg:ml-auto">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="self-start underline transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
