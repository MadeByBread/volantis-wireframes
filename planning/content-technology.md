# Technology

**Purpose:** Convince a skeptical engineer/CTO that the approach is real, differentiated, and defensible.
**Primary audience:** Technical evaluators, engineers, deep-technical investors.
**Primary CTA:** Request the datasheet / technical brief. **Secondary:** Talk to an engineer.

**SEO**

- **Title:** Technology — Photonic Wires & Integrated Waveguides | Volantis
- **Meta description:** Volantis goes beyond silicon photonics with integrated waveguides, on-chip VCSEL arrays, and a low-loss waveguide interposer — 60 TB/s/die with no external lasers.
- **H1:** We build "optical wires," not "optical cables."

**Section outline**

1. **Tech hero**
    - Keep the strong framing line: *"We build optical wires, not optical cables."*
    - One-sentence thesis: photonics belongs *inside* the accelerator, not just between GPUs.
2. **Why this is needed (the physics)**
    - Electrical wires reach ~2mm → 1 HBM column → memory ceiling.
    - "A faster NVLink is a band-aid": >1µs latency, ~10× lower BW than on-chip, compute:memory ratio stays fixed.
    - Today's photonics connects *between* GPUs, not *inside* one.
3. **The Volantis reach advantage**
    - 100× optical reach vs electrical interconnect (the "photonic wires that go 100× further" visual).
    - This is the core unlock for packing more memory per accelerator.
4. **How the Photonic Motherboard works (3 pillars)** *(from deck — keep this structure, it's excellent)*
    - **Integrated waveguides** — >2,500× smaller than optical fiber.
    - **VCSEL arrays** — no external lasers (cheap & efficient).
    - **Waveguide interposer** — low-loss optical routing.
    - Diagram of the stack.
5. **Why "fully integrated" beats the alternatives**
    - Traditional silicon-photonics interposers (e.g. Lightmatter) require ~5k external laser modules; fully integrated photonics hits 240 TB/s and eliminates the external-laser problem.
    - *Strategic note: name NVIDIA freely; be deliberate about how directly you name smaller photonics startups (several are also where your team came from). Consider "traditional silicon photonics interposers" framing over named call-outs on a public page.*
6. **Bandwidth positioning**
    - 60 TB/s/die — ~30× the CPO field (Avicena ~1, Lightmatter ~2, Ayar Labs ~2 TB/s/die) and above the 4–8 TB/s memory requirement.
    - The bandwidth-vs-distance chart from the deck.
7. **De-risking / manufacturability**
    - First product leverages existing external compute chiplets — reduces execution risk (important for both engineers and investors).
    - 15 idea-to-silicon tapeouts as proof of capability.
8. **CTA**
    - "Request the technical brief / datasheet" (gated capture is appropriate here).

### Draft copy examples (on-voice)

1. **Tech hero**
    - **Headline options**
        - **We build optical wires, not optical cables.**
        - **Photonics belongs inside the accelerator.**
    - **Subhead**
        - *Electrical wires stop at about 2 millimeters. Light does not. We use that reach to move memory traffic where copper fails.*
2. **Why it’s needed (physics)**
    - *Model size grew ~10,000× since 2016. GPU memory grew ~17×.*
    - *A faster NVLink is a band-aid. >1µs latency. ~10× lower bandwidth than on-chip.*
3. **Reach advantage**
    - *Optical reach is ~100× further than electrical interconnect. That is how you pack ~100× more memory next to a chip.*
4. **Architecture (3 pillars)**
    - *Integrated waveguides — >2,500× smaller than optical fiber.*
    - *On-chip VCSEL arrays — no external lasers.*
    - *Waveguide interposer — low-loss optical routing.*
5. **Bandwidth positioning**
    - *60 TB/s per die — ~30× the CPO field. Memory needs 4–8 TB/s.*
6. **De-risking**
    - *We ship on proven compute chiplets. The risk is in the interconnect. That is the part we changed.*
7. **CTA copy (for skeptical technical buyer from visitor map)**
    - *If you want to verify the claims, start with the datasheet. We include the test setup.*

**▲ Changes vs current site**

- Reframes from marketing copy ("build a hardware backbone that only gets smarter over time") to a rigorous, evidence-led technical narrative.
- Adds the physics-of-the-problem section (why electrical wires cap memory) — currently absent.
- Adds the 3-pillar architecture breakdown and the bandwidth-vs-distance positioning from the deck.
- Moves all commercial content (box, pre-orders, node counts, pricing) **out** to Product.