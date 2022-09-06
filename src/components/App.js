import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContext from "../contexts/LoginContexts";
import GlobalStyles from "../styles/GlobalStyles";

import Login from "./login/Login";

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
                            {/* <Route path="/cadastro" element={<Register />} /> */}
                        </Routes>
                    </LoginContext.Provider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`

`;