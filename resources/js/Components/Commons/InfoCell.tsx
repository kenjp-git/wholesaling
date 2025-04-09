import { InputHTMLAttributes } from "react";
import InfoInput from "@/Components/Forms/InfoInput";

type InfoCellType = {
    name: string,
    label: string,
    type: string
} & InputHTMLAttributes<HTMLInputElement>

export default function InfoCell({
    name,
    label,
    type
}: InfoCellType) {
    return (
        <>
            <article className="grid grid-flow-col grid-cols-3">
                <label className="border border-gray-400 px-2 bg-blue-200 text-nowrap" htmlFor={name}>
                    <p>{label}</p>
                </label>
                <InfoInput type={type} name={name} id={name} />
            </article>
        </>
    )
}