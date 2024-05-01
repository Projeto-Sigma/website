import { Image, RichText } from "@components/prismic";
import React from "react";
import { IModuleCardProps } from "./types";

export const ModuleCard: React.FC<IModuleCardProps> = ({ description, image, title }) => {
    return (
        <div className="shadow-base rounded-lg max-w-[360px]">
            <Image field={image} className="w-full h-[198px] object-cover" />
            <div className="flex flex-col gap-4 h-[296px] p-4 gap-10">
                <RichText field={title} className="font-normal text-2xl text-neutral-50" />
                <RichText field={description} className="font-light text-xl text-neutral-50" />
            </div>
        </div>
    )
}