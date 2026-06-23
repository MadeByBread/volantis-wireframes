# Technology

**Purpose:** Convince a skeptical engineer/CTO that the approach is real, differentiated, and defensible.
**Primary audience:** Technical evaluators, engineers, deep-technical investors.
**Primary CTA:** Request the datasheet / technical brief (page-closing band only). **Note:** Hero CTAs removed for now.

**SEO**

- **Title:** Technology — Photonic Wires & Integrated Waveguides | Volantis
- **Meta description:** Volantis goes beyond silicon photonics with integrated waveguides, on-chip VCSEL arrays, and a low-loss waveguide interposer — 200mm+ optical reach and 240 TB/s of memory bandwidth with no external lasers.
- **H1:** We build "optical wires," not "optical cables."

**Section outline**

1. **Tech hero**
    - Keep the strong framing line: *"We build optical wires, not optical cables."*
    - No CTAs for now (removed "Request the technical brief" / "Talk to an engineer").
    - Subhead reframed around interposer reach: electrical ~2mm vs optical 200mm+, breaking the HBM shoreline limit to aggregate memory chiplets into one ultra-high-bandwidth pool.
2. **The electrical reach limit** *(electrical chip + interposer + memory-chiplet diagram)*
    - Electrical wires travel ~2–5mm — less than the ~11mm length of an HBM stack — so existing chips are limited to a small amount of memory and bandwidth.
    - Visual: chip on an interposer ringed by memory chiplets (orange = electrical reach).
3. **The optical reach advantage** *(electrical vs optical reach diagram)*
    - Optical wires travel 200mm+, breaking the shoreline limit that caps HBM capacity and bandwidth.
    - 220+ memory chiplets connect into a single, uniform-latency memory pool — gigantic capacity *and* ultra-high bandwidth at the same time.
    - Visual: small electrical reach vs large Volantis optical reach.
4. **Breaking the capacity/bandwidth tradeoff** *(capacity-vs-bandwidth render — work with Kyle to add "Emerging Tech, e.g. 3D DRAM")*
    - Title: *"We break the tradeoff between memory bandwidth and memory capacity — enabling multi-trillion parameter models at low latencies."*
    - Render shows GPU baseline → Volantis: 50× bigger, 30× faster, 250× bigger; emerging tech (3D DRAM) and $20B-each players (Cerebras, Groq) for context.
5. **A practical photonic platform** *(integrated waveguides / VCSEL arrays / waveguide interposer render)*
    - *No external lasers, thermally stable at >95°C, sub-1 pJ/bit: a practical photonic platform.*
    - Supporting: integrated waveguides (>2,500× smaller than fiber), on-chip VCSEL arrays (no external lasers), low-loss waveguide interposer.
6. **CTA**
    - "Request the technical brief / datasheet" page-closing band (gated capture is appropriate here). FAQ list retained above it.

*(De-risking / manufacturability moved to the Product page as "We ship on proven compute IP.")*

### Draft copy examples (on-voice)

1. **Tech hero**
    - **Headline:** *We build "optical wires," not "optical cables."*
    - **Subhead:** *Electrical wires on an interposer travel about 2 millimeters. Our optical waveguides on an interposer travel 200mm+. That breaks the shoreline limit of traditional HBM-based systems, letting us aggregate many memory chiplets into a single, ultra-high-bandwidth memory pool.*
2. **Electrical reach limit**
    - *Electrical wires travel ~2–5mm, less than the ~11mm length of an HBM stack. This limits existing chips to a small amount of memory and bandwidth.*
3. **Optical reach advantage**
    - *Our optical wires travel 200mm+, breaking the shoreline limit that limits HBM capacity and bandwidth. Over 220 memory chiplets can be connected in a single, uniform-latency memory pool — enabling gigantic capacities while simultaneously at ultra-high bandwidth.*
4. **Capacity/bandwidth tradeoff**
    - *We break the tradeoff between memory bandwidth and memory capacity — enabling multi-trillion parameter models at low latencies.*
    - *50× bigger · 30× faster · 250× bigger than a GPU baseline.*
5. **Practical photonic platform**
    - *No external lasers. Thermally stable at >95°C. Sub-1 pJ/bit. A practical photonic platform.*
6. **CTA copy (for skeptical technical buyer from visitor map)**
    - *If you want to verify the claims, start with the datasheet. We include the test setup.*

**▲ Changes vs current site**

- Reframes the hero subhead from the "copper fails" line to a concrete interposer-reach story (2mm vs 200mm+) and the HBM shoreline limit / unified memory pool.
- Removes hero CTAs for now (kept the page-closing technical-brief band).
- Replaces the abstract physics section with a concrete **electrical reach limit** section (chip + interposer + memory chiplets diagram).
- Replaces the "100× reach" section with the **optical reach advantage** (200mm+, 220+ chiplets, uniform-latency pool).
- Adds a **capacity-vs-bandwidth tradeoff** section (50×/30×/250×, emerging tech / 3D DRAM context).
- Replaces the 3-pillar architecture section with **"a practical photonic platform"** (no external lasers, >95°C, sub-1 pJ/bit).
- **Deletes** the "Why fully integrated beats the alternatives" and "60 TB/s per die — ~30× the CPO field" sections.
- **Moves** the de-risking section to Product as "We ship on proven compute IP" (compute chiplets → compute IP).
- Moves all commercial content (box, pre-orders, node counts, pricing) **out** to Product.