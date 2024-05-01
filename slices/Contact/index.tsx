/* eslint-disable jsx-a11y/alt-text */
import { PageSection, PageSectionContent } from "@app//components/common";
import { SectionTitle } from "@app//components/prismic";
import { Button, Input, TextArea } from "@app//components/ui";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault()

  //   const target = e.target as typeof e.target & {
  //     email: { value: string }
  //     name: { value: string }
  //     phone: { value: string }
  //     message: { value: string }
  //   };

  //   console.log(target.email.value)
  //   console.log(target.name.value)
  //   console.log(target.phone.value)
  //   console.log(target.message.value)
  // }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-full"
      id="contato"
    >
      <PageSection className="bg-neutral-90">
        <PageSectionContent className="gap-16 flex-col">
          <SectionTitle title={slice.primary.title} subtitle={slice.primary.subtitle} />
          <form>
            <div className="flex flex-wrap gap-3">
              <Input placeholder="Nome" name="name" />
              <Input placeholder="Telefone" name="phone" />
              <Input placeholder="E-mail" name="email" />
              <TextArea placeholder="Mensagem" name="message" />
              <Button type="submit">{slice.primary.button_text}</Button>
            </div>
          </form>
        </PageSectionContent>
      </PageSection>
    </section >
  );
};

export default Contact;
