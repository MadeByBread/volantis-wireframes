import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from './wireframe'

const ROTATE_MS = 5000

const slides = [
  {
    stat: '100x',
    title: '100x memory reach',
    subtitle:
      'Optical reach is ~100x longer than electrical interconnect.',
  },
  {
    stat: '>30x',
    title: '>30x lower latency',
    subtitle: 'Low-latency inference for 1T+ models at scale.',
  },
  {
    stat: '15x / 6x',
    title: '15x Tok/$, 6x Tok/W',
    subtitle: 'Better unit economics for NeoCloud serving.',
  },
]

export default function SolutionSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(next, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [next, paused])

  return (
    <section
      className="border-b border-neutral-200 bg-neutral-100"
      aria-roledescription="carousel"
      aria-label="Volantis solution highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: feature nav */}
          <div
            className="flex flex-col gap-6 lg:col-span-3"
            role="tablist"
            aria-label="Solution highlights"
          >
            {slides.map((slide, i) => {
              const isActive = i === active
              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  id={`solution-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`solution-panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => goTo(i)}
                  className="text-left transition"
                >
                  <span
                    className={`block text-base font-semibold transition ${
                      isActive ? 'text-neutral-900' : 'text-neutral-400'
                    }`}
                  >
                    {slide.title}
                  </span>
                  <span
                    className={`mt-1 block text-sm leading-snug transition ${
                      isActive ? 'text-neutral-600' : 'text-neutral-300'
                    }`}
                  >
                    {slide.subtitle}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Center: slider visual */}
          <div className="lg:col-span-5">
            <div
              className="mb-6 flex gap-2"
              role="group"
              aria-label="Slide progress"
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={`h-1 flex-1 rounded-full transition ${
                    i === active ? 'bg-neutral-900' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>

            {slides.map((slide, i) => (
              <div
                key={slide.title}
                id={`solution-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`solution-tab-${i}`}
                hidden={i !== active}
                className={i === active ? 'block' : 'hidden'}
              >
                <div
                  className="text-7xl font-semibold tracking-tight text-neutral-900 sm:text-8xl"
                  aria-live="polite"
                >
                  {slide.stat}
                </div>
                <Placeholder
                  label="Photonic motherboard illustration"
                  height="h-56"
                  className="mt-6"
                />
              </div>
            ))}
          </div>

          {/* Right: copy + CTA (shared across slides) */}
          <div className="flex flex-col justify-center lg:col-span-4">
            <p className="text-base leading-relaxed text-neutral-600">
              A little more copy here to support the secondary action below.
            </p>
            <Link
              to="/technology"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              See how it works
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
