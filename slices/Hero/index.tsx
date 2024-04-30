"use server"

import { PageSection, PageSectionContent } from "@app//components/common";
import { CallToActions, Image, Link, RichText } from "@app//components/prismic";
import { Button } from "@app//components/ui";
import { Content, createClient } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { repositoryName } from "../../prismicio";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = async ({ slice }: HeroProps): Promise<JSX.Element> => {
  const client = createClient(repositoryName)
  const cta = await client.getByUID('call_to_actions', '1')

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PageSection>
        <PageSectionContent className="gap-16 m-auto">
          <div className="flex flex-col gap-20 h-full">
            <div className="flex-col">
              <RichText field={slice.primary.title} />
              <p className="font-normal text-neutral-0 text-2xl">{slice.primary.description}</p>
            </div>
            <CallToActions>
              <Link field={cta.data.link}>
                <Button>{cta.data.text}</Button>
              </Link>
            </CallToActions>
          </div>
          <Image field={slice.primary.image} width={565} height={500} />
        </PageSectionContent>
      </PageSection>
    </section>
  );
};

export default Hero;
