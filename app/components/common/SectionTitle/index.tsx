import React from "react";
import { ISectionTitleProps } from "./types";

export const SectionTitle: React.FC<ISectionTitleProps> = ({ children, description, ...rest }) => {
    return <div className="flex flex-col w-full justify-start">
        <h2 className="font-medium text-3xl text-primary text-left w-full" {...rest}>
            {children}
        </h2>
        {description && <p className="font-light text-lg text-primary">{description}</p>}
    </div>

}