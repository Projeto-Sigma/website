import { LinkField } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import React, { PropsWithChildren } from "react";
import { IPrismicComponentsProps } from "../types";

interface ILinkProps extends Omit<IPrismicComponentsProps<LinkField>, 'className'>, PropsWithChildren {
    className?: string
}

export const Link: React.FC<ILinkProps> = ({ field, children, className, ...rest }) => {
    return (
        <PrismicLink field={field} {...rest}>
            <div className={className}>
                {children}
            </div>
        </PrismicLink>
    )
}