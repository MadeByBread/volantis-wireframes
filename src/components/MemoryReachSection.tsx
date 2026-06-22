import { Link } from "react-router-dom";

function MemoryReachDiagram() {
  return (
    <figure
      className="mt-10 overflow-hidden rounded-xl bg-neutral-900 p-6 sm:p-10"
      aria-label="Comparison of electrical interconnect reach versus Volantis optical reach"
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Electrical interconnect */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-48 w-full max-w-[220px] items-center justify-center sm:h-56">
            <div className="absolute inset-0 rounded-lg border-2 border-[#ff5500]/60 bg-[#ff5500]/10" />
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-md bg-[#ff5500] text-[10px] font-semibold uppercase tracking-wide text-white">
              Chip
            </div>
          </div>
          <figcaption className="mt-4 text-center text-sm text-neutral-400">
            Electrical interconnect reach
          </figcaption>
        </div>

        {/* Volantis optical reach */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-48 w-full items-center justify-center sm:h-56">
            <div
              className="absolute inset-0 rounded-lg border border-cyan-400/30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-md bg-[#ff5500] text-[10px] font-semibold uppercase tracking-wide text-white">
              Chip
            </div>
          </div>
          <figcaption className="mt-4 text-center text-sm text-neutral-400">
            Volantis optical reach
          </figcaption>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-neutral-700 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#ff5500]" aria-hidden />
          <span className="text-xs text-neutral-400">
            Electrical interconnect reach
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm border border-cyan-400/50 bg-cyan-400/20"
            aria-hidden
          />
          <span className="text-xs text-neutral-400">
            Volantis optical reach
          </span>
        </div>
      </div>
    </figure>
  );
}

export default function MemoryReachSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-100">
      <div className="site-container py-16">
        <p className="font-heading mb-2 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          The solution
        </p>
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          The Volantis Photonic Motherboard
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
          Volantis builds photonic wires — optical interconnect inside the
          accelerator. Optical reach is ~100x longer than electrical, so you can
          put ~100x more memory next to a chip.
        </p>

        <div className="mt-8 text-7xl font-semibold tracking-tight text-neutral-900 sm:text-8xl">
          100x
        </div>
        <p className="mt-2 text-base font-semibold text-neutral-900">
          100x memory reach
        </p>
        <p className="mt-1 max-w-2xl text-sm leading-snug text-neutral-600">
          Optical reach is ~100x longer than electrical interconnect.
        </p>

        <MemoryReachDiagram />

        <Link
          to="/technology"
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
        >
          See how it works
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
