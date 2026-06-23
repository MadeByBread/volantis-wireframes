# Product

**Purpose:** Turn interest into a buying conversation. What you can buy, what it does, what it costs (model), how to get it.
**Primary audience:** NeoCloud buyers, technical decision-makers, procurement.
**Primary CTA:** Reserve capacity / Talk to sales. **Secondary:** Download datasheet.

**SEO**

- **Title:** Volantis A-1 — Photonic AI Inference Accelerator
- **Meta description:** The Volantis A-1 and Photonic Motherboard deliver **15× Tok/$** and **6× Tok/W** with **10 TB of memory at 240 TB/s** for multi-trillion-parameter model serving at SRAM-system latencies.
- **H1:** The Volantis A-1: low-latency inference for 1T+ models.

**Section outline**

1. **Product hero**
    - Name the product clearly (Volantis A-1 / Photonic Motherboard system).
    - Availability status (replace "Launches Q2 2026" with current state).
    - Primary CTA + datasheet download.
2. **Headline value props (3 cards)**
    - **15× Tok/$** vs NVIDIA B200 · **6× Tok/W** · **>30× lower latency** for large-model inference.
3. **System overview — "The Fastest Frontier AI Inference System"**
    - The A-1 takes proven compute IP and integrates it with proprietary photonics into a system that fits existing datacenter racks.
    - Exploded-view visual of the photonic motherboard stack.
4. **De-risking — "We ship on proven compute IP"** *(moved here from /technology)*
    - The first product leverages existing, silicon-proven compute engine IP licensed from external parties; the risk lives in the photonic interconnect — which we have developed for 4+ years.
5. **Specifications table** *(new — buyers need this)*
    - Memory capacity (10 TB), memory bandwidth (240 TB/s), power envelope (20kW), off-wafer IO bandwidth (10 TB/s), form factor (24U).
    - Frame as a real spec sheet, not prose.
6. **Performance & benchmarks**
    - Headline: "Run multi-trillion parameter models at SRAM-system latencies."
    - Both deck comparisons: DeepSeek-V3.2 (1,590 vs ~50 tok/s/user) and GPT-1.8T (162 vs ~4–5 tok/s/user).
    - Methodology footnotes. Link to a deeper benchmark page/PDF if available.
7. **Economics**
    - Why 15× Tok/$ and 6× Tok/W matter to a NeoCloud's unit economics (cost-per-token, power-per-rack, density).
    - This is the buyer's real decision driver — give it its own section.
8. **Conversion band**
    - "Reserve capacity" form (capture: company, workload, model size, target nodes, timeline) — far better qualification than a bare mailto.

*(Removed: Access & deployment, Proof/commitments, and the on-page FAQ block. Deployment is now a single "Cloud Access" path if reintroduced; proof/demand lives in About; FAQs live on the dedicated /faqs page.)*

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
3. **System overview**
    - *The Fastest Frontier AI Inference System. Our A-1 product takes proven compute IP and integrates it with our proprietary photonics to produce an integrated system that fits into existing datacenter racks.*
4. **De-risking**
    - *We ship on proven compute IP. The first product leverages existing and silicon-proven compute engine IP licensed from external parties. The risk lives in the photonic interconnect — which we've developed for 4+ years.*
5. **Specs (table lead-in)**
    - *10 TB of memory at 240 TB/s, in a 20kW, 24U system.*
6. **Benchmarks**
    - *Headline: Run multi-trillion parameter models at SRAM-system latencies.*
    - *DeepSeek-V3.2: 1,590 tok/s/user on Volantis. ~50 on B200.*
    - *GPT-1.8T (est.): 162 tok/s/user on Volantis. ~4–5 on B200.*
7. **Economics (for commercial + infra leads)**
    - *Cost per token falls when latency falls. You stop buying idle GPU time.*
8. **Conversion band copy (from visitor map)**
    - *Tell us your workload. We will map it to nodes, memory, and delivery windows.*

**▲ Changes vs current site**

- New dedicated page; today this content is jammed into the bottom of `/technology`.
- Adds a real **specifications table** and an **economics** section (neither exists today).
- Moves the **"We ship on proven compute IP"** de-risking section here from `/technology`.
- Spec sheet uses the current product figures: **10 TB / 240 TB/s / 20kW / 24U** (was 24 TB / 400 nodes / 60 TB/s).
- Removes the on-page FAQ block (lives on `/faqs`), the Access & deployment grid, and the backer/proof logo strip (demand proof moves to About).
- Replaces the single email link with a qualifying capacity-reservation form.
- Aligns competitor reference to **B200** (deck) rather than the site's "B100."
- Surfaces both benchmark scenarios with methodology rather than one unsourced "15× faster" claim.