import { PageHero, CtaBand } from '../components/wireframe'
import { FaqList } from '../components/FaqList'
import { faqs } from '../data/faqs'

export default function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subhead="The short answers. For the full test setup and a datasheet, reserve capacity or request the technical brief."
      />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-12">
          <FaqList items={faqs} />
        </div>
      </section>
      <CtaBand
        heading="Still have questions?"
        body="Tell us your workload and we'll size a system with you."
        primaryLabel="Reserve capacity"
        primaryTo="/intake"
        secondaryLabel="See the technology"
        secondaryTo="/technology"
      />
    </>
  )
}
