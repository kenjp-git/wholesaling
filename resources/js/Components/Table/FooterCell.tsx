import { PropsWithChildren, useState } from "react";

export default function FooterCell({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    const default_style = "grid grid-flow-row grid-rows-2 gap-px p-0 w-full font-thin";
    const [style] = useState<string>(`${default_style} ${props.className}`);

    return (
        <td className={style}>
            {children}
        </td>
    )
}