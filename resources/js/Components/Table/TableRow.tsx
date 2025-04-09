import { ClassNames } from "@emotion/react";
import { PropsWithChildren, useEffect, useState } from "react";

export default function TableRow({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableRowElement>>) {
    const default_style = "grid gap-px border w-full content-center";
    const [style] = useState<string>(`${default_style} ${props.className}`);

    return (
        <tr className={style}>
            {children}
        </tr>
    )
}