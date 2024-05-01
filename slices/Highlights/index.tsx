"use server"

import { PageSection, PageSectionContent } from "@app//components/common";
import { CallToActions, Image, Link, RichText } from "@app//components/prismic";
import { Button, Tag } from "@app//components/ui";
import { Content, createClient } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { repositoryName } from "../../prismicio";

/**
 * Props for `Highlights`.
 */
export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

/**
 * Component for "Highlights" Slices.
 */
const Highlights = async ({ slice }: HighlightsProps): Promise<JSX.Element> => {
  const client = createClient(repositoryName)
  const cta = await client.getByUID('call_to_actions', '1')

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="destaques"
    >
      <PageSection>
        <PageSectionContent className="gap-16 m-auto">
          <Image field={slice.primary.hightlight_image} width={565} height={500} />
          <div className="flex flex-col gap-20 h-full">
            <div className="flex flex-col gap-2">
              <Tag>
                {slice.primary.tag_text}
              </Tag>
              <RichText field={slice.primary.title} className="text-neutral-0 w-full" />
            </div>
            <CallToActions className="justify-end">
              <Link field={cta.data.link}>
                <Button>{cta.data.text}</Button>
              </Link>
            </CallToActions>
          </div>
        </PageSectionContent>
      </PageSection>
    </section>
  );
};

export default Highlights;
