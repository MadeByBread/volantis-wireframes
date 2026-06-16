import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BenchmarkChart from "../components/BenchmarkChart";
import SolutionSlider from "../components/SolutionSlider";
import {
  CtaBand,
  LogoStrip,
  Placeholder,
  Section,
} from "../components/wireframe";

export default function Home() {
  return (
    <>
      {/* 1. Hero — layout & type per Figma Hero frame */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="site-container">
          <div className="pt-6 text-center">
            <h1 className="mx-auto max-w-[960px] text-[clamp(2.75rem,10vw,7rem)] font-normal leading-[0.9] tracking-tight text-[#0c0a09]">
              More memory, more bandwidth, at the speed of light.
            </h1>
          </div>

          <div className="flex flex-col gap-10 pt-16 pb-24 lg:flex-row lg:items-end lg:gap-10">
            <div className="w-full max-w-[280px] shrink-0 pb-6 text-lg leading-[1.3] font-medium text-[#57534e]">
              <p>Near-SRAM Bandwidth, but with Rack-Scale Memory Capacity</p>
              <p className="mt-4">
                We replace copper interposers with tiny optical waveguides on
                giant substrates, enabling &gt;30X more memory bandwidth and
                &gt;50X larger memory pools.
              </p>
            </div>

            <div className="relative min-h-48 min-w-0 flex-1 aspect-912/572">
              <Placeholder
                label="Chip visual"
                height="absolute inset-0 h-full min-h-48"
                className="size-full"
              />
            </div>

            <div className="flex shrink-0 flex-col items-start justify-end pb-6 lg:items-end">
              <Link
                to="/intake"
                className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-[#ff5500] px-5 text-lg font-semibold leading-none text-white transition hover:bg-[#e64d00]"
              >
                Reserve capacity
                <ArrowRightIcon
                  size={20}
                  className="shrink-0"
                  aria-hidden
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof bar */}
      <Section alt>
        <p className="mb-6 text-center text-sm text-neutral-600">
          Backed by Sam Altman and Alex Wang. Built by alumni of Micron HBM,
          Intel, Broadcom, AMD, Qualcomm, Groq, MIT and Ayar Labs.
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
        <BenchmarkChart />
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
  );
}
