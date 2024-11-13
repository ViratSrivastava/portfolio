import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import App from './App';
import './index.css';

interface ImportMetaEnv {
    VITE_SENTRY_DSN: string;
    MODE: string;
    DEV: boolean;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

// Performance monitoring and error tracking (optional)
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Initialize Sentry (optional)
Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0, // Adjust based on your needs
    environment: import.meta.env.MODE,
});

// Lazy load components
const ErrorFallback = React.lazy(() => import('./components/shared/ErrorFallback'));

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary fallback={<ErrorFallback />}>
            <ThemeProvider>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <App />
                </React.Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </React.StrictMode>
);

// Performance and accessibility logging in development mode
if (import.meta.env.DEV) {
    import('@axe-core/react').then(axe => {
        axe.default(React, ReactDOM, 1000);
    }).catch(error => {
        console.error('Failed to load axe-core:', error);
    });
}
