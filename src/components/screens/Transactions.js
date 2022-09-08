// import { useState } from "react";
import styled from "styled-components";

export default function Transactions({date, description, value, type}) {
    return (
        <TransactionLine>
            <div className="line">
                <div className="date">
                    {date}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className={type}>
                    {Number(value).toFixed(2)}
                </div>
            </div>
        </TransactionLine>
    );
};

const TransactionLine =styled.div`
.line {
    display: flex;
    margin: 5px 5px 5px 5px;
}
.date {
    width: 55px;
    color: #C6C6C6;
}
.description {
    width: calc(100% - 110px);
}
.income {
    display: flex;
    justify-content: end;
    width: 70px;
    color: #03AC00;
}
.outcome {
    display: flex;
    justify-content: end;
    width: 70px;
    color: #C70000;
}
`;