import React, { HtmlHTMLAttributes } from "react";

export const PageSectionContent: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    return <div className={`max-w-6xl flex justify-center items-center m-auto ${className}`} {...rest}>{children}</div>
}