export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'What is Volantis?',
    a: 'Volantis builds photonic interconnect — optical wires inside the accelerator — for large-model AI inference. The Volantis A-1 and Photonic Motherboard let NeoClouds serve 1T+ MoE models at low latency.',
  },
  {
    q: 'How much lower is the latency?',
    a: 'Greater than 30x lower latency for large-model inference versus NVIDIA B200. On DeepSeek-V3.2 we measure 1,590 tok/s/user versus ~50 on the fastest GPU.',
  },
  {
    q: 'What do "15x Tok/$" and "6x Tok/W" mean?',
    a: '15x more tokens per dollar and 6x more tokens per watt versus NVIDIA B200 for low-latency 1T+ MoE serving. Cost per token falls when latency falls because you stop buying idle GPU time.',
  },
  {
    q: 'How do you fit ~100x more memory next to a chip?',
    a: 'Electrical wires reach only ~2mm, which caps memory per chip. Optical reach is ~100x further, so photonic wires let us place far more memory close to the compute.',
  },
  {
    q: 'How much memory and bandwidth?',
    a: '10 TB of memory with 240 TB/s of memory bandwidth and 10 TB/s of off-wafer IO, in a 20kW, 24U system.',
  },
  {
    q: 'When is it available?',
    a: 'We are reserving capacity now. Tell us your model, node count, and timeline through the intake form and we will size a system with you.',
  },
  {
    q: 'How can I deploy it?',
    a: 'Try out the A-1 via a Volantis Cloud Partner or API Partner. On-prem options are sized with you during a capacity conversation.',
  },
  {
    q: 'What is your benchmark methodology?',
    a: 'Benchmarks use in/out = 1024/1024, batch size 32, fp8, simulated. A deeper benchmark brief with the full test setup is available on request.',
  },
  {
    q: 'Who backs Volantis?',
    a: 'Volantis is backed by Sam Altman and Alex Wang, and built by alumni of Micron HBM, Intel, Broadcom, AMD, Qualcomm, Groq, MIT and Ayar Labs.',
  },
]

export const technologyFaqs: Faq[] = [
  {
    q: "Why can't electrical wires carry more memory?",
    a: 'Electrical interconnect travels only ~2–5mm — less than the ~11mm length of an HBM stack — which caps how much memory you can place next to a chip. Faster NVLink helps between GPUs but does not fix the on-accelerator memory wall.',
  },
  {
    q: 'How do you fit far more memory next to a chip?',
    a: 'Our optical waveguides travel 200mm+ versus ~2mm for electrical, so we connect 220+ memory chiplets into a single, uniform-latency pool — delivering 240 TB/s of memory bandwidth right next to the compute.',
  },
  {
    q: 'What does "optical wires, not optical cables" mean?',
    a: 'We integrate waveguides and VCSEL arrays on the motherboard — thousands of times smaller than fiber — so photonics lives inside the accelerator where memory traffic actually runs, not only between separate GPUs.',
  },
  {
    q: 'Why no external lasers?',
    a: 'On-chip VCSEL arrays generate light on the die. Traditional silicon-photonics interposers can require thousands of external laser modules; fully integrated photonics eliminates that cost and complexity.',
  },
  {
    q: 'How much memory bandwidth do you deliver?',
    a: 'The A-1 delivers 240 TB/s of memory bandwidth across a single uniform-latency pool, breaking the capacity/bandwidth tradeoff so multi-trillion-parameter models run at SRAM-system latencies.',
  },
  {
    q: 'How is execution risk managed?',
    a: 'The first product uses proven, externally-licensed compute IP. The novel work is the photonic interconnect — which we have developed for 4+ years — backed by 15 idea-to-silicon tapeouts on the team.',
  },
  {
    q: 'What is your benchmark methodology?',
    a: 'Benchmarks use in/out = 1024/1024, batch size 32, fp8, simulated. Request the technical brief for the full test setup.',
  },
]
