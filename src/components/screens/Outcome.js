import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import dayjs from "dayjs";

import { postOutcome } from "../../services/myWallet";
import LoginContext from "../../contexts/LoginContexts";

let now = dayjs();
const date = now.format("DD/MM")

export default function Outcome() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const { loginInfos } = useContext(LoginContext);
    const token = loginInfos.token;
    const transactionAuth = { headers: {"auth": "Bearer " + token}};

    function validation() {
        if (value === "") {
            alert("Favor inserir um Valor.")
        };
        if (description === "") {
            alert("Favor inserir uma descrição.")
        };
        if (value !== "" && description !== "") {
            return true;
        };
        return false;
    };

    function newOutcome(e) {
        e.preventDefault();

        const outcome = {
            value: -value,
            description: description,
            type: "outcome",
            date: date
        };

        const validate = validation();
        if (validate === true) {
            setLoading(false);

            postOutcome(outcome, transactionAuth).then(() => {
                navigate("/home", {});
            }).catch(() => {
                setLoading(true);
                alert("Tempo de logout, favor reiniciar a sessão e tentar novamente.");
            });
        };
    };

    return (
        <TransactionsScreen>
            <div className="header">
                <h1 className="head">Nova entrada</h1>
            </div>
            <form onSubmit={newOutcome} className="form">
                <input
                    className="inputBar"
                    placeholder="Valor (utilize `.` como `,`)"
                    type="number"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />
                <input
                    className="inputBar"
                    placeholder="Descrição"
                    type="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />
                {(loading) ? <button type="submit" className="inputBar button">Salvar entrada</button>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
            </form>     
        </TransactionsScreen>
    );
};

const TransactionsScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;