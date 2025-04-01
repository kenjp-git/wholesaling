import { ClassNames } from "@emotion/react";
import { PropsWithChildren, useEffect, useState } from "react";

export default function TableRow({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableRowElement>>) {
    const default_style = "grid gap-px border border-pink-400";
    const [style] = useState<string>(`${default_style} ${props.className}`);

    return (
        <tr className={style}>
            {children}
        </tr>
    )
}