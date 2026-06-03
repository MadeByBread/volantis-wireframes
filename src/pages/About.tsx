import {
  PageHero,
  Section,
  BioCard,
  LogoStrip,
  CtaBand,
} from '../components/wireframe'

const leadership = [
  {
    name: 'Tapa Ghosh',
    role: 'Founder & CEO',
    bio: 'Thiel Fellow, YC W18. 3 photonic chip tapeouts.',
  },
  {
    name: 'Roy Meade',
    role: 'Co-founder & CTO',
    bio: 'Led Micron HBM; VP and first hire at Ayar Labs. 120+ patents. DARPA POEM PI.',
  },
  {
    name: 'Beth Keser, Ph.D.',
    role: 'VP of Packaging',
    bio: 'Ex-Intel and Qualcomm. IEEE Fellow with 50+ patents. Fan-out WLP pioneer.',
  },
  {
    name: 'Partha Kundu',
    role: 'Chief Architect',
    bio: 'Ex-Broadcom, OCI, Cray and Intel. Architect on a #1 supercomputer fabric. 27 patents.',
  },
]

const openRoles = [
  'Photonics Process Engineer',
  'Packaging Engineer',
  'Systems / Architecture Engineer',
  'Inference Software Engineer',
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The team that pioneered HBM & CPO is rebuilding the accelerator."
        subhead="Our team has shipped HBM and co-packaged optics. We are putting photonics inside the accelerator, where memory traffic actually lives."
      />

      {/* 2. Why us / credibility */}
      <Section
        alt
        eyebrow="Why us"
        heading="15 idea-to-silicon tapeouts. Hardware that ships. A mission that matters."
        intro="We've pioneered game-changing products like HBM and CPO. The memory wall is a packaging problem — and we treat it like one."
      />

      {/* 3. Leadership bios */}
      <Section eyebrow="Leadership" heading="Leadership team">
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((p) => (
            <BioCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* 4. Rest of the team */}
      <Section
        alt
        eyebrow="The team"
        heading="Team from AMD, Intel, Qualcomm, Groq, Broadcom, Lightmatter, MIT and Ayar Labs."
      >
        <LogoStrip count={8} />
      </Section>

      {/* 5. Backers */}
      <Section eyebrow="Backers" heading="Backed by Sam Altman and Alex Wang.">
        <LogoStrip count={2} />
      </Section>

      {/* 6. Traction */}
      <Section
        alt
        eyebrow="Traction"
        heading="NeoCloud customer momentum"
        intro="Customer references and anonymized segments available under NDA. (Wireframe placeholder — populate with publishable logos, quotes, or customer count.)"
      >
        <LogoStrip count={5} />
      </Section>

      {/* 7. Careers */}
      <Section id="careers" eyebrow="Careers" heading="Open roles">
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
          If you want to work on photonics, packaging, and systems that change AI
          economics, this is the job.
        </p>
        <ul className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-300 bg-white">
          {openRoles.map((role) => (
            <li
              key={role}
              className="flex items-center justify-between px-5 py-4"
            >
              <span className="text-sm font-medium text-neutral-900">
                {role}
              </span>
              <span className="text-sm text-neutral-500 underline-offset-4 hover:underline">
                View role &rarr;
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 8. Press */}
      <Section alt eyebrow="Press" heading="In the news">
        <LogoStrip count={4} />
        <p className="mt-6 text-sm text-neutral-500">
          Coverage placeholder — populate with real press or remove this section.
        </p>
      </Section>

      {/* 9. CTA band */}
      <CtaBand
        heading="Build the system, not just the parts."
        primaryLabel="See open roles"
        primaryTo="/about#careers"
        secondaryLabel="Investor inquiries"
        secondaryTo="/intake"
      />
    </>
  )
}
