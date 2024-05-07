import { HtmlHTMLAttributes } from "react";

export const ErrorMessage: React.FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...rest }) => {
    return <p className={`text-red-700 ${className}`} {...rest}>{children}</p>
}