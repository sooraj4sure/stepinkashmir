import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productBySlug, relatedProducts, waLink, IG_URL, PRODUCTS } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  const related = relatedProducts(slug);

  return (
    <>
      <div className="container">
        <p className="breadcrumb">
          <Link href="/">Home</Link> · <Link href="/collections">Collections</Link> ·{" "}
          <Link href={`/collections?cat=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>{" "}
          · {product.name}
        </p>
      </div>
      <section className="pd container">
        <div className="pd-img">
          <div className="pd-img-frame">
            <Image
              src={product.image}
              alt={`${product.name} — sample photo`}
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            {product.badge && <span className="card-badge">{product.badge}</span>}
          </div>
          <p className="sample-note" style={{ marginTop: 10 }}>
            Sample photo — the final website will show the brand&apos;s real photography of this piece.
          </p>
        </div>
        <div className="pd-info">
          <span className="kicker">{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <table className="spec-table">
            <tbody>
              <tr>
                <td>Fabric</td>
                <td>{product.fabric}</td>
              </tr>
              <tr>
                <td>Weave</td>
                <td>{product.weave}</td>
              </tr>
              <tr>
                <td>Motifs</td>
                <td>{product.motifs}</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>{product.accent}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>Handwoven in Srinagar, Kashmir</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <b>Enquire on WhatsApp</b> — shared personally for each piece
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pd-ctas">
            <a
              className="btn btn-wa"
              href={waLink(
                `Hi STEPinKashmir! I would like to know the price and availability of the ${product.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp →
            </a>
            <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noopener noreferrer">
              See it on Instagram
            </a>
          </div>
          <div className="pd-note">
            <b>How ordering works:</b> message us on WhatsApp and we will share the
            price, more photos and a video of the actual piece, plus shipping
            details. Wholesale enquiries welcome — see the{" "}
            <Link href="/wholesale" style={{ color: "#a97c22", fontWeight: 600 }}>
              Wholesale page
            </Link>
            .
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">You May Also Like</span>
            <h2>More from the loom</h2>
          </div>
          <div className="grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
