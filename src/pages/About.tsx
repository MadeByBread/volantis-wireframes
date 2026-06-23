import { Link } from 'react-router-dom'
import {
  PageHero,
  Section,
  BioCard,
  BackerCard,
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

const featuredBackers = [
  { name: 'Sam Altman', company: 'OpenAI', role: 'CEO' },
  { name: 'Jeff Dean', company: 'Google', role: 'Chief Scientist' },
  { name: 'Dylan Patel', company: 'SemiAnalysis', role: 'Founder' },
]

const backers = [
  { name: 'Lachy Groom', company: 'Pi', role: 'Co-founder' },
  { name: 'Alex Wang', company: 'Meta', role: 'Chief AI Officer' },
  { name: 'Logan Kilpatrick', company: 'Google', role: 'Product Lead' },
  { name: 'Naval Ravikant', company: 'AngelList', role: 'Founder' },
  { name: 'Thomas Wolf', company: 'Hugging Face', role: 'Co-founder' },
  { name: 'Arash Ferdowsi', company: 'Dropbox', role: 'Co-founder' },
  { name: 'Trevor Blackwell', company: 'Y Combinator', role: 'Co-founder' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The team that pioneered HBM & CPO is demolishing the memory wall."
        subhead="Our team previously shipped products like HBM and co-packaged optics. Volantis is a scalable solution to the memory bottleneck, enabling more than an order-of-magnitude increase in capacity and bandwidth, with a roadmap that scales."
      />

      {/* Leadership bios */}
      <Section alt eyebrow="Leadership" heading="Leadership team">
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((p) => (
            <BioCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* Rest of the team */}
      <Section
        eyebrow="The team"
        heading="Leaders from Ayar Labs, Micron, Broadcom, Marvell, AMD, Lightmatter, and Groq who have worked on the most important chips of the last decade."
      >
        <LogoStrip count={7} />
      </Section>

      {/* Backers */}
      <Section
        alt
        eyebrow="Backers"
        heading="Backed by leaders with deep expertise in AI & semiconductors."
      >
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featuredBackers.map((b) => (
            <BackerCard key={b.name} {...b} featured />
          ))}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {backers.map((b) => (
            <BackerCard key={b.name} {...b} />
          ))}
        </div>
      </Section>

      {/* Careers teaser — full listing lives on /careers */}
      <Section id="careers" eyebrow="Careers" heading="Come build with us.">
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
          If you want to work on photonics, packaging, and systems that change AI
          economics, this is the job. Our open roles and hiring process live on
          the careers page.
        </p>
        <Link
          to="/careers"
          className="mt-6 inline-flex text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
        >
          See open roles &rarr;
        </Link>
      </Section>

      {/* CTA band */}
      <CtaBand
        heading="Join us in building something foundational."
        primaryLabel="See open roles"
        primaryTo="/careers"
      />
    </>
  )
}
