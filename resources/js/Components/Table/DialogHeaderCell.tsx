import { PropsWithChildren, useState } from "react";

export default function DialogHeaderCell({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    const default_style = "grid grid-flow-row grid-rows-2 gap-px w-full p-0 text-center font-thin"
    const [style] = useState<string>(`${default_style} ${props.className}`)

    return (
        <th className={style}>
            {children}
        </th>
    )
}