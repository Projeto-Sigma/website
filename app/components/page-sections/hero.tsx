import { CallToActions, PageSection } from "@components/common"
import Image from "next/image"
import React from "react"

export const Hero: React.FC = () => {
    return <PageSection>
        <div className="flex gap-16">
            <div className="flex flex-col gap-20 h-full">
                <div className="flex-col">
                    <h1 className="font-bold text-neutral-0 text-6xl">Lorem ipsum dolor sit amet consectet</h1>
                    <p className="font-normal text-neutral-0 text-2xl">consectetur adipiscing elit fusce urna dui, vestibulum non placerat in, auctor sed sem</p>
                </div>
                <CallToActions />
            </div>
            <Image src="/preview.png" alt="Video Demonstração" width={565} height={500} />
        </div>
    </PageSection>
}