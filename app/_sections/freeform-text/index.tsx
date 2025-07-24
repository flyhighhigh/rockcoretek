import { Section } from "../../../common/section-wrapper";
import { richTextClasses } from "../../../components/rich-text";

export const freeformTextFragment = {};

export type FreeformText = any; // fragmentOn.infer<typeof freeformTextFragment>;

export function FreeformText(freeformText: FreeformText) {
  return (
    <Section>
      <div className={richTextClasses}>
        <div></div>
      </div>
    </Section>
  );
}
