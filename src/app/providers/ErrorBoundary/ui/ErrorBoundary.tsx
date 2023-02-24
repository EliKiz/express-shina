import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

// import { withTranslation } from 'react-i18next';

interface ErrorBoundaruProps {
    // ReactNode - любой React компонент
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
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок (логирование ошибок)
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}
// Локализация для классовых компонентов - HOC
// export default withTranslation()(ErrorBoundary);
export default ErrorBoundary;
