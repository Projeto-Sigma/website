import React from "react";
import { RichText } from "../RichText";
import { ISectionTitleProps } from "./types";

export const SectionTitle: React.FC<ISectionTitleProps> = ({ title, subtitle, ...rest }) => {
    return (
        <div className="flex flex-col w-full justify-start">
            <RichText field={title} className="text-primary text-left w-full" />
            {subtitle && <RichText field={subtitle} className="text-primary text-left w-full" />}
        </div>
    )

}