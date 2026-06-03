import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/wireframe'

type Fields = {
  company: string
  name: string
  email: string
  workload: string
  modelSize: string
  nodes: string
  timeline: string
  notes: string
}

const empty: Fields = {
  company: '',
  name: '',
  email: '',
  workload: '',
  modelSize: '',
  nodes: '',
  timeline: '',
  notes: '',
}

const timelines = [
  'Immediate (this quarter)',
  'Next quarter',
  '6–12 months',
  'Exploratory',
]

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (!values.company.trim()) errors.company = 'Company is required.'
  if (!values.name.trim()) errors.name = 'Your name is required.'
  if (!values.email.trim()) {
    errors.email = 'Work email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.workload.trim()) errors.workload = 'Tell us about your workload.'
  if (!values.timeline) errors.timeline = 'Select a timeline.'
  return errors
}

const labelCls = 'block text-sm font-medium text-neutral-700'
const inputCls =
  'mt-1.5 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-500'
const errCls = 'mt-1 text-xs text-neutral-600'

export default function Intake() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Reserve capacity" title="Request received." />
        <section className="bg-white">
          <div className="mx-auto w-full max-w-2xl px-6 py-12">
            <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-8 text-center">
              <h2 className="text-xl font-semibold text-neutral-900">
                Thanks, {values.name || 'there'}.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                We received your request for {values.company || 'your team'}. Our
                team will map your workload to nodes, memory, and delivery windows
                and follow up at {values.email || 'your email'}.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  to="/"
                  className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700"
                >
                  Back to home
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setValues(empty)
                    setErrors({})
                    setSubmitted(false)
                  }}
                  className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                >
                  Submit another
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Reserve capacity"
        title="Tell us your workload."
        subhead="We'll map it to nodes, memory, and delivery windows. Fields marked with an asterisk are required."
      />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-2xl px-6 py-12">
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelCls}>
                  Company *
                </label>
                <input
                  id="company"
                  className={inputCls}
                  value={values.company}
                  onChange={(e) => update('company', e.target.value)}
                />
                {errors.company && <p className={errCls}>{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="name" className={labelCls}>
                  Your name *
                </label>
                <input
                  id="name"
                  className={inputCls}
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Work email *
              </label>
              <input
                id="email"
                type="email"
                className={inputCls}
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
              />
              {errors.email && <p className={errCls}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="workload" className={labelCls}>
                Workload *
              </label>
              <textarea
                id="workload"
                rows={3}
                className={inputCls}
                placeholder="What models are you serving, and for whom?"
                value={values.workload}
                onChange={(e) => update('workload', e.target.value)}
              />
              {errors.workload && <p className={errCls}>{errors.workload}</p>}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="modelSize" className={labelCls}>
                  Model size
                </label>
                <input
                  id="modelSize"
                  className={inputCls}
                  placeholder="e.g. 1T+ MoE"
                  value={values.modelSize}
                  onChange={(e) => update('modelSize', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="nodes" className={labelCls}>
                  Target nodes
                </label>
                <input
                  id="nodes"
                  className={inputCls}
                  placeholder="e.g. 40"
                  value={values.nodes}
                  onChange={(e) => update('nodes', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className={labelCls}>
                Timeline *
              </label>
              <select
                id="timeline"
                className={inputCls}
                value={values.timeline}
                onChange={(e) => update('timeline', e.target.value)}
              >
                <option value="">Select a timeline…</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.timeline && <p className={errCls}>{errors.timeline}</p>}
            </div>

            <div>
              <label htmlFor="notes" className={labelCls}>
                Anything else?
              </label>
              <textarea
                id="notes"
                rows={3}
                className={inputCls}
                value={values.notes}
                onChange={(e) => update('notes', e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Submit request
              </button>
              <Link
                to="/product"
                className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
              >
                Back to product
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
