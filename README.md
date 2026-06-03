# Volantis wireframes

Monochrome, low-fidelity wireframes for the Volantis marketing site — photonic interconnect for large-model AI inference. The UI uses placeholder blocks for imagery and charts; copy and structure follow the content plans in `planning/`.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — problem, solution, performance snapshot |
| `/product` | Volantis A-1 — specs, benchmarks, economics, deployment |
| `/technology` | Photonic wires, architecture, bandwidth positioning |
| `/about` | Team, backers, careers |
| `/faqs` | General FAQs (with page-specific subsets on Product and Technology) |
| `/intake` | Capacity reservation / lead capture |
| `/privacy`, `/terms` | Legal placeholders |

## Development

```bash
pnpm install
pnpm dev      # local preview
pnpm build    # production build to dist/
pnpm lint
```

Stack: React 19, TypeScript, Vite, React Router, Tailwind CSS v4.

## Project layout

- `src/pages/` — route-level page wireframes
- `src/components/` — shared layout, wireframe primitives, FAQ accordion
- `src/data/` — FAQ copy
- `planning/` — content outlines and draft copy per page

This repo is for structure and messaging exploration, not production assets or final visual design.
# volantis-wireframes
