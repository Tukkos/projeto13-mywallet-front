import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { postSignIn } from "../../services/myWallet.js";

export default function Login({setLoginInfos}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function login(e) {
        if (userEmail === "") {
            alert("Favor inserir seu email.");
        };
        if (userPassword === "") {
            alert("Favor inserir sua senha.");
        };
        if (userEmail !== "" && userPassword !== "") {
            e.preventDefault();
            setLoading(false);
            
            const login = {
                email: userEmail,
                password: userPassword
            };

            postSignIn(login).then((res) => {
                setLoginInfos(res.data);
                return navigate("/home", {});
            }).catch((error) => {
                if (error.response.status === 401) {
                    alert("Usuário não encontrado, login ou senha incorretos");
                };
                setLoading(true);
            });            
        };        
    };

    return (
        <LoginScreen>
            <div className="logo">
                My Wallet
            </div>

            <form onSubmit={login} className="form">
                <input
                    className="inputBar"
                    placeholder="Email"
                    type="email"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"}
                />
                <input
                    className="inputBar"
                    placeholder="Senha"
                    type="password"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />

                {(loading) ? <button type="submit" className="inputBar button">Entrar</button>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
            </form>
            <Link to="/register"><div className="link">Primeira vez? Cadastre-se!</div></Link>
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