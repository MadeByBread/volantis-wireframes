import LegalPage from './LegalPage'

const sections = [
  { heading: 'Acceptance of terms', body: '' },
  { heading: 'Use of the site and services', body: '' },
  { heading: 'Capacity reservations and orders', body: '' },
  { heading: 'Intellectual property', body: '' },
  { heading: 'Confidentiality', body: '' },
  { heading: 'Disclaimers', body: '' },
  { heading: 'Limitation of liability', body: '' },
  { heading: 'Indemnification', body: '' },
  { heading: 'Governing law', body: '' },
  { heading: 'Contact us', body: '' },
]

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026" sections={sections} />
  )
}
