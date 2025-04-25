import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import WholesalingLayout from '@/Layouts/WholesalingLayout';
import { ReactElement } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : `${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        let page = pages[`./Pages/${name}.tsx`] as { default: { layout?: (page: ReactElement) => ReactElement } };
        page.default.layout = page.default.layout || ((page: ReactElement) =>
            <WholesalingLayout children={page} pageName={appName} />
        );
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
