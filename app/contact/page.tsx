import { waLink, IG_URL } from "../../lib/products";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Contact</span>
          <h2>Talk to us — we reply personally</h2>
          <p>
            Every enquiry is answered by the brand directly. Message us on WhatsApp
            or Instagram DM — for prices, availability, photos and videos of a
            piece, wholesale enquiries, or anything else.
          </p>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <h3>WhatsApp</h3>
            <p>
              The fastest way to reach us. Ask for a price, more photos, or a video
              of the actual piece — we will share it before you decide.
            </p>
            <a
              className="big-wa"
              href={waLink("Hi STEPinKashmir! I saw your website and would like to know more.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp →
            </a>
            <div style={{ marginTop: 18 }}>
              <div className="contact-line">
                <div>
                  <b>WhatsApp / Call</b>
                  <span>+91 60061 45694</span>
                </div>
              </div>
              <div className="contact-line">
                <div>
                  <b>Based in</b>
                  <span>Srinagar, Jammu &amp; Kashmir</span>
                </div>
              </div>
              <div className="contact-line">
                <div>
                  <b>Shipping</b>
                  <span>Worldwide — retail &amp; wholesale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Instagram</h3>
            <p>
              New drops, restocks and behind-the-loom moments go to Instagram first.
              DM us there — it is our shopfront, and we check it every day.
            </p>
            <a className="btn btn-pine" href={IG_URL} target="_blank" rel="noopener noreferrer">
              @step__in_kashmir →
            </a>
            <div style={{ marginTop: 18 }}>
              <div className="contact-line">
                <div>
                  <b>Instagram</b>
                  <span>@step__in_kashmir — DM for queries</span>
                </div>
              </div>
              <div className="contact-line">
                <div>
                  <b>What to ask us</b>
                  <span>Prices · availability · more photos &amp; videos · wholesale · shipping</span>
                </div>
              </div>
              <div className="contact-line">
                <div>
                  <b>Note</b>
                  <span>We do not take orders through a form — WhatsApp or Instagram DM only, so every order is personal.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="sample-note" style={{ marginTop: 22 }}>
          This is a demo website by Evenlyn Studio. The final website will carry
          the brand&apos;s real photos, exact address (if they choose to share one)
          and any extra contact details they provide.
        </p>
      </div>
    </section>
  );
}
