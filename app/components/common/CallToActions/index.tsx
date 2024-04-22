import { Button } from "@components/ui";
import React, { HtmlHTMLAttributes } from "react";

export const CallToActions: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = () => {
    return <div className="flex gap-3">
        <Button>Lorem Ipsum</Button>
        <Button variant="secondary">Dolor Sit Amet</Button>
    </div>
}