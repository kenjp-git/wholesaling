import { Head, usePage } from "@inertiajs/react";
import { PropsWithChildren, HTMLProps } from "react";

export default function WholesalingLayout({
    children
}: PropsWithChildren<HTMLProps<HTMLElement>>) {

    const pageData = document.getElementById('app')?.dataset.page || '{}'
    const pageObject = JSON.parse(pageData)
    const pageName = pageObject.component.split('/').pop()
    const pageTitle = pageObject.props.translations.words[pageName] || import.meta.env.VITE_APP_NAME

    return (
        <>
            <Head title={pageTitle} />
            <header className="h-10 bg-blue-200">
                <h1 className="text-center text-2xl font-bold">{pageTitle}</h1>
            </header>
            {children}
        </>
    );
}