import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const LoggedInRoute = (props: { children: any }) => {
    const { authState } = useAuth();
    if (!authState.authenticated) return <Navigate to="/" />;
    return props.children;
};
export default LoggedInRoute;
