import { CallToActions, PageSection, PageSectionContent } from "@components/common";
import { Tag } from "@components/ui";
import Image from "next/image";
import React from "react";

export const SuccessCase: React.FC = () => {
    return <PageSection>
        <PageSectionContent className="gap-16 m-auto">
            <Image src="/preview.png" alt="Video Demonstração" width={565} height={500} />
            <div className="flex flex-col gap-20 h-full">
                <div className="flex-col">
                    <Tag>
                        Praesent
                    </Tag>
                    <h1 className="font-bold text-neutral-0 text-6xl">Orci varius natoque penatibus et magnis</h1>
                </div>
                <CallToActions className="justify-end" />
            </div>
        </PageSectionContent>
    </PageSection>
}