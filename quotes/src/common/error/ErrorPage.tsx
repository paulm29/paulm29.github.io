import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error:any = useRouteError();

    let message = "An error occurred.";

    if (error.status === 500) {

    }

    return (
        <div>
            {message}
        </div>
    )
}
export default ErrorPage;
