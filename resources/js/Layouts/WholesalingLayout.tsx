import { PropsWithChildren, HTMLProps, useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import PageNavigator from '@/Components/Commons/PageNavigator';

interface WholesalingLayoutProps extends PropsWithChildren<HTMLProps<HTMLElement>> {
    pageName: string;
}

export default function WholesalingLayout({
    children,
    pageName
}: WholesalingLayoutProps) {
    const [pageTitle, setPageTitle] = useState<string>('')

    useEffect(() => {
        const pageData = document.getElementById('app')?.dataset.page || '{}'
        const pageObject = JSON.parse(pageData)
        const pageName = pageObject.component.split('/').pop()
        const pageTitle = pageObject.props.translations.words[pageName] || import.meta.env.VITE_APP_NAME
        setPageTitle((prev) => { return pageTitle })
        return () => { }
    }, [])

    return (
        <>
            <Head title={pageName} />
            <header className="w-[1024px] relative mx-auto bg-blue-200">
                <PageNavigator />
                <h1 className="text-center text-lg my-auto">{pageName}</h1>
            </header>
            {children}
        </>
    );
}