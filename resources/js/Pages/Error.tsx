import { ReactElement } from 'react';
import WholesalingLayout from '@/Layouts/WholesalingLayout';

const Error = function ({ status, message }: { status: number, message: string }) {
    const title = {
        403: "403",
        404: "404",
        500: "500",
        503: "503"
    }[status] as string

    return (
        <>
            <div className="w-[1024px] mx-auto text-center bg-slate-50 shadow-lg">
                <p>{message}</p>
            </div>
        </>
    )
}

Error.layout = (page: ReactElement) => {
    return (
        <>
            <WholesalingLayout
                pageName={page.props.status}
                children={page}
            />
        </>
    )
}

export default Error;