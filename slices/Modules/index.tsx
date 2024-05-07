import { PageSection, PageSectionContent } from "@app//components/common";
import { ModuleCard, SectionTitle } from "@app//components/prismic";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Modules`.
 */
export type ModulesProps = SliceComponentProps<Content.ModulesSlice>;

/**
 * Component for "Modules" Slices.
 */
const Modules = ({ slice }: ModulesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="modulos"
    >
      <PageSection className="bg-neutral-90">
        <PageSectionContent className="gap-16 flex-col">
          <SectionTitle title={slice.primary.title} />
          <div className="grid grid-cols-3 gap-8">
            {slice.items.map((item, index) =>
              <ModuleCard
                key={index}
                description={item.module_description}
                image={item.module_image}
                title={item.module_name}
              />
            )}
          </div>
        </PageSectionContent>
      </PageSection>
    </section>
  );
};

export default Modules;
