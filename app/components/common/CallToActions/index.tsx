import { Button } from "@components/ui";
import React, { HtmlHTMLAttributes } from "react";

export const CallToActions: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
    return <div className={`flex gap-3 ${className}`} {...rest}>
        <Button>Lorem Ipsum</Button>
        <Button variant="secondary">Dolor Sit Amet</Button>
    </div>
}