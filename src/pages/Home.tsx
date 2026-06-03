import {
  Section,
  Placeholder,
  LogoStrip,
  CtaBand,
  CtaPair,
} from '../components/wireframe'
import SolutionSlider from '../components/SolutionSlider'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Big models at low latency &mdash; finally affordable.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
              Built for NeoClouds running 1T+ MoE models. Models grew 10,000&times;.
              GPU memory grew ~17&times;. We move data with light instead of copper,
              so you can pack ~100&times; more memory into an inference system.
            </p>
            <div className="mt-8">
              <CtaPair
                primaryLabel="Reserve capacity"
                primaryTo="/intake"
                secondaryLabel="See how it works"
                secondaryTo="/technology"
              />
            </div>
          </div>
          <Placeholder label="Brand visual / gradient" height="h-72" />
        </div>
      </section>

      {/* 2. Proof bar */}
      <Section alt>
        <p className="mb-6 text-center text-sm text-neutral-600">
          Backed by Sam Altman and Alex Wang. Built by alumni of Micron HBM, Intel,
          Broadcom, AMD, Qualcomm, Groq, MIT and Ayar Labs.
        </p>
        <LogoStrip count={7} />
      </Section>

      {/* 3. The problem (wedge) */}
      <Section
        eyebrow="The problem"
        heading="The bottleneck in AI is moving information, not processing it."
        intro="Model size has grown 10,000x while GPU memory has grown only ~17x. Electrical wires only reach ~2mm, which caps the memory you can put next to a chip."
      />

      {/* 4. The solution */}
      <SolutionSlider />

      {/* 5. Performance snapshot */}
      <Section
        eyebrow="Performance"
        heading="DeepSeek-V3.2: 1,590 tokens/sec/user on Volantis. ~50 on the fastest GPU."
      >
        <Placeholder label="Benchmark chart — Volantis vs NVIDIA B200 (tok/s/user)" height="h-72" />
        <p className="mt-4 text-xs text-neutral-500">
          Method: in/out = 1024/1024, batch size 32, fp8, simulated.
        </p>
        <div className="mt-6">
          <a
            href="/product"
            className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
          >
            See the product &rarr;
          </a>
        </div>
      </Section>

      {/* 6. Who it's for */}
      <Section
        alt
        eyebrow="Who it's for"
        heading="Built for NeoCloud providers serving large MoEs."
        intro="If you run large MoEs for customers, you already pay for latency twice: once in GPUs and once in user churn. We built this for that problem — capacity, economics, and deployment."
      />

      {/* 7. Closing CTA band */}
      <CtaBand
        heading="Reserve capacity for your next serving window."
        body="Tell us the model, node count, and timeline. We will size the system with you."
        primaryLabel="Reserve capacity"
        primaryTo="/intake"
        secondaryLabel="Investor inquiries"
        secondaryTo="/about"
      />
    </>
  )
}
