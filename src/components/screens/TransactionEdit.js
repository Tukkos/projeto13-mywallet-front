import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import dayjs from "dayjs";

import { updateTransaction } from "../../services/myWallet";
import LoginContext from "../../contexts/LoginContexts";

let now = dayjs();
const date = now.format("DD/MM")

export default function TransactionEdit() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const transactionParams = params.idTransaction;
    const transactionType = params.typeTransaction;

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

    function editTransaction(e) {
        e.preventDefault();
        let transactionEdit = {};

        switch (transactionType) {
            case "outcome":
                transactionEdit = {
                    value: -value,
                    description: description,
                    type: transactionType,
                    date: date
                };
                break;
        
            default:
                transactionEdit = {
                    value: value,
                    description: description,
                    type: transactionType,
                    date: date
                };
                break;
        };

        const validate = validation();
        if (validate === true) {
            setLoading(false);

            updateTransaction(transactionEdit, transactionAuth, transactionParams).then(() => {
                navigate("/home", {});
            }).catch(() => {
                setLoading(true);
                alert("Tempo de logout, favor reiniciar a sessão e tentar novamente.");
            });
        };
    };

    return (
        <TransactionsEditScreen>
            <div className="header">
                {(transactionType === "outcome") ? <h1 className="head">Editar saída</h1>
                : <h1 className="head">Editar entrada</h1>}
                
            </div>
            <form onSubmit={editTransaction} className="form">
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
                {(loading) ? <> {(transactionType === "outcome") ? <button type="submit" className="inputBar button">Atualizar saída</button>
                    : <button type="submit" className="inputBar button">Atualizar entrada</button>} </>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
            </form>
        </TransactionsEditScreen>
    );
};

const TransactionsEditScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;