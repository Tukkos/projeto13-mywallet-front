import styled from "styled-components";
// import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({setLoginInfos}) {
    return (
        <LoginScreen>
            <div className="logo">
                My Wallet
            </div>

            <form>
                <input className="inputBar">
                </input>
                <input className="inputBar">
                </input>
                <button className="inputBar button">Entrar</button>
            </form>
            <Link to="/cadastro"><div className="link">Primeira vez? Cadastre-se!</div></Link>
        </LoginScreen>
    );
};

const LoginScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
.logo {
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    color: #ffffff;
    margin-top: 25vh;
    margin-bottom: 40px;
}
.link {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
}
`;