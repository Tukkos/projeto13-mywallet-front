import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import Transactions from "./Transactions";
import { getTransactions } from "../../services/myWallet";
import LoginContext from "../../contexts/LoginContexts";

export default function Home() {
    const { loginInfos } = useContext(LoginContext);
    const [transactions, setTransactions] = useState([]);

    const [sumCLass, setSumClass] = useState("transitionsWindowFooterValue income");
    let sum = 0;
    transactions.forEach(value => {
        sum = sum + Number(value.value);
    });

    useEffect(() => {
        if (Number(sum) < 0) {
            setSumClass("transitionsWindowFooterValue outcome");
        };
    }, [sum]);
    
    useEffect(() => {
        const token = loginInfos.token;
        const transactionAuth = { headers: {"auth": "Bearer " + token}};

        getTransactions(transactionAuth).then((res) => {
            setTransactions(res.data);
        });
    }, [loginInfos]);

    return (
        <HomeScreen>
            <div className="header">
                <h1 className="head">Olá, {loginInfos.name}</h1>
                <Link to="/"><ion-icon name="enter-outline"></ion-icon></Link>
            </div>
            {(transactions.length === 0) ?
            <div className="transactionsWindow default"><p>Não há registros de entrada ou saída</p></div> :
            <div className="transactionsWindow">
                <div className="subTransactionWindow">
                    {(transactions.map((transaction) => (
                            <Transactions
                                value={transaction.value}
                                description={transaction.description}
                                date={transaction.date}
                                type={transaction.type}
                                transactionId={transaction._id}
                            />
                    )))}
                </div>
                <div className="totalBackgroundCollor">
                    <div className="transitionsWindowFooterTotal">
                        <h6>SALDO</h6>
                    </div>
                    <div className={sumCLass}>
                        <h6>{sum.toFixed(2)}</h6>
                    </div>
                </div>
            </div> }
            
            <div className="footer">
                <Link to="/income">
                    <button className="largeButton">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova entrada
                    </button>
                </Link>
                <span className="space"></span>
                <Link to="/outcome">
                    <button className="largeButton">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        Nova saída
                    </button>
                </Link>
            </div>
        </HomeScreen>
    );
};

const HomeScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: calc(100vh - 180px);
    position: relative;
.subTransactionWindow {
    height: 100vh;
} 
.transactionsWindow {
    margin-bottom: 15px;
    width: 80vw;
    height: 100%;
    overflow: scroll;
    background: #ffffff;
    border-radius: 5px;
    
    display: grid;
}
.transitionsWindowFooterTotal {
    margin-left: 5px;
    font-weight: 700;
    width: 10vw;
    display: flex;
    justify-content: flex-start;
    left: 5px;
}
.transitionsWindowFooterValue {
    margin-right: 5px;
    width: 67vw;
    display: flex;
    justify-content: flex-end;
    right: 5px;
}
.income {
    color: #03AC00;
}
.outcome {
    color: #C70000;
}
.totalBackgroundCollor {
    display: flex;
    justify-content: space-between;
    height: 20px;
    background-color: #ffffff;
    position: sticky;
    bottom: -1px;
    left: 0;
    border-radius: 5px;
}
.default {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    position: fixed;
    bottom: 25px;
    left: middle;
}
.largeButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start; 
    
    width: 38vw;
    height: 115px;
    border-radius: 5px;
    border: none;
    background-color: #A328D6;
    color: #ffffff;
    font-weight: 700;
    font-size: 17px;
}
.space {
    margin-right: 15px;
}
`