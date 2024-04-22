import React, { HtmlHTMLAttributes } from "react";

export const Tag: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return <div className="flex px-2 py-1 bg-primary rounded-md w-fit">
        <p className="font-medium text-xs">{children}</p>
    </div>
}