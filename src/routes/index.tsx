import Header from "../components/header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import About from "../pages/about";
import Profile from "../pages/profile";
import Home from "../pages/home";
import RegistrationPate from "../pages/registration";
import { Toaster } from "react-hot-toast";

const RoutesComponent = () => {
    return (
        <div className="bg-white">
            <Toaster position="top-right" />
            <Header></Header>
            <div className="min-h-[100dvh]">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}></Route>
                    <Route
                        path="/register"
                        element={<RegistrationPate />}></Route>

                    <Route
                        path="/about"
                        element={<About />}></Route>
                    <Route
                        path="/profile"
                        element={<Profile />}></Route>
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RoutesComponent;
