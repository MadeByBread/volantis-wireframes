import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Faq } from '../data/faqs'

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-base font-medium text-neutral-900">{q}</span>
        <span className="shrink-0 text-xl leading-none text-neutral-500">
          {open ? '–' : '+'}
        </span>
      </button>
      {open && (
        <p className="pr-8 pb-5 text-sm leading-relaxed text-neutral-600">{a}</p>
      )}
    </div>
  )
}

type FaqListProps = {
  items: Faq[]
  showAllLink?: boolean
}

export function FaqList({ items, showAllLink = false }: FaqListProps) {
  return (
    <div>
      {items.map((f) => (
        <FaqItem key={f.q} {...f} />
      ))}
      {showAllLink && (
        <p className="pt-6 text-sm">
          <Link
            to="/faqs"
            className="font-medium text-neutral-700 underline-offset-4 hover:underline"
          >
            See all FAQs &rarr;
          </Link>
        </p>
      )}
    </div>
  )
}
