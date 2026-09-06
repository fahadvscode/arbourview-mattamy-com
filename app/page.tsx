import { Hero } from "@/components/Hero";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { QuickFacts } from "@/components/QuickFacts";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  CtaBlock,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  AEO_PASSAGES,
  BUILDER_COPY,
  CTA_LABEL,
  FLOOR_PLAN_COLLECTIONS,
  HOME_ANSWER,
  HOME_OVERVIEW,
  LINKS,
  PAGE_META,
  WIDELOT_COPY,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import {
  breadcrumbSchema,
  heroImageSchema,
  placeSchema,
  residenceSchema,
  webPageSchema,
} from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.home();

export default function HomePage() {
  const meta = PAGE_META.home;

  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={placeSchema()} />
      <JsonLd data={heroImageSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <AnswerFirstSummary heading="Arbourview by Mattamy Homes, in one paragraph">
        <p>{HOME_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="quick-facts">
        <SectionHeading id="quick-facts">Arbourview at a glance</SectionHeading>
        <div className="mt-8">
          <QuickFacts />
        </div>
        <SpecsDisclaimer className="mt-4" />
      </Section>
      <Section alt labelledBy="overview">
        <SectionHeading id="overview">Arbourview by Mattamy Homes — builder and WideLot™ spotlight</SectionHeading>
        <div className="mt-8">
          <Prose>
            {HOME_OVERVIEW.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Continue with{" "}
              <TextLink href={LINKS.floorPlans.href}>{LINKS.floorPlans.text}</TextLink>,{" "}
              <TextLink href={LINKS.pricing.href}>{LINKS.pricing.text}</TextLink>,{" "}
              <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink>, and{" "}
              <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="builder">
        <SectionHeading id="builder">Who is building Arbourview — Mattamy Homes</SectionHeading>
        <div className="mt-8">
          <Prose>
            {BUILDER_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="widelot">
        <SectionHeading id="widelot">What is a WideLot™ home at Arbourview?</SectionHeading>
        <div className="mt-8">
          <Prose>
            {WIDELOT_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="collections" id="floor-plans-preview">
        <SectionHeading id="collections">Arbourview floor plans — collection tiers</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Individual plan names have not been released. These cards describe the two collection
          tiers Mattamy Homes has confirmed for Arbourview Georgetown.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FLOOR_PLAN_COLLECTIONS.map((collection) => (
            <FloorPlanCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </Section>
      <Section alt labelledBy="answers">
        <SectionHeading id="answers">Direct answers about Arbourview</SectionHeading>
        <div className="mt-8 space-y-8">
          {AEO_PASSAGES.map((item) => (
            <article key={item.heading} className="card p-5 md:p-6">
              <h3 className="font-display text-xl font-semibold text-brand-deep md:text-2xl">
                {item.heading}
              </h3>
              <p className="prose-measure mt-4 text-text-primary">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBlock
        heading={CTA_LABEL}
        body="Free VIP registration. First notice when Mattamy Homes releases Arbourview pricing and floor plans. No purchase obligation."
        href="#hero-register"
        label={CTA_LABEL}
        location="home_cta"
      />
    </>
  );
}
