import { InputHTMLAttributes } from "react";
import BaseInput from "./BaseInput";

export default function InfoInput({
    className,
    ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
    const defaultClassName = "col-span-2 border border-gray-400 py-0 px-1 focus:bg-yellow-100 focus:ring-0 focus:border-gray-400"
    const classes = `${defaultClassName} ${className}`;

    return (
        <input
            className={classes}
            {...rest}
        />
    );
}