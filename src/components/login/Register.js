import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");


    function validation() {
        if (userName === "") {
            alert("Favor inserir seu nome.");
            return false;
        };
        if (userEmail === "") {
            alert("Favor inserir seu email.");
            return false;
        };
        if (userPassword === "") {
            alert("Favor inserir sua senha.");
            return false;
        };
        if (userPassword !== userPasswordConfirmation) {
            alert("Favor inserir a mesma senha.");
            return false;
        };
        if (userName !== "" && userEmail !== "" && userPassword !== "" && userPassword === userPasswordConfirmation) {
            return true;
        };
    };

    function register(e) {
        e.preventDefault();

        const register = {
            name: userName,
            email: userEmail,
            password: userPassword
        }
        
        const validate = validation();
        if (validate === true) {
            setLoading(false);

            console.log(register);
            setLoading(true);
            navigate("/", {});
        };        
    };

    return (
        <RegisterScreen>
            <div className="logo">
                My Wallet
            </div>

            <form onSubmit={register} className="form">
                <input
                    className="inputBar"
                    placeholder="Nome"
                    type="name"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"}
                />
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
                <input
                    className="inputBar"
                    placeholder="Confirme a senha"
                    value={userPasswordConfirmation}
                    onChange={e => setUserPasswordConfirmation(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />

                {(loading) ? <button type="submit" className="inputBar button">Entrar</button>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>};
            </form>
            <Link to="/"><div className="link">Já tem uma conta? Entre agora!</div></Link>
        </RegisterScreen>
    );
};

const RegisterScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
.logo {
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    color: #ffffff;
    margin-top: 10vh;
    margin-bottom: 40px;
}
.link {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
}
`;