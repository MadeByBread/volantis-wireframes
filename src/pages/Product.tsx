import { Link } from 'react-router-dom'
import {
  PageHero,
  Section,
  StatCard,
  SpecTable,
  Placeholder,
  CtaBand,
  CtaPair,
} from '../components/wireframe'

const specs = [
  { label: 'Memory capacity', value: '10 TB' },
  { label: 'Memory bandwidth', value: '240 TB/s' },
  { label: 'Power envelope', value: '20kW' },
  { label: 'Off-wafer IO bandwidth', value: '10 TB/s' },
  { label: 'Form factor', value: '24U' },
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

      {/* 3. System overview */}
      <Section
        eyebrow="System overview"
        heading="The Fastest Frontier AI Inference System"
        intro="Our A-1 product takes proven compute IP and integrates it with our proprietary photonics to produce an integrated system that fits into existing datacenter racks."
      >
        <Placeholder
          label="Exploded view — photonic motherboard stack"
          height="h-72"
        />
      </Section>

      {/* 4. De-risking */}
      <Section
        alt
        eyebrow="De-risking"
        heading="We ship on proven compute IP."
        intro="The first product leverages existing and silicon-proven compute engine IP licensed from external parties. The risk lives in the photonic interconnect — which we've developed for 4+ years."
      />

      {/* 5. Specifications table */}
      <Section eyebrow="Specifications" heading="Spec sheet">
        <SpecTable rows={specs} />
      </Section>

      {/* 6. Performance & benchmarks */}
      <Section
        alt
        eyebrow="Performance"
        heading="Run multi-trillion parameter models at SRAM-system latencies."
      >
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

      {/* 7. Economics */}
      <Section
        eyebrow="Economics"
        heading="Why 15x Tok/$ and 6x Tok/W change your unit economics."
        intro="Cost per token falls when latency falls. You stop buying idle GPU time. Lower power-per-rack and higher density compound the savings across a fleet."
      />

      {/* 8. Conversion band */}
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
