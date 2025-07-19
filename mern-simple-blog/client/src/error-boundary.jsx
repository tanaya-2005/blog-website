import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
    const error = useRouteError();

    return (
        <div>
            <h2>Oops!</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default ErrorBoundary;
