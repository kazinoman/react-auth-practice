import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { handleRegister } from "../../service/login";
import _Cookies from "../../utils/cookies";

type Inputs = {
    name: string;
    email: string;
    number: number;
    password: string;
    password_repeat: string;
};

const RegistrationPate = () => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await handleRegister(data);
        if (res.status === 201) {
            toast(res?.data?.message);
            _Cookies.setCookies(
                "refresh_token",
                res?.data?.data?.refresh_token,
                new Date(new Date().getTime() + 60 * 60 * 1000)
            );
        }
    };

    return (
        <div className="h-[90vh]">
            <form
                className="flex flex-col items-center justify-center w-[50%] mx-auto gap-5 h-full"
                onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-lg underline">Sign Up form</h1>
                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Username</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="Username"
                        {...register("name")}
                    />
                </fieldset>

                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Email</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                    />
                </fieldset>

                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Phone Number</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="Phone Number"
                        type="number"
                        {...register("number")}
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

                <fieldset className="border-2 rounded-md w-full">
                    <legend className="mx-4 px-3">Confirm Password</legend>
                    <input
                        className="p-2 m-2 w-[96%]"
                        placeholder="Confirm password"
                        {...register("password_repeat")}
                    />
                </fieldset>

                <Link
                    to={"/login"}
                    className="self-start">
                    <h2 className="self-start underline">Want to login?</h2>
                </Link>

                <button
                    className="p-5 rounded-md bg-slate-800 text-white w-full"
                    type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationPate;
