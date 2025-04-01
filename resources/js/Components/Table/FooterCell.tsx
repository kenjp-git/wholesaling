import { PropsWithChildren, useState } from "react";

export default function FooterCell({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    const default_style = "";
    const [style] = useState<string>(`${default_style} ${props.className}`);

    return (
        <td className={style}>
            {children}
        </td>
    )
}