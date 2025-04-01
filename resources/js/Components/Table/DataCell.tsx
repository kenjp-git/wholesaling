import { PropsWithChildren } from "react";

export default function DataCell({ children }: PropsWithChildren) {
    return (
        <td className="w-fit h-fit p-0">
            {children}
        </td>
    )
}