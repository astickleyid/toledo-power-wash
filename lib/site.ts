/** Central business contact + SEO config */
export const site = {
  name: "Toledo Power Wash",
  owner: "Austin Stickley",
  email: process.env.NEXT_PUBLIC_EMAIL || "austin@toledopowerwash.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
  city: "Toledo, OH",
  region: "Northwest Ohio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toledo-power-wash.vercel.app",
  tagline: "Professional power washing for homes and businesses in Toledo, Ohio",
};

export function phoneHref(): string | null {
  const raw = site.phone || site.phoneDisplay;
  if (!raw) return null;
  const digits = raw.replace(/[^\d+]/g, "");
  if (!digits) return null;
  return `tel:${digits.startsWith("+") ? digits : `+1${digits.replace(/\D/g, "").slice(-10)}`}`;
}

export function phoneLabel(): string {
  if (site.phoneDisplay) return site.phoneDisplay;
  const p = site.phone;
  if (p.startsWith("+1") && p.length === 12) {
    return `(${p.slice(2, 5)}) ${p.slice(5, 8)}-${p.slice(8)}`;
  }
  return p || "";
}

export const services = [
  {
    slug: "parking-lots-sidewalks",
    title: "Parking lots & sidewalks",
    keyword: "parking lot cleaning Toledo",
    summary:
      "Surface cleaning for commercial flatwork — parking lots, sidewalks, and walkways that accumulate salt, oil, and grime.",
  },
  {
    slug: "dumpster-pads",
    title: "Dumpster pad cleaning",
    keyword: "dumpster pad cleaning Toledo",
    summary:
      "Degreasing and washing of dumpster pads and grease areas that affect curb appeal and safety.",
  },
  {
    slug: "building-exteriors",
    title: "Building exteriors",
    keyword: "building exterior washing Toledo",
    summary:
      "Soft wash and controlled exterior cleaning for storefronts, multifamily buildings, and commercial facades.",
  },
  {
    slug: "house-washing",
    title: "House washing",
    keyword: "house washing Toledo",
    summary:
      "Residential exterior washing to remove dirt, mildew, and winter buildup from siding and trim.",
  },
  {
    slug: "driveways",
    title: "Driveway cleaning",
    keyword: "driveway pressure washing Toledo",
    summary: "Residential driveway and walkway cleaning for curb appeal and safer surfaces.",
  },
  {
    slug: "recurring-commercial",
    title: "Recurring commercial plans",
    keyword: "commercial power washing Toledo",
    summary:
      "Monthly or quarterly exterior cleaning schedules for property managers who want consistent results.",
  },
];

export const serviceAreas = [
  "Toledo",
  "Sylvania",
  "Maumee",
  "Perrysburg",
  "Oregon",
  "Holland",
  "Rossford",
  "Waterville",
  "Lucas County",
  "NW Ohio",
];

export const faqs = [
  {
    q: "How much does power washing cost in Toledo?",
    a: "Pricing depends on surface type, size, and condition. Commercial flatwork is often quoted per square foot; dumpster pads and greasy areas are higher. Residential jobs usually start with a site review or photos. We provide free estimates with no obligation.",
  },
  {
    q: "Do you offer commercial power washing for property managers?",
    a: "Yes. We work with apartments, retail plazas, restaurants, and facilities teams. We can provide certificates of insurance, photo documentation, and recurring monthly or quarterly schedules.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in the Toledo area and serve Toledo, Sylvania, Maumee, Perrysburg, Oregon, Holland, Rossford, Waterville, and surrounding Northwest Ohio communities.",
  },
  {
    q: "Are you insured?",
    a: "General liability insurance is part of how we operate for commercial and residential work. A certificate of insurance can be provided for approved commercial accounts.",
  },
  {
    q: "How do I get a free estimate?",
    a: "Use the quote form on this site, or email us with the property address, what needs cleaned, and photos if available. For commercial sites we can schedule a walkthrough when needed.",
  },
];
