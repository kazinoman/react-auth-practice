import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (path?: string) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSetAuth = () => {
        setIsAuthenticated(!isAuthenticated);
        console.log("call");
    };

    if (isAuthenticated) {
        // navigate(path?);
        navigate("/");
    } else {
        navigate("/login");
    }

    return { isAuthenticated, handleSetAuth };
};

export default useAuth;
