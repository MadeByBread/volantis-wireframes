# Context

A shared glossary for the Volantis marketing site. This is a glossary only — no
implementation details, specs, or copy drafts. Keep terms canonical and precise.

## Glossary

- **Volantis A-1** — The product: an integrated photonic AI inference system that
  pairs proven, externally-licensed compute IP with Volantis's proprietary
  photonics, packaged to fit existing datacenter racks. Prefer "the A-1" over
  "the box."

- **Photonic Motherboard** — The optical-interconnect substrate inside the A-1
  that carries memory traffic via integrated photonic wires. The A-1 is built
  around it.

- **Compute IP** — The licensed, silicon-proven external compute engine IP the
  A-1 builds on. Canonical term; do **not** call this "compute chiplets." The
  novel, de-risked work is the photonic interconnect, not the compute IP.

- **Cloud Access** — The low-friction way to try the A-1: via a Volantis Cloud
  Partner or API Partner. Replaces the older "Cloud API access" / "on-prem vs
  cloud" framing on the Product page.

- **Demand proof** — Commercial traction stated as purchase-order volume (e.g.
  "$94M+ in POs from large datacenter operators"). Lives on About, not Product,
  for customer-confidentiality reasons. Distinct from **backers** (investors).

## Canonical sources

- **A-1 specifications** — The spec table in `src/pages/Product.tsx` is the single
  source of truth for product figures (memory capacity, memory bandwidth, power
  envelope, off-wafer IO bandwidth, form factor). FAQ and planning copy must
  match it.
