import { Link } from "react-router-dom";
import _Cookies from "../../utils/cookies";
import LocalStorage from "../../utils/localstorage";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    // const { handleSetAuth } = useAuth();

    const handleLogout = () => {
        _Cookies.deleteCookies("refresh_token");
        LocalStorage.removeLocalStorage("token");
        // handleSetAuth();
    };

    return (
        <div className="bg-black text-white flex flex-row gap-5 p-5">
            {routes.map((el, index) => {
                return (
                    <div
                        className=" "
                        key={index}>
                        <Link to={el.path}>{el.name}</Link>
                    </div>
                );
            })}
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Header;

const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "profile", path: "/profile" },
    { name: "login", path: "/login" },
];
