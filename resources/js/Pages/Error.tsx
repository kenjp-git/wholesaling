
export default function Error({ status, message }: { status: number, message: string }) {
    const title = {
        403: "403",
        404: "404",
        500: "500",
        503: "503"
    }[status]

    return (
        <div className="w-[1024px] mx-auto text-center bg-slate-50 shadow-lg">
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}