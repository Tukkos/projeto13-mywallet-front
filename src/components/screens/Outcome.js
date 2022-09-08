import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";

let now = dayjs();
const date = now.format("DD/MM")

export default function Outcome() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    function validation() {
        if (value === "") {
            return false;
        };
        if (description === "") {
            return false;
        };
        return true;
    };

    function newOutcome(e) {
        e.preventDefault();

        const income = {
            value: -value,
            description: description,
            type: "outcome",
            date: date
        };

        const validate = validation();
        if (validate === true) {
            setLoading(false);
            console.log(income);
            setLoading(true);
            navigate("/home", {});
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