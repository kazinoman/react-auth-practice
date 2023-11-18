import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const withAuth = (ComponentInside: any) => {
    return function WithAuth(props: any) {
        const [loading, setLoading] = useState(true);
        const [redirect, setRedirect] = useState(false);
        const { isAuthenticated } = useAuth();
        const navigate = useNavigate();

        // useEffect(() => {
        //   fetch('/checkToken', {
        //     credentials: "include",
        //     headers: { 'x-access-token': localStorage.getItem('token') }
        //   })
        //     .then(res => {
        //       if (res.status === 200) {
        //         setLoading(false);
        //       } else {
        //         const error = new Error(res.error);
        //         throw error;
        //       }
        //     })
        //     .catch(err => {
        //       console.error(err);
        //       setLoading(false);
        //       setRedirect(true);
        //     });
        // }, []);

        if (loading) {
            return null;
        }

        if (!isAuthenticated) {
            return navigate("/login");
        }

        return <ComponentInside {...props} />;
    };
};

export default withAuth;
