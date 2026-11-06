# STEPinKashmir — Research Brief (Demo v1)

## The brand (verified)
- **STEPinKashmir / STEP IN KASHMIR CLOTHING BRAND**, Srinagar, Jammu & Kashmir.
- Instagram: **@step__in_kashmir** — ~10–11K followers. Phone/WhatsApp: **+91 60061 45694**.
- Bio: *"welcome to step in kashmir, 100% pure kashmiri sarees. Add glamour and kashmiri style in your wardrobe. DM for queries. Kashmir Based."*
- **No own website** — Instagram is their shopfront. Orders via DM / WhatsApp.
- Wholesale + retail. Worldwide shipping.
- Pitched on WhatsApp 2026-11-05 (batch 3); auto-reply received, message marked Read.

## Catalogue (from their own Instagram posts)
- **Kani sarees:** beige Kani saree with paisley (modelled, 29 Jul 2026 carousel); black Kani silk saree with gold + multicolour paisley pallu; cream Kani saree with dense buti and border work; Kani Chinar sarees; Kani Jamawar.
- **Shawls:** seven Kani shawls in cream, red, blue, black, beige, mint, pink; pashmina shawls; "premium quality moonlight" Kani weaving.
- **Suits:** Pure Woolen Kani Sozni Suits; Kani Chinar Suits; "restock kani chinnar tree".
- Latest post (29 Jul 2026): Kani saree catalogue carousel captioned *"Woven poetry from the valley of Kashmir"* (#kanisaree #kashmiriweaves #sareenotsaree #handloomsaree #ethnicgrace).
- **NO prices published anywhere by this brand — the demo shows "Enquire on WhatsApp" for every piece. No prices invented.**

## The niche — Kani weaving (verified)
- **Kani** = small wooden bobbins, each carrying one colour of thread. Designs are woven directly into the fabric on a handloom — not printed, not embroidered on top.
- **Talim** = a coded graph/script read aloud like a musical score; the weaver builds the design line by line.
- Origin: Mughal era; favoured by Mughal emperors. Heartland: **Kanihama**, the handloom village of Kashmir.
- Time: a skilled artisan takes **2–6 months per saree**, sometimes over a year; a piece grows about **an inch a day**; a craftsman may spend a day weaving half a centimetre.
- Motifs: **chinar leaves, paisley (buta), floral vines** from Mughal gardens — woven in, reversible, clean on both sides.
- **Pashmina:** from Changthangi goats of Ladakh; each goat yields **under 170 g of fibre a year** — scarce by nature, hand-spun and hand-woven. Kashmir Pashmina is GI-tagged.
- What luxury buyers check: handwoven authenticity, pure silk or wool-silk blends, fine buta motifs, consistent tension, natural dyes, Kanihama origin.
- Competitor context (for positioning only — NOT on the demo): Kani silk sarees online sell roughly ₹8,888–₹41,519; premium Kani pashmina pieces $2,000–$6,000+. Comparable stores: Imperial Weaves, Zynah (Gul-E-Kani), Sunasa, Luxurion World (one-of-a-kind framing), Pashmilon (Srinagar, prices on posts), Pashmina House, Cashmere Loom. What they do well: craft storytelling, one-of-a-kind framing, video shopping, catalogue-first presentation. STEPinKashmir's edge: direct-from-Srinagar wholesale + retail with worldwide shipping.

## Demo v1 — what was built
- **Project:** `~/workspace/demo-sites/stepinkashmir/` — Next.js 16 (App Router), React 19, TypeScript. Zip: `~/workspace/your_files/stepinkashmir-demo-v1.zip`.
- **Design:** luxury editorial — deep pine/emerald (#0C2B22) + ivory (#F8F3E8) + saffron gold (#C9973B), Fraunces serif + Outfit. Distinct from the other demos (no shared look).
- **Pages (16 routes, all verified HTTP 200):**
  - `/` Home — hero with the brand's own line "Woven poetry from the valley of Kashmir", gold marquee, 6 featured pieces, craft teaser, 3-step how-to-order, wholesale + Instagram teasers.
  - `/collections` — 11 products with category filter (Kani Sarees 5, Pashmina Shawls 3, Suits 3).
  - `/product/[slug]` — 11 detail pages: description, fabric/weave/motifs/colour/origin spec table, per-product WhatsApp enquiry (pre-filled message naming the product), related pieces.
  - `/craft` — the story of Kani: kanis, Talim, an inch a day, motif guide (Chinar / Paisley-buta / Mughal florals), 4-step making timeline, pashmina section.
  - `/wholesale` — what we supply, how wholesale works (no invented MOQs/prices — discussed personally on WhatsApp), authenticity pitch.
  - `/contact` — WhatsApp + Instagram only, no fake form. City only (Srinagar, J&K), no street address invented.
- **Rules honoured:** "Demo v1" marker (top strip + header badge + footer); sample Unsplash photos labelled as samples (all 14 image URLs verified HTTP 200 before use); NO invented prices (zero ₹ symbols anywhere — verified); NO invented testimonials, awards or store address; WhatsApp to wa.me/916006145694 with pre-filled product messages; NO WhatsApp button in the navbar — icon-only floating button bottom-right only.
- **Build:** `npm run build` clean (Next 16.4.5, 18 static pages). All routes served locally and checked 200.

## Open questions for the client (needed before a real launch)
- Real product photos, real colourways in stock, and which pieces are currently available.
- Prices (or a price approach) — currently everything is "Enquire on WhatsApp".
- Delivery areas/charges, lead time for orders, payment methods (UPI / bank / COD?).
- Wholesale terms: minimum order, bulk pricing, sample policy.
- Store address (if they want one shown) and business hours.
- Do they want online payment/checkout later, or WhatsApp-only ordering permanently?
