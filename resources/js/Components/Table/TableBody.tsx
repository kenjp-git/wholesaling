import { PropsWithChildren, useState } from "react";

export default function TableBody({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableElement>>) {
    const default_style = ""
    const [style] = useState<string>(`${default_style} ${props.className}`)

    return (
        <tbody className={style}>
            {children}
        </tbody>
    )
}