import React, { HtmlHTMLAttributes } from "react";

export const CallToActions: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => {
    return (
        <div className={`flex gap-3 ${className}`} {...rest}>
            {children}
        </div>
    )
}