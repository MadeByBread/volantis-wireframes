import { Link } from 'react-router-dom'
import footerWordmark from '../assets/footer-wordmark.svg'

const columns = [
  {
    title: 'Product',
    links: [
      { to: '/product', label: 'Product' },
      { to: '/technology', label: 'Technology' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '#', label: 'LinkedIn' },
      { href: '#', label: 'X (Twitter)' },
    ],
  },
] as const

type RouteLink = { to: string; label: string; href?: never }
type ExternalLink = { href: string; label: string; to?: never }

function FooterLink({ link }: { link: RouteLink | ExternalLink }) {
  const className =
    'text-sm font-medium leading-[1.3] text-[#57534e] transition hover:text-[#0c0a09]'

  if ('to' in link && link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    )
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="site-container py-28">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-5">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 lg:col-start-1">
            <p className="text-lg font-medium leading-[1.3] text-[#57534e]">
              © VOLANTIS {year}
            </p>
          </div>

          <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-6 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase leading-none text-[#0c0a09]">
                {col.title}
              </h3>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <FooterLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wordmark: full viewport width, capped at 1640px */}
      <div className="mx-auto w-full max-w-[1640px]">
        <img
          src={footerWordmark}
          alt=""
          className="block aspect-[1320/195] w-full object-cover object-left"
        />
      </div>
    </footer>
  )
}
