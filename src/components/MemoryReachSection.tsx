import { Link } from "react-router-dom";

const CHIP_CLASS =
  "flex h-14 w-14 items-center justify-center rounded-md bg-neutral-300 text-[14px] font-semibold uppercase tracking-wide text-neutral-700";

/** Small orange chip: one ring of squares around the core, minimal fill style. */
function ElectricalTile() {
  return (
    <div className="aspect-square w-[110px] rounded-lg border-2 border-[#ff5500]/60 bg-[#ff5500]/10 p-1.5">
      <div className="relative grid h-full grid-cols-5 grid-rows-5 gap-0.5">
        {Array.from({ length: 25 }).map((_, i) => {
          const r = Math.floor(i / 5);
          const c = i % 5;
          const isRing = r === 0 || r === 4 || c === 0 || c === 4;
          if (!isRing) return <div key={i} />;
          return (
            <div
              key={i}
              className="aspect-square rounded-sm bg-[#ff5500]/70"
              aria-hidden
            />
          );
        })}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className={CHIP_CLASS}>Chip</div>
        </div>
      </div>
    </div>
  );
}

const OPTICAL_GRID_STYLE = {
  backgroundImage: `
    linear-gradient(to right, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
  `,
  backgroundSize: "10% 10%",
} as const;

/** Large optical reach: 10×10 line grid with the chip centered. */
function OpticalTile() {
  return (
    <div className="rounded-lg border border-cyan-400/30 p-10">
      <div
        className="relative aspect-square w-full min-w-0"
        style={OPTICAL_GRID_STYLE}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={CHIP_CLASS}>Chip</div>
        </div>
      </div>
    </div>
  );
}

function MemoryReachDiagram() {
  return (
    <figure
      className="mt-10 overflow-visible rounded-xl bg-neutral-900 p-6 sm:p-10"
      aria-label="Comparison of electrical interconnect reach versus Volantis optical reach"
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-1 items-center justify-center py-10">
            <ElectricalTile />
          </div>
          <figcaption className="mt-4 shrink-0 text-center text-sm text-neutral-400">
            Electrical interconnect reach
          </figcaption>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full flex-1 items-center justify-center py-10">
            <div className="w-full max-w-[320px]">
              <OpticalTile />
            </div>
          </div>
          <figcaption className="mt-4 shrink-0 text-center text-sm text-neutral-400">
            Volantis optical reach
          </figcaption>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-neutral-700 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#ff5500]/70" aria-hidden />
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

        <div className="mt-16 text-7xl font-semibold tracking-tight text-neutral-900 sm:mt-20 sm:text-8xl">
          100x
        </div>
        <p className="mt-2 text-base font-semibold text-neutral-900">
          Memory reach
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
