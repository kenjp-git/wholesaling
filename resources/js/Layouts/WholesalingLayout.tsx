import { Head, usePage } from "@inertiajs/react";
import { PropsWithChildren, HTMLProps, useEffect, useState } from "react";

export default function WholesalingLayout({
    children
}: PropsWithChildren<HTMLProps<HTMLElement>>) {
    const [pageTitle, setPageTitle] = useState<string>('')

    useEffect(() => {
        const pageData = document.getElementById('app')?.dataset.page || '{}'
        const pageObject = JSON.parse(pageData)
        const pageName = pageObject.component.split('/').pop()
        const pageTitle = pageObject.props.translations.words[pageName] || import.meta.env.VITE_APP_NAME
        setPageTitle((prev) => { return pageTitle })
    }, [pageTitle])

    return (
        <>
            <Head title={pageTitle} />
            <header className="w-[1024px] mx-auto bg-blue-200">
                <h1 className="text-center text-lg my-auto">{pageTitle}</h1>
            </header>
            {children}
        </>
    );
}