import { ModuleCard, PageSection, PageSectionContent, SectionTitle } from "@components/common";
import React from "react";

export const Modules: React.FC = () => {
    return <PageSection className="bg-neutral-90">
        <PageSectionContent className="flex-col gap-16">
            <SectionTitle>
                Sed et sem
            </SectionTitle>
            <div className="flex flex-wrap gap-8">
                <ModuleCard
                    href="/"
                    src="/preview.png"
                    title="Phasellus vel"
                    description="Sed quis risus ultricies, euismod eros eget, ullamcorper risus. In non elit erat. Integer ultricies purus vel tempus molestie"
                />
                <ModuleCard
                    href="/"
                    src="/preview.png"
                    title="Phasellus vel"
                    description="Sed quis risus ultricies, euismod eros eget, ullamcorper risus. In non elit erat. Integer ultricies purus vel tempus molestie"
                />
                <ModuleCard
                    href="/"
                    src="/preview.png"
                    title="Phasellus vel"
                    description="Sed quis risus ultricies, euismod eros eget, ullamcorper risus. In non elit erat. Integer ultricies purus vel tempus molestie"
                />
            </div>
        </PageSectionContent>
    </PageSection >
}