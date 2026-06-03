import { PageHero } from '../components/wireframe'

export type LegalSection = { heading: string; body: string }

const placeholder =
  'Placeholder wireframe copy. This section will hold the final legal language reviewed by counsel before launch. It describes scope, obligations, and the relevant terms in plain language for the reader.'

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string
  updated: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subhead={`Last updated: ${updated}`} />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-12">
          <div className="mb-10 rounded-md border border-dashed border-neutral-400 bg-neutral-100 px-4 py-3 text-sm text-neutral-500">
            Wireframe placeholder — body copy is illustrative and not final legal
            text.
          </div>
          <ol className="space-y-10">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <h2 className="text-lg font-semibold text-neutral-900">
                  {i + 1}. {s.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.body || placeholder}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
