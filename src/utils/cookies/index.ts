import Cookies from "js-cookie";

const getCookies = (name: string) => Cookies.get(name);

const setCookies = (name: string, data: string, expire_date?: any) => {
    Cookies.set(name, data, { expires: expire_date, path: "/" });
};

const deleteCookies = (name: string) => Cookies.remove(name, { path: "/" });

const _Cookies = { getCookies, setCookies, deleteCookies };
export default _Cookies;
