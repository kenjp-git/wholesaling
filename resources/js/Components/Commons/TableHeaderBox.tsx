import { ClassNames } from "@emotion/react";
import { PropsWithChildren, useState } from "react";

export default function Box({
    children,
    ...props
}: PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    const default_style = "h-1/2 bg-gray-100 w-full h-full"
    const [style] = useState<string>(`${default_style} ${props.className}`)

    return (
        <>
            <div className={style}>{children}</div>
        </>
    )
}