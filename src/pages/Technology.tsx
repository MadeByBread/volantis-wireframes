import { FaqList } from '../components/FaqList'
import {
  PageHero,
  Section,
  StatCard,
  Placeholder,
  CtaBand,
  CtaPair,
} from '../components/wireframe'
import { technologyFaqs } from '../data/faqs'

const pillars = [
  {
    title: 'Integrated waveguides',
    body: '>2,500x smaller than optical fiber, routed directly on the motherboard.',
  },
  {
    title: 'On-chip VCSEL arrays',
    body: 'No external lasers — cheap and efficient light generation on the die.',
  },
  {
    title: 'Waveguide interposer',
    body: 'Low-loss optical routing that carries memory traffic across the system.',
  },
]

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={'We build "optical wires," not "optical cables."'}
        subhead="Electrical wires stop at about 2 millimeters. Light does not. We use that reach to move memory traffic where copper fails — photonics belongs inside the accelerator, not just between GPUs."
      >
        <CtaPair
          primaryLabel="Request the technical brief"
          primaryTo="/intake"
          secondaryLabel="Talk to an engineer"
          secondaryTo="/intake"
        />
      </PageHero>

      {/* 2. Why this is needed (physics) */}
      <Section
        alt
        eyebrow="The physics"
        heading="Why electrical wires cap memory"
        intro="Electrical wires reach ~2mm — about one HBM column — which sets a hard memory ceiling. A faster NVLink is a band-aid: >1µs latency, ~10x lower bandwidth than on-chip, and the compute-to-memory ratio stays fixed. Today's photonics connects between GPUs, not inside one."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <StatCard stat="~2mm" label="electrical interconnect reach" />
          <StatCard stat="10,000x" label="model growth since 2016 vs ~17x GPU memory" />
        </div>
      </Section>

      {/* 3. Reach advantage */}
      <Section
        eyebrow="The reach advantage"
        heading="100x optical reach vs electrical interconnect"
        intro="Optical reach is ~100x further than electrical interconnect. That is the core unlock for packing ~100x more memory next to a chip."
      >
        <Placeholder label="Photonic wires that go 100x further" height="h-56" />
      </Section>

      {/* 4. How the Photonic Motherboard works (3 pillars) */}
      <Section
        alt
        eyebrow="Architecture"
        heading="How the Photonic Motherboard works"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-neutral-300 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <Placeholder label="Photonic motherboard stack diagram" height="h-64" className="mt-6" />
      </Section>

      {/* 5. Why fully integrated beats alternatives */}
      <Section
        eyebrow="Differentiation"
        heading={'Why "fully integrated" beats the alternatives'}
        intro="Traditional silicon-photonics interposers require ~5,000 external laser modules. Fully integrated photonics reaches 240 TB/s and eliminates the external-laser problem entirely."
      >
        <Placeholder label="Integrated vs traditional silicon-photonics comparison" height="h-56" />
      </Section>

      {/* 6. Bandwidth positioning */}
      <Section
        alt
        eyebrow="Bandwidth"
        heading="60 TB/s per die — ~30x the CPO field"
        intro="Versus ~1–2 TB/s/die for the rest of the CPO field, and well above the 4–8 TB/s memory requirement."
      >
        <Placeholder label="Bandwidth vs distance chart" height="h-72" />
      </Section>

      {/* 7. De-risking / manufacturability */}
      <Section
        eyebrow="De-risking"
        heading="We ship on proven compute chiplets."
        intro="The first product leverages existing external compute chiplets, so the risk lives in the interconnect — the part we changed. 15 idea-to-silicon tapeouts back the team's ability to execute."
      />

      {/* 8. FAQs */}
      <Section
        alt
        eyebrow="FAQs"
        heading="Technology questions"
        intro="Quick answers on the physics, architecture, and how we verify claims. For general questions, see our FAQs page."
      >
        <FaqList items={technologyFaqs} showAllLink />
      </Section>

      {/* 9. CTA */}
      <CtaBand
        heading="If you want to verify the claims, start with the datasheet."
        body="We include the test setup so you can check the numbers yourself."
        primaryLabel="Request the technical brief"
        primaryTo="/intake"
        secondaryLabel="See the product"
        secondaryTo="/product"
      />
    </>
  )
}
