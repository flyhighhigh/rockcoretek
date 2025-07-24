import { Section } from "../../../common/section-wrapper";
import { Heading } from "../../../common/heading";
import { headingFragment, quoteFragment } from "../../../lib/types/static-types";

import { Slider } from "./slider";

export const testimonialsSliderFragment = {};

export type TestimonialsSlider = fragmentOn.infer<typeof testimonialsSliderFragment>;

export function Testimonials({ heading, quotes }: TestimonialsSlider) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider quotes={quotes}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  );
}
