import LegalPage from './LegalPage'

const sections = [
  { heading: 'Overview', body: '' },
  { heading: 'Information we collect', body: '' },
  { heading: 'How we use information', body: '' },
  { heading: 'Sharing and disclosure', body: '' },
  { heading: 'Data retention', body: '' },
  { heading: 'Security', body: '' },
  { heading: 'Your rights and choices', body: '' },
  { heading: 'International transfers', body: '' },
  { heading: 'Changes to this policy', body: '' },
  { heading: 'Contact us', body: '' },
]

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026" sections={sections} />
  )
}
