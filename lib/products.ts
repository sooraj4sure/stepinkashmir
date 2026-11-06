// STEPinKashmir — demo catalogue
// Every item is drawn from the brand's own Instagram catalogue language:
// Kani sarees (beige paisley, black with gold paisley pallu, cream dense buti),
// Kani shawls (seven colourways), Kani Sozni & Kani Chinar suits, pashmina shawls.
// NO prices anywhere — every piece is "Enquire on WhatsApp".
// Photos are Unsplash samples, labelled as samples on the site.

export const WA_NUMBER = "916006145694";
export const IG_URL = "https://www.instagram.com/step__in_kashmir";
export const IG_HANDLE = "@step__in_kashmir";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Category = "Kani Sarees" | "Pashmina Shawls" | "Suits";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  short: string;
  description: string;
  fabric: string;
  weave: string;
  motifs: string;
  image: string;
  accent: string;
  badge?: string;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const PRODUCTS: Product[] = [
  {
    slug: "beige-kani-saree-paisley",
    name: "Beige Kani Saree — Paisley Weave",
    category: "Kani Sarees",
    short: "Soft beige silk with intricate woven paisley — the look from our latest catalogue.",
    description:
      "A soft beige Kani silk saree with dense paisley woven thread by thread on the handloom. The paisley — the buta — is not printed or embroidered; it is built into the fabric itself by the weaver's kanis, following the Talim. An easy, elegant drape for weddings, festive evenings and heirloom wardrobes.",
    fabric: "Pure silk",
    weave: "Handloom Kani",
    motifs: "Paisley (buta) · floral vine",
    image: img("1610030469983-98e550d6193c"),
    accent: "Beige · multicolour paisley",
    badge: "Catalogue favourite",
  },
  {
    slug: "black-kani-silk-saree-gold-pallu",
    name: "Black Kani Silk Saree — Gold Paisley Pallu",
    category: "Kani Sarees",
    short: "Dramatic black silk with a gold and multicolour paisley pallu.",
    description:
      "A hanging black Kani silk saree whose pallu carries dense gold and multicolour paisley against the dark ground — the most striking piece in the collection. Woven on the handloom in Kashmir, each motif placed by hand with wooden kanis. Made for grand celebrations and bridal trousseaus.",
    fabric: "Pure silk",
    weave: "Handloom Kani",
    motifs: "Gold paisley pallu · Mughal floral",
    image: img("1617627143750-d86bc21e42bb"),
    accent: "Black · gold · multicolour",
    badge: "Statement piece",
  },
  {
    slug: "cream-kani-saree-dense-buti",
    name: "Cream Kani Saree — Dense Buti",
    category: "Kani Sarees",
    short: "Cream silk with dense woven buti and a rich border.",
    description:
      "A cream Kani saree covered in dense woven buti — tiny motifs repeated across the body — with a detailed border. The close-up work is what Kani is known for: months at the loom, a design held in the weaver's memory and counted aloud from the Talim. Quiet luxury, worn beautifully.",
    fabric: "Pure silk",
    weave: "Handloom Kani",
    motifs: "Dense buti · detailed border",
    image: img("1585487000160-6ebcfceb0d03"),
    accent: "Cream · multicolour buti",
  },
  {
    slug: "kani-chinar-saree",
    name: "Kani Chinar Saree",
    category: "Kani Sarees",
    short: "The chinar leaf — Kashmir's own motif — woven into silk.",
    description:
      "Our Kani Chinar saree carries the chinar leaf, the tree that defines Kashmir's autumn, woven into the fabric in deep, warm colour. Chinar motifs have travelled from Mughal gardens into Kashmiri looms over centuries, and they remain the most loved pattern in the valley.",
    fabric: "Pure silk",
    weave: "Handloom Kani",
    motifs: "Chinar leaf · floral vine",
    image: img("1594736797933-d0501ba2fe65"),
    accent: "Deep tones · chinar",
  },
  {
    slug: "kani-jamawar-saree-mughal",
    name: "Kani Jamawar Saree — Mughal Motifs",
    category: "Kani Sarees",
    short: "All-over Jamawar weaving with Mughal garden motifs.",
    description:
      "An all-over Jamawar Kani saree — the body, border and pallu woven as one continuous garden of motifs. Jamawar is the densest form of Kani weaving, and the most time-consuming: a single piece can take a master weaver months. For brides and collectors who want the fullest expression of the craft.",
    fabric: "Pure silk",
    weave: "Handloom Kani Jamawar",
    motifs: "Mughal garden · paisley · floral jaal",
    image: img("1524504388940-b1c1722653e1"),
    accent: "Rich multicolour",
    badge: "Heirloom",
  },
  {
    slug: "kani-shawl-seven-colours",
    name: "Kani Shawl — Seven Colourways",
    category: "Pashmina Shawls",
    short: "Our signature Kani shawl in cream, red, blue, black, beige, mint and pink.",
    description:
      "The shawl that started it all — handwoven Kani in seven colourways: cream, red, blue, black, beige, mint and pink. The same dense floral and paisley weaving as our sarees, in a wrap that goes from a winter wedding to an evening out. Choose your colour on WhatsApp and we will show you the piece before you decide.",
    fabric: "Wool · Kani weave",
    weave: "Handloom Kani",
    motifs: "Floral · paisley · chinar",
    image: img("1529139574466-a303027c1d8b"),
    accent: "Cream · red · blue · black · beige · mint · pink",
    badge: "Bestseller",
  },
  {
    slug: "pashmina-shawl-sozni-floral",
    name: "Pashmina Shawl — Sozni Floral",
    category: "Pashmina Shawls",
    short: "Fine pashmina with delicate Sozni needle-work florals.",
    description:
      "A fine pashmina shawl finished with Sozni — the needle embroidery Kashmir is famous for — in soft floral work. Pashmina comes from the Changthangi goat of Ladakh, each animal yielding only a small amount of fibre a year, which is why true pashmina is scarce, warm and feather-light.",
    fabric: "Pashmina",
    weave: "Handloom · Sozni embroidery",
    motifs: "Sozni floral",
    image: img("1601924994987-69e26d50dc26"),
    accent: "Soft pastels",
  },
  {
    slug: "moonlight-kani-shawl",
    name: "Moonlight Kani Shawl",
    category: "Pashmina Shawls",
    short: "Premium Kani weaving in soft, moonlit tones.",
    description:
      "Our premium Moonlight Kani shawl — soft, luminous tones with the same intricate Kani weave, made for evenings and occasions. Woven slowly, finished by hand, and checked piece by piece before it leaves Srinagar.",
    fabric: "Wool · Kani weave",
    weave: "Handloom Kani",
    motifs: "Floral · paisley",
    image: img("1610030469668-8e9f641aaf27"),
    accent: "Moonlight tones",
    badge: "Premium",
  },
  {
    slug: "pure-woolen-kani-sozni-suit",
    name: "Pure Woolen Kani Sozni Suit",
    category: "Suits",
    short: "Warm woolen suit with Kani weaving and Sozni work.",
    description:
      "A pure woolen suit with Kani weaving and Sozni needle-work — made for Kashmir's winters and for anyone who wants warmth without giving up elegance. The suit pairs a woven body with a detailed dupatta, ready for festive days and family occasions.",
    fabric: "Pure wool",
    weave: "Handloom Kani · Sozni",
    motifs: "Sozni floral · Kani border",
    image: img("1558769132-cb1aea458c5e"),
    accent: "Warm wool tones",
    badge: "Winter favourite",
  },
  {
    slug: "kani-chinar-suit",
    name: "Kani Chinar Suit",
    category: "Suits",
    short: "Chinar-tree motifs woven into a woolen suit set.",
    description:
      "Our Kani Chinar suit — the chinar tree, woven in rich colour across the fabric, with a matching dupatta. A restocked favourite: the chinar collection sells through quickly every season, so message us on WhatsApp to check the latest pieces.",
    fabric: "Pure wool",
    weave: "Handloom Kani",
    motifs: "Chinar tree · floral",
    image: img("1595777457583-95e059d581b8"),
    accent: "Deep autumn tones",
  },
  {
    slug: "kani-suit-chinar-tree",
    name: "Kani Suit — Chinar Tree",
    category: "Suits",
    short: "A fresh restock of the chinar-tree suit in new colourways.",
    description:
      "A fresh restock of the chinar-tree suit — the same beloved motif in new colourways. Each suit is woven by hand, so no two pieces are exactly alike. Ask on WhatsApp for the colours available this week.",
    fabric: "Pure wool",
    weave: "Handloom Kani",
    motifs: "Chinar tree",
    image: img("1602810318383-e386cc2a3ccf"),
    accent: "New colourways",
    badge: "Restocked",
  },
];

export const HERO_IMAGE = img("1583391733956-3750e0ff4e8b", 1600);
export const CRAFT_IMAGE = img("1611574557351-00889b20a36b", 1400);
export const CRAFT_IMAGE_2 = img("1558769132-cb1aea458c5e", 1200);
export const COLLECTION_IMAGE = img("1445205170230-053b83016050", 1400);

export function productBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, n = 3) {
  const current = productBySlug(slug);
  if (!current) return PRODUCTS.slice(0, n);
  const same = PRODUCTS.filter((p) => p.category === current.category && p.slug !== slug);
  const others = PRODUCTS.filter((p) => p.category !== current.category);
  return [...same, ...others].slice(0, n);
}
