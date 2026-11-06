"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { PRODUCTS, type Category } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

const CATS: ("All" | Category)[] = ["All", "Kani Sarees", "Pashmina Shawls", "Suits"];

function CollectionsInner() {
  const params = useSearchParams();
  const initial = params.get("cat");
  const validInitial: "All" | Category = CATS.includes(initial as Category)
    ? (initial as Category)
    : "All";
  const [cat, setCat] = useState<"All" | Category>(validInitial);

  const shown = useMemo(
    () => (cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Collections</span>
          <h2>The collection</h2>
          <p>
            Kani sarees, pashmina shawls and suits — handwoven in Srinagar, Kashmir.
            Every price is shared personally on WhatsApp, because every piece is
            woven by hand and no two are alike.
          </p>
        </div>
        <div className="filters" role="tablist" aria-label="Filter by category">
          {CATS.map((c) => (
            <button
              key={c}
              className={`filter-btn${cat === c ? " active" : ""}`}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
            >
              {c} {c === "All" ? `(${PRODUCTS.length})` : `(${PRODUCTS.filter((p) => p.category === c).length})`}
            </button>
          ))}
        </div>
        <div className="grid">
          {shown.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="sample-note" style={{ marginTop: 22 }}>
          Photos shown are samples — the final website will carry the brand&apos;s real
          photography. Colours may vary slightly from screen to screen; we share
          photos and video of the actual piece on WhatsApp before you decide.
        </p>
      </div>
    </section>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<section className="section"><div className="container"><p>Loading the collection…</p></div></section>}>
      <CollectionsInner />
    </Suspense>
  );
}
