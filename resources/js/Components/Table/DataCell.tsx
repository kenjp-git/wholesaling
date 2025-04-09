import { PropsWithChildren } from "react";

export default function DataCell({ children }: PropsWithChildren) {
    return (
        <td className="grid grid-flow-row grid-rows-2 gap-px w-full p-0">
            {children}
        </td>
    )
}