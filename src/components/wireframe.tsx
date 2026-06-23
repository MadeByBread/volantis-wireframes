import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

/* ----------------------------------------------------------------------------
   Wireframe primitives — monochrome palette, Zalando Sans + Instrument Sans.
   These are structural building blocks shared across every page.
---------------------------------------------------------------------------- */

type PlaceholderProps = {
  label: string
  /** Tailwind height utility, e.g. "h-64". Defaults to a medium box. */
  height?: string
  className?: string
}

/** Labeled grey box standing in for an image, diagram, chart or logo strip. */
export function Placeholder({
  label,
  height = 'h-56',
  className = '',
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-md border border-dashed border-neutral-400 bg-neutral-200 text-neutral-500 ${height} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center text-sm font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  )
}

/** Greybox strip of placeholder logos. */
export function LogoStrip({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex h-10 w-28 items-center justify-center rounded border border-neutral-300 bg-neutral-200 text-[10px] font-medium tracking-wider text-neutral-400 uppercase"
        >
          Logo
        </div>
      ))}
    </div>
  )
}

type SectionProps = {
  id?: string
  eyebrow?: string
  heading?: string
  intro?: ReactNode
  children?: ReactNode
  /** Alternate background to separate adjacent sections. */
  alt?: boolean
  className?: string
}

/** Consistent vertical rhythm wrapper with optional eyebrow + heading. */
export function Section({
  id,
  eyebrow,
  heading,
  intro,
  children,
  alt = false,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-neutral-200 ${alt ? 'bg-neutral-100' : 'bg-white'} ${className}`}
    >
      <div className="site-container py-16">
        {eyebrow && (
          <p className="font-heading mb-2 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {heading}
          </h2>
        )}
        {intro && (
          <div className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            {intro}
          </div>
        )}
        {children && <div className={heading || intro ? 'mt-10' : ''}>{children}</div>}
      </div>
    </section>
  )
}

type StatCardProps = {
  stat: string
  label: string
}

/** Scannable headline-stat card. */
export function StatCard({ stat, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-neutral-300 bg-white p-6">
      <div className="text-3xl font-semibold tracking-tight text-neutral-900">
        {stat}
      </div>
      <div className="mt-2 text-sm leading-snug text-neutral-600">{label}</div>
    </div>
  )
}

type SpecRow = { label: string; value: string }

/** Spec sheet rendered as a real two-column table. */
export function SpecTable({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-300">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}
            >
              <th
                scope="row"
                className="w-1/2 border-b border-neutral-200 px-5 py-3 font-medium text-neutral-700"
              >
                {row.label}
              </th>
              <td className="border-b border-neutral-200 px-5 py-3 text-neutral-900">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

type BioCardProps = {
  name: string
  role: string
  bio: string
}

/** Consistent leadership bio template. */
export function BioCard({ name, role, bio }: BioCardProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-neutral-300 bg-white p-5">
      <Placeholder label="Photo" height="h-16" className="w-16 shrink-0" />
      <div>
        <h3 className="text-base font-semibold text-neutral-900">{name}</h3>
        <p className="text-sm font-medium text-neutral-500">{role}</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{bio}</p>
      </div>
    </div>
  )
}

type BackerProps = {
  name: string
  company: string
  role: string
  /** Featured backers render larger, with a stronger frame. */
  featured?: boolean
}

/** Investor / backer card with photo placeholder, name, company and role. */
export function BackerCard({ name, company, role, featured = false }: BackerProps) {
  return (
    <div
      className={`flex flex-col rounded-lg border bg-white ${
        featured
          ? 'border-neutral-900 p-6'
          : 'border-neutral-300 p-5'
      }`}
    >
      <Placeholder
        label="Photo"
        height={featured ? 'h-28' : 'h-20'}
        className="w-full"
      />
      <h3
        className={`mt-4 font-semibold text-neutral-900 ${
          featured ? 'text-lg' : 'text-base'
        }`}
      >
        {name}
      </h3>
      <p className="text-sm font-medium text-neutral-700">{company}</p>
      <p className="text-sm text-neutral-500">{role}</p>
    </div>
  )
}

type CtaBandProps = {
  heading: string
  body?: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
}

/** Decisive conversion band reused as a page closer. */
export function CtaBand({
  heading,
  body,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="bg-neutral-900">
      <div className="site-container py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        {body && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-300">
            {body}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="text-sm font-medium text-neutral-300 underline-offset-4 hover:text-white hover:underline"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

/** Page hero shared by interior pages. */
export function PageHero({
  eyebrow,
  title,
  subhead,
  children,
}: {
  eyebrow?: string
  title: string
  subhead?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="site-container py-20">
        {eyebrow && (
          <p className="font-heading mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {title}
        </h1>
        {subhead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {subhead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

/** Primary / secondary button pair used in heroes. */
export function CtaPair({
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: {
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryTo: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        to={primaryTo}
        className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
      >
        {primaryLabel}
      </Link>
      <Link
        to={secondaryTo}
        className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
      >
        {secondaryLabel}
      </Link>
    </div>
  )
}
