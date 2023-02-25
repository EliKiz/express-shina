import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

// import { withTranslation } from 'react-i18next';

interface ErrorBoundaruProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaruProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaruProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}
export default ErrorBoundary;
