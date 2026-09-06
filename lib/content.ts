/**
 * Single source of truth for arbourviewmattamy.com — Builder & WideLot™ Spotlight.
 * Every page, metadata block, and JSON-LD block reads from this file.
 *
 * HOW TO BUMP FRESHNESS DATES:
 * When Mattamy Homes releases new Arbourview details (pricing, floor plans,
 * occupancy, incentives, deposit schedule), update LAST_UPDATED and LAST_UPDATED_ISO
 * here. Sitemap lastmod, footer, FAQ, JSON-LD dateModified, and disclaimer copy
 * all derive from these two constants.
 */

export const SITE_URL = "https://arbourviewmattamy.com";
export const SITE_NAME = "arbourviewmattamy.com";
export const SITE_ORG_NAME = "arbourviewmattamy.com";
export const PROJECT_NAME = "Arbourview";
export const PROJECT_NAME_FULL = "Arbourview by Mattamy Homes";
export const WORDMARK = "Arbourview";
export const BUILDER = "Mattamy Homes";
export const CITY = "Georgetown";
export const MUNICIPALITY = "Halton Hills";
export const SITE_ADDRESS = "10114 Eighth Line, Halton Hills, ON L7G 4S5";
export const LAST_UPDATED = "September 1, 2026";
export const LAST_UPDATED_ISO = "2026-09-01";
export const STATUS = "Coming Soon — Registration Open";
export const STATUS_BADGE = "Coming Soon — Registration Open";
export const TAGLINE = "Where Your Kids Will Know the Farmers by Name";
export const SITE_SOURCE = "arbourviewmattamy.com";

export const GEO = {
  // Verified from Mattamy Homes' official Arbourview "Directions" link.
  latitude: 43.6200855,
  longitude: -79.8893979,
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=10114%20Eighth%20Line%2C%20Halton%20Hills%2C%20ON%20L7G%204S5&z=14&output=embed";

export const HERO_EYEBROW = "PRE-CONSTRUCTION · GEORGETOWN, ONTARIO · BUILDER & WIDELOT™";
export const HERO_SUBHEAD =
  "Townhomes and detached WideLot™ homes by Mattamy Homes at 10114 Eighth Line, Halton Hills — a Coming Soon community built around Mattamy's wider-lot design language.";
export const CTA_LABEL = "Register for Arbourview Updates";
export const CTA_NAV_LABEL = "VIP Registration";
export const FORM_HEADING = "VIP Registration";
export const FORM_LEDE =
  "Register for Arbourview community updates from the Registration Team. Free, with no purchase obligation. Registered buyers are typically notified first when Mattamy Homes releases floor plans and pricing.";
export const HERO_SECONDARY_CTA = "View Arbourview floor plans";
export const FOOTER_BLURB =
  "Independent builder and WideLot™ spotlight for Arbourview by Mattamy Homes in Georgetown, Ontario. Not the official Mattamy Homes website.";

export const HERO_IMAGE = {
  src: "/images/arbourview-hero.webp",
    alt: "Arbourview by Mattamy Homes — Eighth Line countryside setting for WideLot™ homes in Georgetown",
  caption:
    "Rural-edge Georgetown context for Arbourview at 10114 Eighth Line. Official architectural renderings have not been released by Mattamy Homes as of September 1, 2026.",
  width: 1536,
  height: 1024,
} as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/arbourview-hero.webp",
    alt: "Arbourview renderings placeholder — Eighth Line countryside at the edge of Georgetown",
    caption:
      "Countryside and conservation-edge context near 10114 Eighth Line. Independent neighbourhood-context photography, not an official Mattamy Homes rendering of Arbourview.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/georgetown-main-street.webp",
    alt: "Arbourview location context — historic downtown Georgetown Main Street boutiques and cafés",
    caption:
      "Historic downtown Georgetown Main Street, the well-preserved small-town commercial strip Mattamy Homes cites as part of Arbourview's setting. Neighbourhood-context photography, not a project rendering.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/hungry-hollow-trails.webp",
    alt: "Arbourview nearby recreation — Hungry Hollow conservation trails in Georgetown",
    caption:
      "Forested walking path typical of the Hungry Hollow trails and conservation area in Georgetown. Independent neighbourhood-context photography used until Mattamy Homes releases Arbourview renderings.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/widelot-streetscape.webp",
    alt: "WideLot homes Georgetown streetscape illustrating wider-than-standard lot character",
    caption:
      "A wider-lot Ontario street profile illustrating the kind of streetscape Mattamy's WideLot™ concept is designed to create. This is not an official Arbourview elevation or site plan.",
    width: 1536,
    height: 1024,
  },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Arbourview. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of September 1, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Arbourview and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Arbourview Georgetown | Mattamy Homes New Homes",
    description:
      "New townhomes & detached homes by Mattamy Homes at Arbourview in Georgetown. Register for prices & floor plans.",
    h1: "Arbourview by Mattamy Homes — WideLot™ Homes in Georgetown",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Arbourview Floor Plans | Townhomes & Detached",
    description:
      "Explore planned collection tiers at Arbourview Georgetown — townhomes and detached homes by Mattamy Homes.",
    h1: "Arbourview Floor Plans — Townhomes & Detached WideLot™ Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Arbourview Prices | Deposit Structure Georgetown",
    description:
      "Arbourview pricing and deposit structure, tracked and updated as Mattamy Homes releases details.",
    h1: "Arbourview Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Arbourview Location | Eighth Line, Georgetown",
    description:
      "Arbourview sits at 10114 Eighth Line, Georgetown — downtown, trails, transit & schools.",
    h1: "Arbourview Location — Eighth Line, Georgetown",
  },
  gallery: {
    path: "/gallery",
    title: "Arbourview Renderings | Site Plan Georgetown",
    description:
      "Renderings and site plan for Arbourview, Mattamy Homes' newest Georgetown community.",
    h1: "Arbourview Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Arbourview FAQ | Prices, Deposit & VIP Access",
    description:
      "Answers to the most common Arbourview questions — pricing, deposit, launch date, schools & more.",
    h1: "Arbourview FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Arbourview VIP Updates Georgetown",
    description:
      "Register for Arbourview community updates and get first access to pricing and floor plans.",
    h1: "Register for Arbourview Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Arbourview Georgetown",
    description:
      "Your Arbourview VIP registration has been received. You will be notified when pricing and floor plans are released.",
    h1: "Registration received",
    robots: { index: false, follow: false },
  },
  guide: {
    path: "/blog/mattamy-homes-widelot-builder-guide",
    title: "Mattamy Homes' WideLot™ Design: A Builder Guide for",
    description:
      "Mattamy Homes' WideLot™ Design: A Builder Guide for Georgetown Buyers — practical, sourced context for Halton Hills pre-construction buyers.",
    h1: "Mattamy Homes' WideLot™ Design: A Builder Guide for Georgetown Buyers",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | arbourviewmattamy.com",
    description:
      "How this independent Arbourview information site collects, stores, and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | arbourviewmattamy.com",
    description:
      "Terms of use for this independent Arbourview information and registration website.",
    h1: "Terms of Use",
  },
};

export const NAV = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/mattamy-homes-widelot-builder-guide", label: "Builder Guide" },
] as const;

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Arbourview floor plans" },
  pricing: { href: "/pricing", text: "See Arbourview pricing & deposit structure" },
  location: { href: "/location", text: "Explore the Arbourview location" },
  faq: { href: "/faq", text: "Read the full Arbourview FAQ" },
  floorPlansPricing: { href: "/pricing", text: "Check current Arbourview pricing" },
  floorPlansRegister: { href: "/register", text: "Register for floor plan updates" },
  pricingRegister: {
    href: "/register",
    text: "Register to be notified when prices release",
  },
  locationFaq: { href: "/faq", text: "See more Arbourview location FAQs" },
  faqRegister: { href: "/register", text: "Register for Arbourview updates" },
  guide: {
    href: "/blog/mattamy-homes-widelot-builder-guide",
    text: "Mattamy Homes' WideLot™ Design: A Builder Guide for Georgetown Buyers",
  },
} as const;

export const QUICK_FACTS = [
  { label: "Builder", value: "Mattamy Homes" },
  { label: "Type", value: "Townhomes & Detached Homes (WideLot™)" },
  { label: "Address", value: "10114 Eighth Line, Halton Hills, ON L7G 4S5" },
  { label: "City", value: "Georgetown, Halton Hills, Ontario" },
  { label: "Nearby", value: "Downtown Georgetown Main Street, Hungry Hollow trails" },
  { label: "Connectivity", value: "GO Transit, Highways 7, 401, 407" },
  { label: "Starting Price", value: "To be announced" },
  { label: "Deposit", value: "To be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Status", value: "Coming Soon — Registration Open" },
] as const;

export const HOME_ANSWER =
  "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in its Coming Soon stage, with pricing and floor plans to be released to registered buyers first.";

export const HOME_OVERVIEW = [
  "Arbourview is Mattamy Homes' newest community in Georgetown, part of Halton Hills, Ontario, sited at 10114 Eighth Line on the edge of one of the GTA's most well-preserved small-town downtowns. Mattamy markets the community around its connection to everyday small-town life — walkable access to Georgetown's historic Main Street, the weekly Georgetown Farmers' Market, and the surrounding Hungry Hollow trail network — while still offering commuter access to GO Transit and Highways 7, 401, and 407.",
  "This independent site is the builder-and-product spotlight for Arbourview by Mattamy Homes. It exists so buyers can read, in crawlable HTML, who is constructing the community, how Mattamy's WideLot™ design language is supposed to shape the street, and which facts remain unpublished as of the Coming Soon stage. Mattamy's own Arbourview page is a client-side registration app; this page is the static, sourced alternative that answer engines and search crawlers can actually quote.",
  "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. The company is known for its WideLot™ home design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, which uses wider-than-standard lot widths to create a more spacious street profile and larger living areas — a design language Arbourview is being built around. That origin story is public corporate history, not a marketing invention of this site, and it is the reason this domain goes deeper on product design than on price tracking.",
  "Mattamy Homes has confirmed Arbourview will include both townhomes and detached homes, alongside nearby recreation at the Gellert Community Centre and Williams Mill Creative Arts Studios. Specific floor plans, lot widths, square footage, and building heights have not yet been released as of the project's Coming Soon stage. Until those measurements exist, the honest product description is two collection tiers plus a trademarked lot-width idea — not a fabricated model list borrowed from another Mattamy community.",
  "As of this page's last update, Mattamy Homes has not released pricing, floor plans, or a firm launch date for Arbourview. This site exists to track every verified detail as it becomes public and to give interested buyers a straightforward way to register for updates. The five-field form in the hero is the only contact channel; there is no named salesperson, no brokerage, and no phone number on arbourviewmattamy.com.",
  "Arbourview by Mattamy Homes is therefore a Coming Soon file with a named builder, a named civic address, two planned housing types, and a WideLot™ street language still waiting for its numbers. Use this overview for the builder record, then continue with floor plans, pricing, location, and the FAQ for the same facts in more depth. E.&O.E. Information current as of September 1, 2026.",
];

export const BUILDER_COPY = [
  "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan, and a top-25 homebuilder in the United States. Those three facts — founding year, Canadian ownership, and US scale — are the public track-record statement this site is willing to make. Awards lists and sales-volume bragging from third-party roundup pages are not copied here, because they are not Arbourview-specific and they go stale without a dated source.",
  "The product idea that ties Mattamy's corporate history to Arbourview is WideLot™. Mattamy introduced the concept in the 1990s at The Orchard in Burlington, Ontario, using wider-than-typical lot widths so the street profile and the interior rooms both gain space. Arbourview in Georgetown is being planned around that same design language. What has not been published is the measured lot width in feet for Eighth Line, so this page will not borrow a Burlington, Oakville, or Milton figure and paste it onto Halton Hills.",
  "Mattamy Homes typically structures Ontario launches as named collections presented at a VIP appointment, with elevations, included features, and a staged deposit schedule attached to the agreement of purchase and sale. That is a general process pattern observed across Mattamy communities, not a confirmed Arbourview package. Until the builder publishes Arbourview-specific materials, treat collection structure as expected process rather than a guaranteed product mix.",
  "This site does not impersonate the builder. Sentences about Mattamy Homes are written in the third person. There is no Mattamy logo used as a site mark, no “we are building” language, and no claim of affiliation. The wordmark on this domain reads Arbourview. Registration on this independent site is an information request, not an allocation with Mattamy Homes.",
];

export const WIDELOT_COPY = [
  "WideLot™ is a Mattamy Homes design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, that uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. Arbourview in Georgetown is being built around this WideLot™ concept, though exact lot dimensions for the project have not yet been released.",
  "On a standard GTA lot, the house often fills most of the frontage, leaving a narrow driveway and a pinched street. WideLot™ reverses that proportion: more lot width, more room for interior layout, and a street that reads as a neighbourhood rather than a packed row. Mattamy has used the idea for decades; Arbourview is the Georgetown community currently being planned around it.",
  "What WideLot™ does not yet tell a buyer is the number. Lot width in feet, interior square footage, and bedroom counts for Arbourview remain unpublished. Treat the trademark as a design language, not as a substitute for a floor-plan booklet. When Mattamy Homes releases Arbourview collections, this hub will add the measured figures rather than inventing them in advance.",
];

export const AEO_PASSAGES: { heading: string; text: string }[] = [
  {
    heading: "What is Arbourview and who is building it?",
    text: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. The project is located at 10114 Eighth Line and is currently in its Coming Soon registration stage.",
  },
  {
    heading: "Where is Arbourview located in Georgetown?",
    text: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.",
  },
  {
    heading: "What home types will be available at Arbourview?",
    text: "Arbourview is planned to offer townhomes and detached homes built using Mattamy's WideLot™ concept, which uses wider-than-standard lot widths to create more interior and exterior living space. Exact floor plans, lot sizes, and bedroom counts have not yet been released by Mattamy Homes as of the project's Coming Soon stage.",
  },
  {
    heading: "How much will homes at Arbourview cost?",
    text: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    heading: "What is a WideLot™ home?",
    text: "WideLot™ is a Mattamy Homes design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, that uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. Arbourview in Georgetown is being built around this WideLot™ concept, though exact lot dimensions for the project have not yet been released.",
  },
  {
    heading: "When will Arbourview launch for sale?",
    text: "Mattamy Homes has not announced a firm sales launch date for Arbourview. The project is currently in a Coming Soon, registration-only stage, where interested buyers can sign up for community updates to be notified when floor plans, pricing, and a VIP launch date are announced.",
  },
  {
    heading: "What is the deposit structure for Arbourview?",
    text: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registered buyers usually receive this information first, alongside pricing and floor plans.",
  },
  {
    heading: "How do I get VIP registration for Arbourview?",
    text: "Buyers can register for Arbourview community updates directly through this site's registration form, providing a first name, last name, email, and phone number. Registered buyers are typically notified ahead of the public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    heading: "What schools will serve Arbourview?",
    text: "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed and should be verified with the relevant board before purchase.",
  },
  {
    heading: "Is Arbourview a good investment?",
    text: "Arbourview sits close to an established, well-preserved downtown Georgetown with GO Transit and multi-highway access, which are generally favourable investment fundamentals for a commuter-friendly small town. As with any pre-construction purchase, buyers should weigh the unreleased pricing, deposit structure, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its agreement of purchase and sale.",
  },
  {
    heading: "What amenities are near Arbourview?",
    text: "Arbourview is close to Georgetown's historic downtown Main Street, home to boutiques, cafés, restaurants, and the Georgetown Farmers' Market. Nearby recreation includes the Hungry Hollow trails and conservation area, the Gellert Community Centre for fitness and swimming, and Williams Mill Creative Arts Studios.",
  },
  {
    heading: "What is the difference between Arbourview's townhomes and detached homes?",
    text: "Mattamy Homes has confirmed Arbourview will include both townhomes and detached homes built using its WideLot™ design concept, but has not yet released specific plan names, square footage, lot widths, or pricing for either collection as of the project's Coming Soon stage.",
  },
  {
    heading: "Who is Mattamy Homes and what is their track record?",
    text: "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan, and a top-25 homebuilder in the United States. The company introduced its WideLot™ home concept in the 1990s and has built communities across the Greater Toronto Area, including its newest Georgetown community, Arbourview.",
  },
  {
    heading: "What highways and transit serve Arbourview?",
    text: "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page, making it a commuter-friendly location within Halton Hills for travel across the Greater Toronto Area.",
  },
  {
    heading: "Is Arbourview close to downtown Georgetown?",
    text: "Yes. Arbourview is positioned close to one of the GTA's most well-preserved small-town downtowns, with Georgetown's historic Main Street, local boutiques, restaurants, and the Georgetown Farmers' Market within easy reach, alongside nearby trails and community recreation facilities.",
  },
];

export const HOME_LOCATION_AEO = AEO_PASSAGES.filter((item) =>
  [
    "Where is Arbourview located in Georgetown?",
    "What highways and transit serve Arbourview?",
    "What schools will serve Arbourview?",
    "What amenities are near Arbourview?",
    "Is Arbourview close to downtown Georgetown?",
  ].includes(item.heading),
);

export const FLOOR_PLAN_COLLECTIONS = [
  {
    name: "Townhomes",
    slug: "townhomes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned as part of Arbourview's Georgetown community, per Mattamy Homes' official project page. Individual plan names, square footage, and bedroom counts have not yet been released. Register above to be notified when floor plans are published.",
  },
  {
    name: "Detached Homes (WideLot™)",
    slug: "detached-homes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned using Mattamy's WideLot™ concept, built around wider-than-standard lot widths for more interior and exterior living space. Individual plan names, lot widths, and square footage have not yet been released by Mattamy Homes. Register above to be notified when floor plans are published.",
  },
] as const;

export const FLOOR_PLANS_ANSWER =
  "Arbourview floor plans have not been released by Mattamy Homes as of the project's Coming Soon stage. Planned collection tiers are townhomes and detached WideLot™ homes in Georgetown. Exact plan names, square footage, lot widths, and bedroom counts will be published at VIP launch.";

export const FLOOR_PLANS_COPY = [
  "Arbourview floor plans are the document most buyers want from Mattamy Homes first, and they are the document this page cannot yet display. The builder has confirmed two collection tiers for the Georgetown community — townhomes and detached homes built using the WideLot™ concept — but has not issued plan names, interior dimensions, lot widths in feet, or bedroom and bathroom counts. Until that booklet exists, the honest description of Arbourview floor plans is a pair of collection cards plus the design language those cards sit inside.",
  "Mattamy typically structures an Ontario collection release as named plans grouped under a product family, with elevations and included-feature sheets presented together at VIP. That pattern is how Mattamy has launched other GTA low-rise communities; it is not a confirmed Arbourview package. This page will not invent model names such as a “Elevation A” or a bedroom count borrowed from The Orchard, Oakville, or any other Mattamy street.",
  "WideLot™ is the part of the Arbourview floor-plan story that can be explained today without fabricating a square-footage table. Mattamy introduced the concept in the 1990s at The Orchard in Burlington, using wider-than-standard lot widths so the street profile and the interior rooms both gain space. Arbourview is being built around that same idea. What has not been released is the measured lot width for Georgetown, so a buyer should treat WideLot™ as a planned proportion, not as a published dimension.",
  "Townhomes at Arbourview are confirmed as a planned product type on Mattamy Homes' official project page. Tenure — freehold versus a POTL common-element arrangement — has not been published. This site therefore omits a maintenance-fee line rather than copying a townhouse fee from another Halton Hills project. Bedroom counts, parking layouts, and whether the townhome collection will share the WideLot™ street language with the detached homes are likewise unpublished.",
  "On other Mattamy Ontario streets, a wider lot often shows up in the plan as a wider kitchen-to-great-room span, a more generous foyer, or a driveway that is not forced into a single-car pinch. Those interior consequences are typical of the WideLot™ idea; they are not measured facts for Arbourview. When Mattamy publishes the Georgetown booklet, this page will add real cards — names, sizes, and bedroom counts — rather than remaining a placeholder.",
  "Registered buyers are typically notified first when Mattamy Homes publishes floor plans. There is no cost to register on this site, and registration does not reserve a specific lot or plan. Use the form on this page to request floor-plan updates, then review pricing status once figures are released. A dedicated, crawlable floor-plans page that refuses to invent model names is the correct pre-launch state for Arbourview by Mattamy Homes. E.&O.E. Information current as of September 1, 2026.",
];

export const PRICING_ANSWER =
  "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins.";

export const PRICING_AS_OF =
  "As of September 1, 2026, Mattamy Homes has not released pricing for Arbourview.";

export const PRICING_ROWS = [
  { type: "Townhomes", price: "To be announced", status: "Coming Soon" },
  { type: "Detached WideLot™ Homes", price: "To be announced", status: "Coming Soon" },
] as const;

export const DEPOSIT_ROWS = [
  { milestone: "Initial deposit on signing", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Second staged deposit", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Subsequent staged deposits", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Balance on closing", amount: "To be announced", due: "Occupancy to be announced" },
] as const;

export const INCENTIVE_ROWS = [
  { item: "Decor dollars / design studio credit", status: "To be announced" },
  { item: "Capped development charges", status: "To be announced" },
  { item: "Assignment fee policy", status: "To be announced" },
  { item: "Other launch incentives", status: "To be announced" },
] as const;

export const PRICING_COPY = [
  "Arbourview prices have not been published by Mattamy Homes. This page records the Coming Soon price-list status for the builder spotlight: every cell below reads “To be announced” until the builder issues a VIP list. Inventing a starting price to rank for “Arbourview prices” would be both inaccurate and a compliance failure. When Mattamy Homes issues a VIP list, the last-updated date in the site source file is the switch that republishes these tables.",
  "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities. The usual pattern — an initial deposit on signing, then further deposits at set intervals before occupancy — is described here as general builder process, not as a confirmed Arbourview schedule. Amounts, percentages, and due dates remain to be announced. Occupancy and closing dates are likewise unreleased.",
  "Incentives such as decor dollars or capped development charges have appeared on other Mattamy Ontario launches in the past. Any Arbourview-specific incentive will be confirmed at VIP launch, not before. This site will not invent a number to fill a template slot, and it will not import another Halton Hills project's opening price onto Eighth Line. Lot premiums, elevation premiums, and included-feature packages usually move the real price more than a collection's opening number — and none of those adders is public for this Georgetown community.",
  "A general Mattamy Ontario VIP launch still tends to look like this: registered buyers receive a notice, a sales appointment window opens, collections and prices are presented together, and a staged deposit schedule is attached to the agreement of purchase and sale. None of those intervals is confirmed for Arbourview. Development-charge treatment, assignment fees, rental restrictions, and whether townhomes are freehold or POTL belong in the purchase agreement, not on a guess.",
  "Because this domain's job is builder context rather than price speculation, the tables stay empty of invented figures on purpose. A WideLot™ detached home and a townhome at Arbourview will almost certainly sit in different price bands once Mattamy publishes them; until those bands exist, the only accurate public statement is that pricing has not been released. Register to be notified when prices release.",
  "Until figures exist, the only accurate statement about Arbourview prices is that pricing has not been released. This tracker exists so the first public, crawlable table for Arbourview by Mattamy Homes is a dated “to be announced” record rather than a blank page or an invented bracket. Check current Arbourview pricing here as the list is updated. E.&O.E. Information current as of September 1, 2026.",
];

export const LOCATION_ANSWER =
  "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, on the edge of Georgetown's established downtown. The community sits close to Georgetown's historic Main Street, the Georgetown Farmers' Market, and the Hungry Hollow trail and conservation area, with practical access to GO Transit and Highways 7, 401, and 407.";

export const LOCATION_COPY = {
  intro: [
    "Arbourview location is the part of the public record that can be written down today, even while floor plans and prices remain unpublished. The civic address is 10114 Eighth Line, Halton Hills, ON L7G 4S5. The map pin used on this site is 43.6200855, −79.8893979, taken from Mattamy Homes' own Arbourview directions link and treated as verified, not approximate. Those named facts — street, municipality, postal code, coordinates — are the ones a listing, a school-board query, or an answer engine should repeat.",
    "Eighth Line is a north-south rural-edge road on the Georgetown side of Halton Hills. Arbourview sits on that edge rather than inside a newly invented marketing district. The practical implication is that downtown Georgetown, the Hungry Hollow conservation lands, and the GO / highway network are the named neighbours, not a future retail block that has yet to be zoned.",
    "This page balances five location threads in equal depth: the Eighth Line address, downtown Georgetown and the Farmers' Market, recreation at Hungry Hollow, Gellert Community Centre and Williams Mill, GO Transit plus Highways 7, 401 and 407, and the Halton school-board catchment pattern. WideLot™ is treated here as a living-space fact of the planned street, not as a slogan.",
  ],
  downtown: [
    "Downtown Georgetown is one of the GTA's most well-preserved small-town Main Streets. Brick commercial blocks, independent boutiques, cafés, and restaurants sit along a historic corridor that still functions as a daily high street rather than a reconstructed lifestyle set. Mattamy Homes' official Arbourview page cites that Main Street character as part of the community's setting.",
    "The Georgetown Farmers' Market is the weekly counterpart to that Main Street. It is a named civic habit, not a future amenity drawing. For a pre-construction community marketed around “Where Your Kids Will Know the Farmers by Name,” the market is the concrete place that tagline points to. Arbourview does not invent a farmers' market; Georgetown already has one.",
    "Proximity to an established downtown is the location contrast with many GTA greenfield launches that sit years away from a café or a grocery. Arbourview is planned close to that existing commercial fabric. Exact walking minutes from a specific future lot to a specific storefront are not published and are not invented here; the planning fact is the named Main Street, not a guaranteed stroll time.",
  ],
  recreation: [
    "Hungry Hollow is the named trail and conservation landscape tied to Arbourview. Forested walking paths, bridges, and creek-side scenery run through Georgetown's conservation lands. Mattamy Homes lists Hungry Hollow trails and conservation areas as part of the Arbourview setting. Trail conditions, winter maintenance, and which segments are open on a given weekend should be confirmed locally; the existence of the network is the sourced fact.",
    "Gellert Community Centre supplies indoor recreation that a trail system cannot: fitness, swimming, and sports facilities serving Halton Hills. Williams Mill Creative Arts Studios is the named arts address on Mattamy's Arbourview page — studios and programming rather than a marketing “arts district.” Together with Hungry Hollow, those three names are the recreation statement this page is willing to make.",
    "Parks, playgrounds, and additional green spaces exist throughout Halton Hills. This site will not invent a park name on the Arbourview parcel itself. Until Mattamy Homes or the Town of Halton Hills publishes a community park inside the Eighth Line lands, recreation is described as nearby, named, and already operating — Hungry Hollow, Gellert, Williams Mill — rather than as a future amenity map.",
  ],
  transit: [
    "Arbourview is positioned with practical access to GO Transit and Highways 7, 401, and 407, according to Mattamy Homes' official project page. Those named corridors are the transit and highway facts this page will state. Door-to-office minutes are not. Drive times vary with traffic, shift, and destination and should be verified by each buyer.",
    "GO Transit is Georgetown's regional rail and bus connection into the Greater Toronto Area. Highway 7 is the local east-west arterial through Halton Hills. Highway 401 is the southern GTA freeway spine. Highway 407 is the toll highway along the northern GTA edge. Together they describe a commuter-friendly Halton Hills location rather than a single guaranteed train platform on the Arbourview parcel.",
    "This page does not invent a GO station walking distance, a bus-stop metre count, or a future transit expansion. Confirm current GO schedules and parking with Metrolinx. Confirm highway routing against a live map from 10114 Eighth Line. The complete highway-and-transit statement as of September 1, 2026 is: GO Transit access, plus Highways 7, 401, and 407.",
  ],
  schools: [
    "Arbourview falls within Halton Hills, an area generally served by the Halton District School Board and the Halton Catholic District School Board. That board-level statement is the catchment pattern this page can make. Exact school assignments for the Eighth Line site have not been confirmed.",
    "[UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.] Named elementary and secondary schools are not listed here as confirmed for 10114 Eighth Line. French immersion, gifted, and Catholic versus public assignment can all differ from a neighbour one concession over.",
    "A planned Mattamy community is not an open school. Buyers who need a specific program should verify with the relevant board before relying on any third-party map. This builder spotlight will not name “the Arbourview school” until a board confirms it for this parcel.",
  ],
  widelot: [
    "WideLot™ is a Mattamy Homes design concept introduced in the 1990s at The Orchard community in Burlington, Ontario, using wider-than-typical lot widths to create a more spacious street profile and larger living areas. Arbourview is being built around this WideLot™ concept, though Mattamy has not yet released the exact lot dimensions planned for the Georgetown community.",
    "On the location page, WideLot™ is a street-form fact: Eighth Line's rural-edge setting plus a planned wider lot pattern is a different neighbourhood geometry from a packed greenfield grid. It is not a measured lot table. Interior square footage, bedroom counts, and lot width in feet remain to be announced.",
    "Taken together, the Arbourview location story is a named civic address at 10114 Eighth Line; a historic downtown Main Street and weekly Farmers' Market; Hungry Hollow trails, Gellert Community Centre, and Williams Mill; GO Transit with Highways 7, 401, and 407; two Halton school boards with unconfirmed catchments; and a WideLot™ street language still waiting for its numbers. See more Arbourview location FAQs for the same facts in question form.",
  ],
};

export const FAQ_PAGE_INTRO =
  "This Arbourview FAQ is the buyer-answer set for a Coming Soon community by Mattamy Homes in Georgetown: who builds it, what WideLot™ means, where the Eighth Line lands sit, which home types are planned, what remains unreleased, and how VIP registration works. Every answer below is written to stand alone if quoted by an answer engine. Unreleased figures stay labelled as to be announced. Last updated: September 1, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is Arbourview?",
    a: "Arbourview is a new pre-construction community by Mattamy Homes in Georgetown, part of Halton Hills, Ontario, planned to offer townhomes and detached homes built using Mattamy's WideLot™ design concept. Located at 10114 Eighth Line, the project is currently in a Coming Soon, registration-only stage.",
  },
  {
    q: "Who is the builder behind Arbourview?",
    a: "Arbourview is being built by Mattamy Homes, Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. Mattamy is also the company behind the WideLot™ home design concept Arbourview is being built around.",
  },
  {
    q: "Where exactly is Arbourview located?",
    a: "Arbourview is located at 10114 Eighth Line, Halton Hills, Ontario, close to Georgetown's historic downtown Main Street. The site has practical access to GO Transit and Highways 7, 401, and 407 for commuting across the Greater Toronto Area.",
  },
  {
    q: "What home types and sizes are available at Arbourview?",
    a: "Per Mattamy Homes' official project page, Arbourview is planned to include both townhomes and detached homes, built using Mattamy's WideLot™ concept for wider-than-standard lot widths. Exact floor plans, lot widths, and square footage have not yet been released.",
  },
  {
    q: "How much do homes at Arbourview cost?",
    a: "Mattamy Homes has not released pricing for Arbourview as of its Coming Soon stage. Registered buyers typically receive first access to pricing and floor plans once the VIP launch phase begins.",
  },
  {
    q: "What schools serve Arbourview?",
    a: "Arbourview falls within Halton Hills, generally served by the Halton District School Board and the Halton Catholic District School Board. Exact school catchment assignments for the Eighth Line site have not been confirmed — buyers should verify with the relevant board before purchasing.",
  },
  {
    q: "How do I get VIP access to Arbourview?",
    a: "You can register for Arbourview community updates directly on this site using the five-field form — first name, last name, email, and phone. Registered buyers are typically notified ahead of the general public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    q: "What is the deposit structure for Arbourview?",
    a: "Arbourview's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registering for updates is the fastest way to receive this information when it is released.",
  },
  {
    q: "When is the launch or occupancy for Arbourview?",
    a: "Mattamy Homes has not announced a firm sales launch date or occupancy timeline for Arbourview. The project is currently in a Coming Soon, registration-only stage; registered buyers are typically notified first when a VIP launch date is set.",
  },
  {
    q: "Are there incentives at Arbourview?",
    a: "Incentives for Arbourview have not been announced as of its Coming Soon stage. Mattamy Homes has offered incentives such as decor dollars or capped development charges on other Ontario launches in the past; any Arbourview-specific incentives will be confirmed at VIP launch, not before.",
  },
  {
    q: "Is there a cost to register for Arbourview?",
    a: "No. Registering for Arbourview community updates is free and simply adds you to Mattamy Homes' notification list for this project. There is no obligation to purchase and no cost associated with registering.",
  },
  {
    q: "What is the assignment or rental policy at Arbourview?",
    a: "Mattamy Homes has not published an assignment or rental policy specific to Arbourview, as the project has not yet reached its agreement of purchase and sale stage. Assignment and rental terms are typically detailed in the builder's purchase agreement at VIP launch — confirm directly with Mattamy Homes before relying on any third-party summary.",
  },
  {
    q: "How does Arbourview compare to other Georgetown pre-construction communities?",
    a: "Arbourview stands out for its proximity to one of the GTA's best-preserved small-town downtowns — Georgetown's historic Main Street — along with GO Transit and multi-highway access. Compared to many new-launch communities built farther from an established downtown, Arbourview offers walkable small-town amenities from day one.",
  },
  {
    q: "Is Arbourview a good investment?",
    a: "Arbourview sits close to an established downtown Georgetown with strong commuter connectivity via GO Transit and Highways 7, 401, and 407 — generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the currently unreleased pricing, deposit schedule, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its purchase agreement.",
  },
  {
    q: "What is Mattamy's WideLot™ concept and why does it matter at Arbourview?",
    a: "WideLot™ is a Mattamy Homes design concept introduced in the 1990s at The Orchard community in Burlington, Ontario, using wider-than-typical lot widths to create a more spacious street profile and larger living areas. Arbourview is being built around this WideLot™ concept, though Mattamy has not yet released the exact lot dimensions planned for the community.",
  },
  {
    q: "What trails and green space are near Arbourview?",
    a: "Arbourview is close to the Hungry Hollow trails and conservation area, offering forested walking paths, bridges, and natural scenery within Georgetown. The area also has numerous parks, playgrounds, and green spaces throughout Halton Hills, per Mattamy Homes' official project page.",
  },
];

export const REGISTER_LEDE =
  "Registering for Arbourview community updates is how buyers typically receive first access to floor plans and pricing when they are released, plus advance notice of the VIP launch date. There is no purchase obligation and no cost to register.";

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog/mattamy-homes-widelot-builder-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const BLOG_GUIDE = {
  lede: "Mattamy Homes' WideLot™ design is the product idea sitting underneath Arbourview in Georgetown, and it is older than this Coming Soon file. This guide explains what WideLot™ has meant as a builder practice since the 1990s, how a Georgetown buyer should read it before a booklet exists, and which Arbourview facts remain unpublished as of September 1, 2026.",
  sections: [
    {
      h2: "What WideLot™ actually is — and what it is not",
      paragraphs: [
        "WideLot™ is a Mattamy Homes design concept, introduced in the 1990s at The Orchard community in Burlington, Ontario, that uses wider-than-typical lot widths to create a more spacious street profile and larger living areas inside and outside the home. That origin story is public corporate history. It is not a new slogan invented for Arbourview, and it is not a published measurement for the Eighth Line lands.",
        "A useful way to read the trademark is as a proportion, not as a square-footage promise. On many GTA lots, the house fills most of the frontage. WideLot™ is Mattamy's attempt to reverse that pinch: more width at the street, more room for interior layout, and a driveway and porch that are not forced into a single-car slot. Buyers who have walked The Orchard in Burlington have seen one version of that idea in the ground. Arbourview is a later community being planned around the same language.",
        "What WideLot™ is not: a published lot-width table for Georgetown, a bedroom count, a price band, or a guarantee that every Arbourview home will feel like a Burlington Orchard house. Mattamy has not released the exact lot dimensions planned for Arbourview. This guide will not borrow a figure from another Mattamy street and treat it as an Arbourview spec.",
      ],
    },
    {
      h2: "Who Mattamy Homes is, without the awards-page padding",
      paragraphs: [
        "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan, and a top-25 homebuilder in the United States. Those three facts are enough track record for a Coming Soon file. Third-party builder roundups that list awards, office addresses, or condo-tower résumés are not a substitute for Arbourview documents, and they are not copied here.",
        "For a Georgetown buyer, the relevant Mattamy questions are operational. How does the company usually release collections? When does a staged deposit schedule appear? Where do assignment and rental rules live? The honest answers are process answers: VIP launch, a booklet plus a price list, an agreement of purchase and sale. None of those documents exists for Arbourview as of this guide.",
        "This independent site does not speak for Mattamy Homes. Sentences about the builder stay in the third person. There is no “we are building” language, no Mattamy logo used as a site mark, and no claim of affiliation. Registration here is an information request, not an allocation.",
      ],
    },
    {
      h2: "How Mattamy typically structures a collection release",
      paragraphs: [
        "On other Ontario communities, Mattamy typically presents named collections rather than a single undifferentiated list. Elevations, included features, and lot premiums are usually shown together with the floor plans at a VIP appointment. That pattern is a general Mattamy practice. It is not a confirmed Arbourview package, and it is not a promise that Georgetown will receive the same elevations as Burlington or Oakville.",
        "Townhomes and detached homes are the two product types Mattamy has confirmed for Arbourview. That is a collection-tier statement, not a model list. Individual plan names, square footage, lot widths, and bedroom counts have not been released. Tenure for the townhomes — freehold versus a POTL common-element arrangement — is also unpublished, which is why this site omits a maintenance-fee line.",
        "A buyer who has bought with Mattamy before may remember a design studio, a colour-selection window, and a staged deposit calendar. Those memories are useful as process literacy. They are not Arbourview terms. When Mattamy publishes the Georgetown booklet, the comparison should be documents-to-documents, not memory-to-brochure.",
      ],
    },
    {
      h2: "Reading WideLot™ on an Eighth Line map",
      paragraphs: [
        "Arbourview is located at 10114 Eighth Line, Halton Hills, ON L7G 4S5, with coordinates 43.6200855, −79.8893979 taken from Mattamy Homes' own directions link. Eighth Line is a rural-edge road on the Georgetown side of Halton Hills. A WideLot™ street on that edge is a different geometry from a packed interior grid: more frontage per home, and a neighbour set that already includes downtown Georgetown, Hungry Hollow, and the GO / highway network.",
        "Mattamy markets Arbourview around small-town life — historic Main Street, the Georgetown Farmers' Market, Hungry Hollow trails, Gellert Community Centre, and Williams Mill Creative Arts Studios — while citing GO Transit and Highways 7, 401, and 407 for commuting. Those named assets already operate. They are not future amenity drawings. They also do not tell you how many feet of lot width Mattamy will sell on Eighth Line.",
        "Exact walking minutes from a future WideLot™ driveway to a specific Main Street storefront are not published. Drive times to a downtown office are not published. This guide will not invent them. Confirm current GO schedules with Metrolinx and highway routing from 10114 Eighth Line on a live map.",
      ],
    },
    {
      h2: "Deposits, occupancy, and the cash that sits between VIP and closing",
      paragraphs: [
        "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities: an initial deposit on signing, then further deposits at intervals before occupancy. That is a general pattern, not a confirmed Arbourview schedule. Amounts and due dates remain to be announced. Occupancy for Arbourview is to be announced, so any model that assumes a specific closing year is speculative.",
        "The practical implication of staging is liquidity. A schedule that asks for a large share in the first ninety days is a different product from one that spreads deposits over two years. Opportunity cost, not just the headline price, is the comparison. Carrying costs after occupancy include property tax, insurance, utilities, and — if townhomes are confirmed as POTL rather than freehold — a common-element fee.",
        "Incentives such as decor dollars or capped development charges have appeared on other Mattamy Ontario launches. Any Arbourview-specific incentive will be confirmed at VIP launch, not before. This guide will not invent a credit, a cap, or a “limited-time” window.",
      ],
    },
    {
      h2: "Assignment, rental, and the clauses a builder actually binds",
      paragraphs: [
        "Mattamy Homes has not published an assignment or rental policy specific to Arbourview, because the project has not reached its agreement of purchase and sale stage. Assignment fees, consent windows, and occupancy-before-rental rules are typically detailed in that agreement at VIP launch.",
        "Third-party summaries of other Mattamy communities are not Arbourview policy. A buyer who needs to assign before occupancy, or to rent on closing, should read the Arbourview agreement when it exists and confirm directly with Mattamy Homes. This independent site will not invent a fee or a yes/no.",
        "Resale after closing is a different legal event from assignment. Georgetown ground-oriented resale near Main Street and Eighth Line is the natural comparable set for Arbourview once closings occur. Until then, using another Halton Hills project's asking prices as an Arbourview forecast confuses two releases.",
      ],
    },
    {
      h2: "Schools, boards, and what a Coming Soon file cannot name",
      paragraphs: [
        "Arbourview falls within Halton Hills, generally served by the Halton District School Board and the Halton Catholic District School Board. That board-level statement is the catchment pattern this guide can make. Exact school assignments for the Eighth Line site have not been confirmed.",
        "[UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.] Named elementary and secondary schools are not listed here as confirmed for 10114 Eighth Line. French immersion, gifted, and Catholic versus public assignment can all differ from a neighbour one concession over.",
        "A planned Mattamy community is not an open school. Buyers who need a specific program should verify with the relevant board before relying on any third-party map. WideLot™ lot width does not change catchment; the civic address does, once the boards publish it.",
      ],
    },
    {
      h2: "Arbourview as a worked example of a WideLot™ Coming Soon file",
      paragraphs: [
        "Arbourview by Mattamy Homes is a Coming Soon community in Georgetown planned for townhomes and detached WideLot™ homes. The official builder page remains a JavaScript registration shell. This independent guide is the public product brief: who builds it, what WideLot™ has meant since the 1990s, which collection tiers are confirmed, and which numbers are still missing.",
        "The missing numbers are the ones that decide money. Pricing has not been released. Deposit structure is to be announced at VIP launch. Occupancy is to be announced. Exact unit sizes, lot widths, and bedroom counts are not released. Incentives are to be announced. A unit count for the release has not been published and is not guessed here.",
        "If you arrived because you searched “what is a WideLot home Mattamy,” “Mattamy Homes Georgetown,” or “Arbourview by Mattamy Homes,” the next useful pages on this site are the builder overview, the floor-plans collection cards, the price-list status table, the Eighth Line location map, and the sixteen-question FAQ. Register if you want notice when Mattamy Homes publishes the missing booklet. E.&O.E. Information current as of September 1, 2026.",
      ],
    },
  ],
};

export const GALLERY_INTRO =
  "Official architectural renderings and a public marketing site plan for Arbourview have not been released by Mattamy Homes as of September 1, 2026. Renderings will be added here once released by Mattamy Homes. Until then, this gallery shows neighbourhood-context photography of downtown Georgetown, Hungry Hollow trails, and a wider-lot street character — clearly labelled so it is never mistaken for a project rendering.";

export const MAP_IFRAME_TITLE = `${PROJECT_NAME} map — 10114 Eighth Line, Halton Hills`;
export const QUICK_FACTS_CAPTION =
  "Arbourview by Mattamy Homes quick facts. Unreleased figures are labelled to be announced.";
export const PRICING_TABLE_CAPTION =
  "Arbourview prices by home type. Starting prices have not been announced.";
export const DEPOSIT_TABLE_CAPTION =
  "Arbourview deposit structure. Amounts and due dates have not been published.";
export const INCENTIVES_TABLE_CAPTION =
  "Arbourview incentives. Nothing listed here is a confirmed offer.";
