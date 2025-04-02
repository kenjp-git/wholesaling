import { PropsWithChildren, useState } from "react";

export default function HeaderCell({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    const default_style = "bg-gray-100 font-thin"
    const [style] = useState<string>(`${default_style} ${props.className}`)

    return (
        <th className={style} {...props}>
            {children}
        </th>
    )
}