import { Navigate } from "react-router-dom";

export const RedirectComponent = () => {
    localStorage['Login'] ? localStorage['Login'] = localStorage['Login'] : localStorage['Login'] = 'false';

    if (localStorage['Login'] === 'true') {
        return <Navigate to="/home" />
    } else {
        return <Navigate to="/login" />
    }
}