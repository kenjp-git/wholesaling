import { PropsWithChildren } from "react";

export default function HeaderCell({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLTableCellElement>>) {
    return (
        <th className="bg-gray-100 font-thin" {...props}>
            {children}
        </th>
    )
}