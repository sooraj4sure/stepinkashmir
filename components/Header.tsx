"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/craft", label: "Our Craft" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="STEPinKashmir — home">
          <Image
            src="/logo.png"
            alt="STEPinKashmir logo"
            width={40}
            height={40}
            className="brand-logo"
            priority
          />
          <span>
            <span className="brand-name">STEPinKashmir</span>
            <br />
            <span className="brand-sub">Kashmiri Handloom · Srinagar</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        {/* <span className="demo-badge">Demo v1</span> */}
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div className="container">
        <nav className={open ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
