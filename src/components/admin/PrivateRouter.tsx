import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../../utils/localStorage";

type PrivateRouterProps = {
    children: JSX.Element,
    page: string
};

const PrivateRouter = ({ children, page }: PrivateRouterProps) => {
    const auth = isAuthenticate();

    if (page === "admin") {
        if (!auth || !auth.user.active || !auth.user.role) {
            return <Navigate to="/login" />
        }
    } else {
        if (!auth || !auth.user.active) {
            return <Navigate to="/login" />
        }
    }

    return children;
}

export default PrivateRouter;