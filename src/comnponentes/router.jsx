import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Atividade from "../pages/atividade/atividade";
import Home from "../pages/home/home";
import Config from "../pages/config/config";
import Login from "../pages/login/login";
import React, { useContext } from "react";
import { Context } from "./context";

function PrivateRoute({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

function NotPrivateRoute({ isLogged }) {
    return isLogged ? <Navigate to="/home" /> : <Outlet />;
}

export default function Routers() {

    const { isLogged } = useContext(Context);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute isLogged={isLogged} />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/atividade" element={<Atividade />} />
                    <Route path="/Config" element={<Config />} />
                    <Route element={<Home />}>
                    </Route>
                </Route>
                <Route element={<NotPrivateRoute isLogged={isLogged} />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
        </BrowserRouter >
    )
}