import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Product',
    links: [
      { to: '/product', label: 'Volantis A-1' },
      { to: '/technology', label: 'Technology' },
      { to: '/intake', label: 'Reserve capacity' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/about#careers', label: 'Careers' },
      { to: '/faqs', label: 'FAQs' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
]

const socials = ['X', 'LI', 'GH', 'YT']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-neutral-900">
              Volantis
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
              Photonic interconnect for large-model AI inference.
            </p>
            <div className="mt-4">
              <p className="text-xs font-medium text-neutral-500">
                Investor inquiries
              </p>
              <a
                href="mailto:investors@volantis.example"
                className="text-sm text-neutral-700 underline-offset-4 hover:underline"
              >
                investors@volantis.example
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-600 transition hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-500">
            &copy; {year} Volantis. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <span
                key={s}
                aria-label={`Social link ${s}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 text-[10px] font-semibold text-neutral-500"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
