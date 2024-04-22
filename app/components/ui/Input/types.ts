import { HtmlHTMLAttributes } from "react";

export interface IInputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    name: string
}