import Image from "next/image";
import Link from "next/link";
import { waLink, type Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link href={`/product/${product.slug}`} className="card-img" aria-label={product.name}>
        <Image
          src={product.image}
          alt={`${product.name} — sample photo`}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        {product.badge && <span className="card-badge">{product.badge}</span>}
        <span className="card-cat">{product.category}</span>
      </Link>
      <div className="card-body">
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.short}</p>
        <div className="card-meta">
          {product.fabric} · {product.weave}
        </div>
        <div className="card-foot">
          <span className="price-enquire">Enquire on WhatsApp</span>
          <a
            className="wa-mini"
            href={waLink(
              `Hi STEPinKashmir! I would like to know the price and availability of the ${product.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask price
          </a>
        </div>
        <Link href={`/product/${product.slug}`} className="link-arrow">
          View details →
        </Link>
      </div>
    </article>
  );
}
