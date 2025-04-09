import { PropsWithChildren, useState } from "react";

export default function TableFoot({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    const default_style = ""
    const [style] = useState<string>(`${default_style} ${props.className}`);
    return (
        <tfoot className={style}>{children}</tfoot>
    )
}