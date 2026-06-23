import { PageHero, Section, StatCard, CtaBand } from '../components/wireframe'

const drivers = [
  { stat: '~10,000×', label: 'Model size growth since 2016.' },
  { stat: '~17×', label: 'GPU memory growth over the same period.' },
]

const whatWeDo = [
  'We put photonics inside the accelerator.',
  'We move 240 TB/s of memory bandwidth.',
  'We extend reach ~100× beyond electrical wires.',
  'We make room for ~100× more memory per accelerator.',
]

const whatToExpect = [
  'Decisions backed by measurements.',
  'Fast loops on real hardware.',
  'A team that ships.',
  'We keep benefits details off the public page — we’ll share specifics during the process.',
]

const openRoles = [
  {
    title: 'Photonics Process Engineer',
    location: 'On-site',
    type: 'Full-time',
    description: 'Own the photonic wire process from design rules to yield on real wafers.',
  },
  {
    title: 'Packaging Engineer',
    location: 'On-site',
    type: 'Full-time',
    description: 'Own the advanced packaging that brings photonics and memory next to the compute.',
  },
  {
    title: 'Systems / Architecture Engineer',
    location: 'On-site',
    type: 'Full-time',
    description: 'Own the system architecture that turns 100× reach into usable memory bandwidth.',
  },
  {
    title: 'Inference Software Engineer',
    location: 'On-site',
    type: 'Full-time',
    description: 'Own the inference stack that maps trillion-parameter models onto the A-1.',
  },
]

const hiringProcess = [
  'Intro call.',
  'Deep dive interview.',
  'Work sample or portfolio review.',
  'Team conversations.',
  'Offer.',
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We build photonic systems that move data with light."
        subhead="We are demolishing the memory wall. If you want to work on photonics, packaging, and systems that change AI economics, this is the job."
      />

      {/* Why this work */}
      <Section
        alt
        eyebrow="Why this work"
        heading="The bottleneck is moving information."
        intro="Model size grew ~10,000× since 2016. GPU memory grew ~17×. We build the hardware that changes that."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {drivers.map((d) => (
            <StatCard key={d.label} {...d} />
          ))}
        </div>
      </Section>

      {/* What we do */}
      <Section eyebrow="What we do" heading="We put photonics inside the accelerator.">
        <ul className="grid max-w-3xl gap-3 sm:grid-cols-2">
          {whatWeDo.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-neutral-300 bg-white px-5 py-4 text-sm leading-relaxed text-neutral-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* What you can expect (Benefits folded in) */}
      <Section alt eyebrow="What you can expect" heading="How we work.">
        <ul className="max-w-2xl space-y-3">
          {whatToExpect.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-neutral-600"
            >
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Open roles */}
      <Section
        id="open-roles"
        eyebrow="Open roles"
        heading="If a role is open, it is listed here."
      >
        <ul className="divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-300 bg-white">
          {openRoles.map((role) => (
            <li
              key={role.title}
              className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="max-w-xl">
                <h3 className="text-base font-semibold text-neutral-900">
                  {role.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-neutral-500 uppercase">
                  {role.location} · {role.type}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {role.description}
                </p>
              </div>
              <a
                href="#"
                className="shrink-0 self-start rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 sm:self-center"
              >
                Apply
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Hiring process */}
      <Section alt eyebrow="Hiring process" heading="What to expect after you apply.">
        <ol className="max-w-2xl space-y-4">
          {hiringProcess.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-700">
                {i + 1}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-neutral-600">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Talk to us anyway */}
      <CtaBand
        heading="Don’t see a role? Talk to us anyway."
        body="If you think you can help, send a short note with what you build, what you want to work on, and links we should read."
        primaryLabel="Talk to us"
        primaryTo="#"
      />
    </>
  )
}
