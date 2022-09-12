import axios from "axios";

const BASE_URL = `http://localhost:5000`;

function postRegister(register) {
    const promise = axios.post(`${BASE_URL}/register`, register);
    return promise;
};

function postSignIn(login) {
    const promise = axios.post(`${BASE_URL}`, login);
    return promise;
};

function getTransactions(transactionAuth) {
    const promise = axios.get(`${BASE_URL}/home`, transactionAuth);
    return promise;
};

function postIncome(userIncome, transactionAuth) {
    const promise = axios.post(`${BASE_URL}/income`, userIncome, transactionAuth);
    return promise;
};

function postOutcome(userOutcome, transactionAuth) {
    const promise = axios.post(`${BASE_URL}/outcome`, userOutcome, transactionAuth);
    return promise;
};

function updateTransaction(userTransactionEdit, transactionAuth, transactionParams) {
    const promise = axios.put(`${BASE_URL}/editTransaction/${transactionParams}`, userTransactionEdit, transactionAuth);
    return promise;
};

export {
    postRegister,
    postSignIn,
    getTransactions,
    postIncome,
    postOutcome,
    updateTransaction
};