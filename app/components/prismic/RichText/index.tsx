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
                    paragraph: ({ children }) => <p className="font-light text-lg">{children}</p>,
                    heading1: ({ children }) => <h1 className="font-bold text-6xl">{children}</h1>,
                    heading2: ({ children }) => <h2 className="font-medium text-3xl">{children}</h2>,
                    heading3: ({ children }) => <h3 className="font-normal text-2xl">{children}</h3>,
                }}
                {...rest}
            />
        </div>
    )
}