import { PropsWithChildren } from "react";

export default function TableHead({ children }: PropsWithChildren) {
    return (
        <thead className="">
            {children}
        </thead>
    )
}