import Link from "next/link";
import { IG_URL, waLink } from "../lib/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>STEPinKashmir</h4>
            <p>
              Pure Kashmiri Kani sarees, pashmina shawls and suits — handwoven in
              Srinagar, Kashmir. Wholesale + retail, with worldwide shipping.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href={waLink("Hi STEPinKashmir! I would like to know more about your collection.")} target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 60061 45694 →
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                Instagram: @step__in_kashmir →
              </a>
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <Link href="/collections">All collections</Link>
            <Link href="/collections?cat=Kani%20Sarees">Kani sarees</Link>
            <Link href="/collections?cat=Pashmina%20Shawls">Pashmina shawls</Link>
            <Link href="/collections?cat=Suits">Suits</Link>
          </div>
          <div>
            <h4>About</h4>
            <Link href="/craft">Our craft — the story of Kani</Link>
            <Link href="/wholesale">Wholesale enquiries</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© STEPinKashmir · Srinagar, Jammu &amp; Kashmir</span>
          <span>Demo v1 — preview by Evenlyn Studio · Photos are samples · Prices on WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
