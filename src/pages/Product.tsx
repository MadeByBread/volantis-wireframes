import { Link } from 'react-router-dom'
import { FaqList } from '../components/FaqList'
import {
  PageHero,
  Section,
  StatCard,
  SpecTable,
  Placeholder,
  LogoStrip,
  CtaBand,
  CtaPair,
} from '../components/wireframe'
import { productFaqs } from '../data/faqs'

const specs = [
  { label: 'Memory capacity', value: 'Up to 24 TB' },
  { label: 'Scale', value: 'Up to 400 nodes' },
  { label: 'Bandwidth', value: '60 TB/s per die' },
  { label: 'Precision', value: 'fp8' },
  { label: 'Interconnect', value: 'Integrated photonic wires' },
  { label: 'Power envelope', value: '6x Tok/W vs NVIDIA B200' },
  { label: 'Form factor', value: 'Array of photonic motherboards' },
]

export default function Product() {
  return (
    <>
      <PageHero
        eyebrow="Volantis A-1"
        title="The Volantis A-1: low-latency inference for 1T+ models."
        subhead={
          <>
            You do not need a bigger GPU. You need more memory close to the chip.
            We put it there with photonic wires.{' '}
            <span className="font-medium text-neutral-800">
              Availability: reserving capacity now.
            </span>
          </>
        }
      >
        <CtaPair
          primaryLabel="Reserve capacity"
          primaryTo="/intake"
          secondaryLabel="Request the datasheet"
          secondaryTo="/intake"
        />
      </PageHero>

      {/* 2. Value props */}
      <Section alt eyebrow="Why Volantis A-1">
        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard stat="15x" label="Tok/$ vs NVIDIA B200" />
          <StatCard stat="6x" label="Tok/W for low-latency 1T+ MoEs" />
          <StatCard stat=">30x" label="lower latency for large-model inference" />
        </div>
      </Section>

      {/* 3. What's in the box */}
      <Section
        eyebrow="System overview"
        heading="What's in the box"
        intro="The Volantis box is an array of photonic motherboards. We pair proven compute chiplets with an optical fabric that carries memory traffic at 60 TB/s per die — a de-risked first product."
      >
        <Placeholder label="Volantis box / photonic motherboard" height="h-72" />
      </Section>

      {/* 4. Specifications table */}
      <Section alt eyebrow="Specifications" heading="Spec sheet">
        <SpecTable rows={specs} />
      </Section>

      {/* 5. Performance & benchmarks */}
      <Section eyebrow="Performance" heading="Benchmarks">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-300 bg-white p-6">
            <p className="text-sm font-medium text-neutral-500">DeepSeek-V3.2</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">
              1,590 vs ~50
            </p>
            <p className="text-sm text-neutral-600">
              tok/s/user — Volantis vs NVIDIA B200
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-white p-6">
            <p className="text-sm font-medium text-neutral-500">GPT-1.8T (est.)</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">
              162 vs ~4&ndash;5
            </p>
            <p className="text-sm text-neutral-600">
              tok/s/user — Volantis vs NVIDIA B200
            </p>
          </div>
        </div>
        <Placeholder
          label="Benchmark chart"
          height="h-64"
          className="mt-5"
        />
        <p className="mt-4 text-xs text-neutral-500">
          Method: in/out = 1024/1024, batch size 32, fp8, simulated. Deeper
          benchmark brief available on request.
        </p>
      </Section>

      {/* 6. Economics */}
      <Section
        alt
        eyebrow="Economics"
        heading="Why 15x Tok/$ and 6x Tok/W change your unit economics."
        intro="Cost per token falls when latency falls. You stop buying idle GPU time. Lower power-per-rack and higher density compound the savings across a fleet."
      />

      {/* 7. Access & deployment */}
      <Section eyebrow="Access & deployment" heading="Two ways to deploy">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-300 bg-white p-6">
            <h3 className="text-base font-semibold text-neutral-900">
              On-prem hardware
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Purchase Volantis boxes for your own datacenter. Includes
              integration notes, lead times, and support.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-white p-6">
            <h3 className="text-base font-semibold text-neutral-900">
              Cloud API access
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Serve large models through the Volantis API without managing
              hardware.
            </p>
          </div>
        </div>
      </Section>

      {/* 8. Proof / commitments */}
      <Section alt eyebrow="Proof" heading="Backed and in demand">
        <LogoStrip count={6} />
        <p className="mt-6 text-sm text-neutral-600">
          Backed by Sam Altman and Alex Wang. Customer references available under
          NDA.
        </p>
      </Section>

      {/* 9. FAQs */}
      <Section
        eyebrow="FAQs"
        heading="Product questions"
        intro="Quick answers on specs, economics, and deployment. For the full list, see our FAQs page."
      >
        <FaqList items={productFaqs} showAllLink />
      </Section>

      {/* 10. Conversion band */}
      <CtaBand
        heading="Tell us your workload. We'll map it to nodes, memory, and delivery windows."
        primaryLabel="Reserve capacity"
        primaryTo="/intake"
        secondaryLabel="Read the FAQs"
        secondaryTo="/faqs"
      />

      <div className="bg-white py-6 text-center">
        <Link
          to="/technology"
          className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
        >
          Explore the technology &rarr;
        </Link>
      </div>
    </>
  )
}
