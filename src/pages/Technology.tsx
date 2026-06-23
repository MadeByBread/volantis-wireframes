import { FaqList } from '../components/FaqList'
import { PageHero, Section, StatCard, Placeholder, CtaBand } from '../components/wireframe'
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

/** Electrical reach: a chip on an interposer ringed by memory chiplets. */
function ElectricalReachDiagram() {
  return (
    <figure
      className="overflow-hidden rounded-xl bg-neutral-900 p-8 sm:p-12"
      aria-label="A chip on an interposer surrounded by memory chiplets within electrical reach"
    >
      <div className="mx-auto grid max-w-[320px] grid-cols-5 grid-rows-5 gap-2 rounded-3xl bg-[#ff5500] p-3">
        {Array.from({ length: 25 }).map((_, i) => {
          const row = Math.floor(i / 5)
          const col = i % 5
          const isEdge = row === 0 || row === 4 || col === 0 || col === 4
          const isCenter = row === 2 && col === 2
          if (isCenter) {
            return (
              <div
                key={i}
                className="col-start-2 col-end-5 row-start-2 row-end-5 flex items-center justify-center rounded-lg bg-[#3a3f55] text-xs font-semibold text-white"
              >
                Chip
              </div>
            )
          }
          if (isEdge) {
            return <div key={i} className="aspect-square rounded-sm bg-[#9a3412]" />
          }
          return <div key={i} aria-hidden />
        })}
      </div>
      <figcaption className="mt-6 text-center text-sm text-neutral-400">
        Electrical reach: ~2–5mm — memory chiplets must crowd the chip edge
      </figcaption>
    </figure>
  )
}

/** Optical reach: small electrical reach vs a large Volantis optical reach pool. */
function OpticalReachDiagram() {
  return (
    <figure
      className="overflow-hidden rounded-xl bg-neutral-900 p-8 sm:p-12"
      aria-label="Comparison of small electrical interconnect reach versus large Volantis optical reach"
    >
      <div className="flex flex-wrap items-end justify-center gap-10 sm:gap-16">
        {/* Electrical reach */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-md border-2 border-[#ff5500]/60 bg-[#ff5500]/15">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#ff5500] text-[9px] font-semibold uppercase text-white">
              Chip
            </div>
          </div>
          <figcaption className="mt-3 text-center text-xs text-neutral-400">
            Electrical reach
          </figcaption>
        </div>

        {/* Optical reach */}
        <div className="flex flex-col items-center">
          <div
            className="relative flex h-56 w-56 items-center justify-center rounded-lg border border-cyan-400/40 sm:h-64 sm:w-64"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(34, 211, 238, 0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.18) 1px, transparent 1px)
              `,
              backgroundSize: '16px 16px',
            }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#ff5500] text-[9px] font-semibold uppercase text-white">
              Chip
            </div>
          </div>
          <figcaption className="mt-3 text-center text-xs text-neutral-400">
            Volantis optical reach — 200mm+
          </figcaption>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-neutral-700 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#ff5500]" aria-hidden />
          <span className="text-xs text-neutral-400">Electrical interconnect reach</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm border border-cyan-400/50 bg-cyan-400/20"
            aria-hidden
          />
          <span className="text-xs text-neutral-400">Volantis optical reach</span>
        </div>
      </div>
    </figure>
  )
}

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={'We build "optical wires," not "optical cables."'}
        subhead={
          <>
            Electrical wires on an interposer travel about 2 millimeters. Our optical
            waveguides on an interposer travel 200mm+. That breaks the shoreline limit of
            traditional HBM-based systems, letting us aggregate many memory chiplets into a
            single, ultra-high-bandwidth memory pool.
          </>
        }
      />

      {/* 2. The electrical reach limit */}
      <Section
        alt
        eyebrow="The problem"
        heading="The electrical reach limit"
        intro="Electrical wires travel ~2–5mm, less than the ~11mm length of an HBM stack. This limits existing chips to a small amount of memory and bandwidth."
      >
        <ElectricalReachDiagram />
      </Section>

      {/* 3. The optical reach advantage */}
      <Section
        eyebrow="The reach advantage"
        heading="Our optical wires travel 200mm+"
        intro="Breaking the shoreline limit that caps HBM capacity and bandwidth, over 220 memory chiplets can be connected in a single, uniform-latency memory pool. This enables gigantic capacities while simultaneously running at ultra-high bandwidth."
      >
        <OpticalReachDiagram />
      </Section>

      {/* 4. Breaking the capacity/bandwidth tradeoff */}
      <Section
        alt
        eyebrow="The unlock"
        heading="We break the tradeoff between memory bandwidth and memory capacity — enabling multi-trillion parameter models at low latencies."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard stat="50x" label="bigger capacity vs a GPU baseline" />
          <StatCard stat="30x" label="faster" />
          <StatCard stat="250x" label="bigger than emerging technologies (e.g. 3D DRAM)" />
        </div>
        <Placeholder
          label="Capacity vs bandwidth — GPU baseline vs Volantis (incl. emerging tech, e.g. 3D DRAM)"
          height="h-80"
          className="mt-6"
        />
      </Section>

      {/* 5. A practical photonic platform */}
      <Section
        eyebrow="The platform"
        heading="A practical photonic platform"
        intro="No external lasers. Thermally stable at >95°C. Sub-1 pJ/bit."
      >
        <Placeholder
          label="Photonic platform render — integrated waveguides, VCSEL arrays, waveguide interposer"
          height="h-72"
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-neutral-300 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. FAQs */}
      <Section
        alt
        eyebrow="FAQs"
        heading="Technology questions"
        intro="Quick answers on the physics, architecture, and how we verify claims. For general questions, see our FAQs page."
      >
        <FaqList items={technologyFaqs} showAllLink />
      </Section>

      {/* 8. CTA */}
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
