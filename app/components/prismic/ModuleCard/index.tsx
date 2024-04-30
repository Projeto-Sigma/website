import { Image, Link, RichText } from "@components/prismic";
import React from "react";
import { IModuleCardProps } from "./types";

export const ModuleCard: React.FC<IModuleCardProps> = ({ description, image, link, title }) => {
    return (
        <div className="shadow-base rounded-lg max-w-[360px]">
            <Image field={image} className="w-full h-[198px] object-cover" alt={image.alt} />
            <div className="flex flex-col p-4 gap-10">
                <div className="flex flex-col gap-4">
                    <RichText field={title} className="font-normal text-2xl text-neutral-50" />
                    <RichText field={description} className="font-light text-xl text-neutral-50" />
                </div>
                <Link field={link} className="text-primary text-xl underline">Donec cursus</Link>
            </div>
        </div>
    )
}