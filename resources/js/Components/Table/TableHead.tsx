import { PropsWithChildren } from "react";

export default function TableHead({ children }: PropsWithChildren) {
    return (
        <thead className="bg-gray-200">
            {children}
        </thead>
    )
}