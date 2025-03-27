
export default function Error({ status, message }: { status: number, message: string }) {
    const title = {
        403: "403",
        404: "404",
        500: "500",
        503: "503"
    }[status]

    return (
        <div className="text-center bg-slate-50 rounded-full shadow-lg">
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}