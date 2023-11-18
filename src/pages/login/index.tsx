import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { handleLogin } from "../../service/login";
import _Cookies from "../../utils/cookies";
import LocalStorage from "../../utils/localstorage";
import useAuth from "../../hooks/useAuth";

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const { handleSetAuth, isAuthenticated } = useAuth();
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await handleLogin(data);

        if (res.status === 200) {
            toast(res?.data?.message);

            LocalStorage.setLocalStorage(
                "token",
                res?.data?.data?.access_token
            );

            _Cookies.setCookies(
                "refresh_token",
                res?.data?.data?.refresh_token,
                new Date(new Date().getTime() + 60 * 60 * 1000)
            );
            // handleSetAuth();
            navigate("/");
        }
    };

    return (
        <div className="h-[90vh]">
            <form
                className="flex flex-col items-center justify-center w-[50%] mx-auto gap-5 h-full"
                onSubmit={handleSubmit(onSubmit)}>
                <h1>Login form</h1>
                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Username</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="Username or Email"
                        {...register("email")}
                    />
                </fieldset>

                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Password</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="password"
                        {...register("password")}
                    />
                </fieldset>

                <Link
                    to={"/register"}
                    className="self-start">
                    <h2 className="self-start underline">Not register yet?</h2>
                </Link>

                <button
                    className="p-5 rounded-xl bg-slate-800 text-white w-full"
                    type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
