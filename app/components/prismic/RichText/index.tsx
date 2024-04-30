import { RichTextField } from "@prismicio/client";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import React from "react";
import { IPrismicComponentsProps } from "../types";

export const RichText: React.FC<IPrismicComponentsProps<RichTextField> & PrismicRichTextProps> = ({ className, field, ...rest }) => {
    return (
        <div className={className}>
            <PrismicRichText
                field={field}
                components={{
                    heading2: ({ children }) => <h2 className="flex font-medium text-3xl text-primary text-left w-full">{children}</h2>,
                    paragraph: ({ children }) => <p className="font-light text-lg text-primary">{children}</p>,
                    heading1: ({ children }) => <h1 className="font-bold text-neutral-0 text-6xl">{children}</h1>
                }}
                {...rest}
            />
        </div>
    )
}