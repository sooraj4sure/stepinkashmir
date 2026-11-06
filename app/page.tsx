import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE, CRAFT_IMAGE, PRODUCTS, waLink, IG_URL } from "../lib/products";
import ProductCard from "../components/ProductCard";

const MARQUEE =
  "Handwoven Kani Sarees ✦ Pashmina Shawls ✦ Kani Sozni Suits ✦ Wholesale + Retail ✦ Worldwide Shipping ✦ ";

export default function Home() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Srinagar · Kashmir · Handloom</span>
            <h1>
              Woven poetry from the <em>valley of Kashmir</em>
            </h1>
            <p className="lede">
              Pure Kashmiri Kani sarees, pashmina shawls and suits — woven by hand,
              thread by thread, in Srinagar. Every piece carries months of a master
              weaver&apos;s work. Wholesale + retail, shipped worldwide.
            </p>
            <div className="hero-ctas">
              <Link href="/collections" className="btn btn-gold">
                Explore the collection →
              </Link>
              <a
                className="btn btn-ghost"
                href={waLink("Hi STEPinKashmir! I saw your website and would like to see your latest collection.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <b>100% pure</b>
                <span>Kashmiri weaves</span>
              </div>
              <div>
                <b>Handloom</b>
                <span>Kani · Sozni · Pashmina</span>
              </div>
              <div>
                <b>Worldwide</b>
                <span>Shipping available</span>
              </div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <Image
              src={HERO_IMAGE}
              alt="Kani saree — sample photo"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <span className="hero-img-tag">Beige Kani saree · sample photo</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{MARQUEE}</span>
          <span>{MARQUEE}</span>
        </div>
      </div>

      {/* Featured collection */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The Collection</span>
            <h2>Heirlooms, woven one thread at a time</h2>
            <p>
              Kani sarees, pashmina shawls and woolen suits — each piece handwoven
              in Kashmir. Prices are shared personally on WhatsApp, because every
              piece is different.
            </p>
          </div>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="center mt">
            <Link href="/collections" className="btn btn-pine">
              View all {PRODUCTS.length} pieces →
            </Link>
            <p className="sample-note" style={{ marginTop: 12 }}>
              Photos shown are samples — the final website will carry the brand&apos;s real photography.
            </p>
          </div>
        </div>
      </section>

      {/* Craft teaser */}
      <section className="section section-dark">
        <div className="container split">
          <div>
            <span className="kicker">Our Craft</span>
            <h2>A saree that takes months to make — and a lifetime to understand</h2>
            <p>
              Kani weaving is one of the oldest crafts of Kashmir. Small wooden
              bobbins called <b style={{ color: "#e8d9a8" }}>kanis</b> carry each
              colour of thread, guided by a coded script called the{" "}
              <b style={{ color: "#e8d9a8" }}>Talim</b> — read aloud like music
              while the weaver builds the design, line by line, about an inch a day.
            </p>
            <p>
              The motifs come from Mughal gardens and Kashmir itself: chinar leaves,
              paisleys, floral vines — woven into the fabric, never printed, never
              embroidered on top.
            </p>
            <Link href="/craft" className="btn btn-gold" style={{ marginTop: 8 }}>
              The story of Kani →
            </Link>
          </div>
          <div>
            <Image
              src={CRAFT_IMAGE}
              alt="Handloom weaving — sample photo"
              width={1200}
              height={800}
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "auto", borderRadius: 26 }}
              loading="lazy"
            />
            <p className="sample-note" style={{ marginTop: 10, color: "#9aa89e" }}>
              Sample photo — the final site will show the brand&apos;s own looms and weavers.
            </p>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">How to Order</span>
            <h2>Three steps to your piece</h2>
            <p>No carts, no checkouts — a personal conversation, the Kashmiri way.</p>
          </div>
          <div className="steps">
            <div className="step">
              <b className="num">1</b>
              <h3>Browse the collection</h3>
              <p>Look through the sarees, shawls and suits. Note the pieces you love — every one is handwoven, so no two are exactly alike.</p>
            </div>
            <div className="step">
              <b className="num">2</b>
              <h3>Message us on WhatsApp</h3>
              <p>Tap “Ask price” on any piece, or message us directly. We share the price, more photos and a video of the actual piece.</p>
            </div>
            <div className="step">
              <b className="num">3</b>
              <h3>We ship worldwide</h3>
              <p>Retail and wholesale orders both welcome. We pack your piece with care and ship it to you — anywhere in the world.</p>
            </div>
          </div>
          <div className="center mt">
            <a
              className="btn btn-wa"
              href={waLink("Hi STEPinKashmir! I would like to see your latest collection and prices.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Wholesale + Instagram */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="kicker">For Boutiques &amp; Retailers</span>
            <h2>Wholesale, direct from Srinagar</h2>
            <p>
              We supply boutiques and retailers with Kani sarees, shawls and suits —
              wholesale and retail, with worldwide shipping. Catalogue and bulk
              pricing are shared personally on WhatsApp.
            </p>
            <Link href="/wholesale" className="btn btn-outline">
              Wholesale enquiries →
            </Link>
          </div>
          <div>
            <span className="kicker">Follow the Loom</span>
            <h2>See new pieces first on Instagram</h2>
            <p>
              New drops, restocks and behind-the-loom moments go to Instagram first —
              including the Kani Chinar and Moonlight collections.
            </p>
            <a className="btn btn-pine" href={IG_URL} target="_blank" rel="noopener noreferrer">
              @step__in_kashmir →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
