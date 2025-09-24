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
  // 沒有要輸出任何 slug 頁面
  return [];
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata | undefined> => {
  return {
    title: "RockCore Solutions",
    description: "Industrial computing solutions for harsh environments",
  };
};

export default async function DynamicPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  return notFound();
}
