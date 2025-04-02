import { PropsWithChildren } from "react";

export default function Table({ children }: PropsWithChildren) {
    return (
        <table className=
            "text-center table-fixed border-collapse rounded-lg overflow-hidden"
        >
            {children}
        </table>
    )
}