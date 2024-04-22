import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

interface ILinkProps extends LinkProps, PropsWithChildren { }

export const Link: React.FC<ILinkProps> = ({ href, children, ...rest }) => {
    return <NextLink className="text-primary text-xl underline" href={href} {...rest}>{children}</NextLink>
}