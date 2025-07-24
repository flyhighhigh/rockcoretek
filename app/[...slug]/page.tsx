import Image from 'next/image';
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneralEvents } from "../../lib/types/static-types";
import { AccordionFaq } from "../_sections/accordion-faq";
import { BigFeature, bigFeatureFragment } from "../_sections/features/big-feature";
import { Callout, calloutFragment } from "../_sections/callout-1";
import { Callout2, calloutv2Fragment } from "../_sections/callout-2";
import { Companies, companiesFragment } from "../_sections/companies";
import { Faq, faqFragment } from "../_sections/faq";
import { FeaturesGrid, featuresGridFragment } from "../_sections/features/features-grid";
import { FeaturesList, featureCardsComponent } from "../_sections/features/features-list";
import { Hero, heroFragment } from "../_sections/hero";
import { Pricing, pricingFragment } from "../_sections/pricing";
import { SideFeatures, featuresSideBySideFragment } from "../_sections/features/side-features";
import { Testimonials, testimonialsSliderFragment } from "../_sections/testimonials";
import { TestimonialsGrid, testimonialsGridFragment } from "../_sections/testimonials-grid";
import { PricingTable } from "../_sections/pricing-comparation";
import { pricingTableFragment } from "../_sections/pricing-comparation/fragments";
import FeatureHero, { featureHeroFragment } from "../_sections/features/features-hero";
import { PageView } from "../../components/page-view";
import { FreeformText, freeformTextFragment } from "../_sections/freeform-text";
import { Form, formFragment } from "../_sections/form";
import {
  settingsLogoLiteFragment,
  SettingsLogoLiteFragment,
} from "../../components/form-components";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateStaticParams = async () => {
  // Return empty array for now since we don't have static page data
  return [];
};

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata | undefined> => {
  const params = await _params;
  
  // Return default metadata since we don't have dynamic pages
  return {
    title: "RockCore Solutions",
    description: "Industrial computing solutions for harsh environments",
  };
};

// Commented out SectionsUnion to avoid build issues
// function SectionsUnion({
//   sections,
//   eventsKey,
//   settings,
// }: {
//   sections: any[];
//   eventsKey: GeneralEvents["ingestKey"];
//   settings: SettingsLogoLiteFragment;
// }): React.ReactNode {
//   if (!sections) return null;
//   return null;
// }

// const sectionsFragment = { sections: [] };

export default async function DynamicPage({
  params: _params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await _params;
  
  // For now, just return a simple 404 since we don't have dynamic pages
  return notFound();
}
