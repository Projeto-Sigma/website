import React, { HtmlHTMLAttributes } from "react";

export const PageSection: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return <section className="max-w-6xl py-24 m-auto flex" {...rest}>{children}</section>
}