import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContext from "../contexts/LoginContexts";
import GlobalStyles from "../styles/GlobalStyles";

import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./screens/Home";
import Income from "./screens/Income";
import Outcome from "./screens/Outcome";

export default function App() {
    const [loginInfos, setLoginInfos] = useState([]);

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <LoginContext.Provider value={{loginInfos}} >
                    <Routes>
                        <Route path="/" element={<Login setLoginInfos={setLoginInfos}/>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/income" element={<Income />} />
                        <Route path="/outcome" element={<Outcome />} />
                    </Routes>
                </LoginContext.Provider>
            </BrowserRouter>
        </>
    );
};