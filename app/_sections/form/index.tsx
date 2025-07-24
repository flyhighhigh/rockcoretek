import NextForm from "next/form";
import { Section } from "../../../common/section-wrapper";
import { buttonFragment } from "../../../lib/types/static-types";
import {
  FormLayout,
  RichTextFormWrapper,
  SettingsLogoLiteFragment,
} from "../../../components/form-components";
import { Button } from "../../../common/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { LabeledInput, LabeledTextarea, LabeledWrapper } from "../../../components/labeled-input";
import { Select } from "../../../components/select";

export const formFragment = {};
type Form = any; // fragmentOn.infer<typeof formFragment>;

export function Form(props: Form & { settingsLogoLite: SettingsLogoLiteFragment }) {
  return (
    <Section>
      <FormLayout
        {...props}
        subtitle={
          props.subtitle ? (
            <RichTextFormWrapper>{props.subtitle.json.content}</RichTextFormWrapper>
          ) : null
        }
        title={props.title}
      >
        <NextForm
          className="flex flex-col gap-3"
          action={async (data) => {
            "use server";
            const parsedData = new FormData();
            if (!parsedData.success) {
              throw new Error(JSON.stringify(parsedData.errors));
            }
            // await // Event tracking removed
          }}
        >
          {props.submissions.schema.map((field) => {
            if (field.type === "textarea") {
              return (
                <LabeledTextarea key={field.id} rows={8} className="max-h-64 min-h-16" {...field} />
              );
            } else if (field.type === "select" || field.type === "radio") {
              return (
                <LabeledWrapper key={field.id} label={field.label} id={field.id}>
                  <Select id={field.id} name={field.name} required={field.required}>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </LabeledWrapper>
              );
            } else {
              return <LabeledInput key={field.id} {...field} />;
            }
          })}
          <div className="mt-3 flex items-center justify-between">
            <Button
              icon={props.cta.icon ?? <ArrowRightIcon className="size-5" />}
              iconSide="right"
              intent={props.cta.type}
              type="submit"
            >
              {props.cta.label}
            </Button>
          </div>
        </NextForm>
      </FormLayout>
    </Section>
  );
}
