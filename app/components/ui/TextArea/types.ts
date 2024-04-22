import { HtmlHTMLAttributes } from "react";

export interface ITextAreaProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string
    name: string
}