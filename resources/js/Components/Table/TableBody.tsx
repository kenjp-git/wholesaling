import { PropsWithChildren } from "react";

export default function TableBody({ children }: PropsWithChildren) {
    return (
        <tbody className="border border-green-400 border-t-0">
            {children}
        </tbody>
    )
}