import Image from "next/image";
import Link from "next/link";
import { CRAFT_IMAGE, CRAFT_IMAGE_2, waLink } from "../../lib/products";

export default function CraftPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Our Craft</span>
            <h2>The story of Kani</h2>
            <p className="quote">
              “A Kani saree takes months to make — and a lifetime to understand.”
            </p>
            <div className="gold-rule" />
            <p>
              Kani weaving is one of the oldest crafts of the Kashmir Valley, with
              roots in the Mughal era, when emperors prized these weaves for their
              fine texture and grand look. The technique has been passed down through
              generations of weavers — most famously in Kanihama, the handloom
              village of Kashmir.
            </p>
          </div>

          <div className="split" style={{ marginBottom: 48 }}>
            <div>
              <Image
                src={CRAFT_IMAGE}
                alt="Handloom weaving — sample photo"
                width={1200}
                height={800}
                sizes="(max-width: 820px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", borderRadius: 26 }}
                priority
              />
              <p className="sample-note" style={{ marginTop: 10 }}>
                Sample photo — the final site will show the brand&apos;s own looms and weavers.
              </p>
            </div>
            <div>
              <span className="kicker">The Weave</span>
              <h2>Kanis, Talim, and an inch a day</h2>
              <p>
                The word <b>Kani</b> means the small wooden bobbins that carry each
                colour of thread. Unlike printed or embroidered sarees, a Kani saree
                is woven on a handloom: the weaver interlaces each coloured thread
                directly into the fabric, motif by motif.
              </p>
              <p>
                A coded graph called the <b>Talim</b> guides the work — read aloud
                like a musical score while the weaver builds the design one line at a
                time. A single piece grows about an inch a day, and a skilled artisan
                can take two to six months — sometimes more than a year — to finish
                one saree.
              </p>
              <p>
                That is why no two Kani pieces are ever exactly alike, and why each
                one is an heirloom, not a garment.
              </p>
            </div>
          </div>

          <div className="section-head">
            <span className="kicker">The Motifs</span>
            <h2>Nothing is placed for beauty alone</h2>
          </div>
          <div className="motif-grid">
            <div className="motif">
              <span className="glyph">🍂</span>
              <h3>Chinar</h3>
              <p>
                The chinar leaf — Kashmir&apos;s own tree, blazing in autumn. The motif
                that stayed because Kashmir did, woven into sarees, shawls and suits.
              </p>
            </div>
            <div className="motif">
              <span className="glyph">❦</span>
              <h3>Paisley — the Buta</h3>
              <p>
                The paisley, or buta, travelled from Persia into Mughal gardens and
                Kashmiri looms. In Kani it is woven, never printed — dense, reversible,
                and clean on both sides.
              </p>
            </div>
            <div className="motif">
              <span className="glyph">✿</span>
              <h3>Mughal Florals</h3>
              <p>
                Flowers from Mughal gardens — lotus, rose and vine — built up over
                thousands of weft threads into a living garden on silk and wool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="kicker">From Loom to You</span>
            <h2>How a piece is made</h2>
          </div>
          <div className="timeline">
            <div className="tl-row">
              <b className="step-no">01</b>
              <div>
                <h3>The Talim is written</h3>
                <p>Every design begins as a coded graph — the Talim — counting every thread of every motif before the loom is even threaded.</p>
              </div>
            </div>
            <div className="tl-row">
              <b className="step-no">02</b>
              <div>
                <h3>The kanis are loaded</h3>
                <p>Small wooden bobbins, each carrying one colour of thread, are prepared for the design. A complex saree can need dozens of kanis.</p>
              </div>
            </div>
            <div className="tl-row">
              <b className="step-no">03</b>
              <div>
                <h3>Weaving, an inch a day</h3>
                <p>The weaver follows the Talim aloud, building the pattern line by line. A single piece takes weeks to months of patient, skilled work.</p>
              </div>
            </div>
            <div className="tl-row">
              <b className="step-no">04</b>
              <div>
                <h3>Finished by hand</h3>
                <p>Each piece is checked, finished and pressed by hand in Srinagar before it is photographed, listed and packed for its new home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">Pashmina</span>
            <h2>Warmth from the high cold</h2>
            <p>
              True pashmina comes from the Changthangi goat of Ladakh, which survives
              permanent cold in the high Himalayas. Each goat yields only a small
              amount of fibre a year, so pashmina is scarce by nature — hand-spun,
              hand-woven, and never mass-produced.
            </p>
            <p>
              That scarcity is the point. A pashmina shawl is not fast fashion; it is
              a family heirloom, passed down, not just worn.
            </p>
            <Link href="/collections?cat=Pashmina%20Shawls" className="btn btn-pine">
              Shop pashmina shawls →
            </Link>
          </div>
          <div>
            <Image
              src={CRAFT_IMAGE_2}
              alt="Textile craft — sample photo"
              width={1200}
              height={900}
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "auto", borderRadius: 26 }}
              loading="lazy"
            />
            <p className="sample-note" style={{ marginTop: 10 }}>
              Sample photo.
            </p>
          </div>
        </div>
        <div className="container center mt">
          <a
            className="btn btn-wa"
            href={waLink("Hi STEPinKashmir! I read the story of Kani on your website and would love to see the collection.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask us anything on WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
