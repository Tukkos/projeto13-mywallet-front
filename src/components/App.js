import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContext from "../contexts/LoginContexts";
import GlobalStyles from "../styles/GlobalStyles";

import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./screens/Home";

import styled from "styled-components";

export default function App() {
    const [loginInfos, setLoginInfos] = useState([]);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <BrowserRouter>
                    <LoginContext.Provider value={{loginInfos}} >
                        <Routes>
                            <Route path="/" element={<Login setLoginInfos={setLoginInfos}/>} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </LoginContext.Provider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`

`;