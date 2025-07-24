import { Heading } from "../../../common/heading";
import { Section } from "../../../common/section-wrapper";
import { headingFragment, quoteFragment } from "../../../lib/types/static-types";

import { TestimonialsGridClient } from "./testimonials-list";

export const testimonialsGridFragment = {};

type TestimonialsGrid = fragmentOn.infer<typeof testimonialsGridFragment>;

export function TestimonialsGrid({ heading, quotes }: TestimonialsGrid) {
  return (
    <Section>
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <TestimonialsGridClient quotes={quotes} />
    </Section>
  );
}
