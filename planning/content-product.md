# Product

**Purpose:** Turn interest into a buying conversation. What you can buy, what it does, what it costs (model), how to get it.
**Primary audience:** NeoCloud buyers, technical decision-makers, procurement.
**Primary CTA:** Reserve capacity / Talk to sales. **Secondary:** Download datasheet.

**SEO**

- **Title:** Volantis A-1 — Photonic AI Inference Accelerator
- **Meta description:** The Volantis A-1 and Photonic Motherboard deliver **15× Tok/$** and **6× Tok/W** plus up to 24TB of memory across 400 nodes for low-latency 1T+ model serving.
- **H1:** The Volantis A-1: low-latency inference for 1T+ models.

**Section outline**

1. **Product hero**
    - Name the product clearly (Volantis A-1 / Photonic Motherboard system).
    - Availability status (replace "Launches Q2 2026" with current state).
    - Primary CTA + datasheet download.
2. **Headline value props (3 cards)**
    - **15× Tok/$** vs NVIDIA B200 · **6× Tok/W** · **>30× lower latency** for large-model inference.
3. **What's in the box / system overview**
    - The Volantis box = array of photonic motherboards.
    - Built on existing, proven compute chiplets (the "de-risked first product" message from the deck) + the Volantis photonic motherboard.
    - Visual of the box / board.
4. **Specifications table** *(new — buyers need this)*
    - Memory capacity (up to 24TB), scale (up to 400 nodes), bandwidth (60 TB/s/die), precision (fp8), interconnect type, power envelope, form factor.
    - Frame as a real spec sheet, not prose.
5. **Performance & benchmarks**
    - Both deck comparisons: DeepSeek-V3.2 (1,590 vs ~50 tok/s/user) and GPT-1.8T (162 vs ~4–5 tok/s/user).
    - Methodology footnotes. Link to a deeper benchmark page/PDF if available.
6. **Economics**
    - Why 15× Tok/$ and 6× Tok/W matter to a NeoCloud's unit economics (cost-per-token, power-per-rack, density).
    - This is the buyer's real decision driver — give it its own section.
7. **Access & deployment**
    - On-prem hardware purchase + Cloud API access option.
    - Lead times, support, integration notes.
8. **Proof / commitments**
    - Backer logos + (if publishable) customer logos/quotes or anonymized customer types.
9. **Conversion band**
    - "Reserve capacity" form (capture: company, workload, model size, target nodes, timeline) — far better qualification than a bare mailto.

### Draft copy examples (on-voice)

1. **Product hero**
    - **Headline options**
        - **Volantis A-1 serves 1T+ models at conversational speed.**
        - **Low-latency inference, priced like infrastructure.**
    - **Subhead**
        - *You do not need a bigger GPU. You need more memory close to the chip. We put it there with photonic wires.*
    - **CTA**
        - Primary: *Reserve capacity*
        - Secondary: *Request the datasheet*
2. **Value prop cards**
    - *15× Tok/$ vs NVIDIA B200.*
    - *6× Tok/W for low-latency 1T+ MoEs.*
    - *>30× lower latency for large-model inference.*
3. **“What’s in the box”**
    - *The system is an array of photonic motherboards. We pair proven compute chiplets with an optical fabric that carries memory traffic at 60 TB/s per die.*
4. **Specs (table lead-in)**
    - *Up to 24TB of memory across up to 400 nodes. fp8. API access available.*
5. **Benchmarks**
    - *DeepSeek-V3.2: 1,590 tok/s/user on Volantis. ~50 on B200.*
    - *GPT-1.8T (est.): 162 tok/s/user on Volantis. ~4–5 on B200.*
6. **Economics (for commercial + infra leads)**
    - *Cost per token falls when latency falls. You stop buying idle GPU time.*
7. **Conversion band copy (from visitor map)**
    - *Tell us your workload. We will map it to nodes, memory, and delivery windows.*

**▲ Changes vs current site**

- New dedicated page; today this content is jammed into the bottom of `/technology`.
- Adds a real **specifications table** and an **economics** section (neither exists today).
- Replaces the single email link with a qualifying capacity-reservation form.
- Aligns competitor reference to **B200** (deck) rather than the site's "B100."
- Surfaces both benchmark scenarios with methodology rather than one unsourced "15× faster" claim.