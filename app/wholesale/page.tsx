import Link from "next/link";
import { waLink } from "../../lib/products";

export default function WholesalePage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Wholesale</span>
            <h2>For boutiques &amp; retailers — direct from Srinagar</h2>
            <p>
              We supply Kani sarees, pashmina shawls and suits to boutiques and
              retailers — wholesale and retail, with worldwide shipping. Work with
              the weavers directly, without middlemen.
            </p>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <h3>What we supply</h3>
              <ul className="check-list">
                <li>Kani sarees — silk, Jamawar and Chinar collections</li>
                <li>Pashmina and Kani shawls in regular colourways</li>
                <li>Woolen Kani Sozni and Kani Chinar suits</li>
                <li>Repeat orders of your best-selling pieces</li>
                <li>New drops shared first with wholesale buyers</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>How wholesale works</h3>
              <ul className="check-list">
                <li>Message us on WhatsApp with your boutique details</li>
                <li>We share the wholesale catalogue with photos and videos</li>
                <li>Choose your pieces and quantities together with us</li>
                <li>We pack with care and ship worldwide</li>
                <li>Minimums, pricing and delivery times discussed personally — no fixed numbers published, because every order is different</li>
              </ul>
            </div>
          </div>

          <div className="center mt">
            <a
              className="btn btn-wa"
              href={waLink("Hi STEPinKashmir! I run a boutique and would like to enquire about wholesale — please share your catalogue and wholesale terms.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire about wholesale on WhatsApp →
            </a>
            <p className="sample-note" style={{ marginTop: 14 }}>
              Prefer Instagram? DM us at{" "}
              <a href="https://www.instagram.com/step__in_kashmir" target="_blank" rel="noopener noreferrer" style={{ color: "#a97c22", fontWeight: 600 }}>
                @step__in_kashmir
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Why Buy From the Valley</span>
            <h2>Authenticity your customers can feel</h2>
            <p>
              Your customers can tell a handwoven Kani from a printed copy in one
              touch — the motifs are in the fabric, not on it. That is the story
              your boutique gets to tell, and it is why Kani pieces become heirlooms
              instead of inventory.
            </p>
          </div>
          <div className="steps">
            <div className="step" style={{ background: "#123b2e", borderColor: "#1e5240" }}>
              <h3 style={{ color: "#f8f3e8" }}>Handwoven, always</h3>
              <p style={{ color: "#c4cec2" }}>Every piece is woven on a handloom in Kashmir — no prints, no machine copies.</p>
            </div>
            <div className="step" style={{ background: "#123b2e", borderColor: "#1e5240" }}>
              <h3 style={{ color: "#f8f3e8" }}>Direct from Srinagar</h3>
              <p style={{ color: "#c4cec2" }}>You deal with the source. Photos and videos of the actual pieces before you commit.</p>
            </div>
            <div className="step" style={{ background: "#123b2e", borderColor: "#1e5240" }}>
              <h3 style={{ color: "#f8f3e8" }}>Shipped worldwide</h3>
              <p style={{ color: "#c4cec2" }}>Careful packing and worldwide shipping for retail and wholesale orders alike.</p>
            </div>
          </div>
          <div className="center mt">
            <Link href="/collections" className="btn btn-gold">
              Browse the collection →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
