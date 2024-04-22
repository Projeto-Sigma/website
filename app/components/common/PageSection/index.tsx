import React, { HtmlHTMLAttributes } from "react";

export { PageSectionContent } from './content';

export const PageSection: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    return <section className={`px-36 w-full py-24 flex items-center ${className}`} {...rest}>{children}</section>
}