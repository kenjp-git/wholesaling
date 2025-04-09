import { PropsWithChildren, useState } from "react";

export default function Table({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableElement>>) {
    const default_style = "flex flex-col text-center table-fixed border-collapse overflow-hidden"
    const [style] = useState<string>(`${default_style} ${props.className}`)

    return (
        <table className={style}>
            {children}
        </table>
    )
}