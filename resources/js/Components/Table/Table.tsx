import { PropsWithChildren } from "react";

export default function Table({ children }: PropsWithChildren) {
    return (
        <table className="text-center border-collapse rounded-lg table-auto w-full">
            {children}
        </table>
    )
}