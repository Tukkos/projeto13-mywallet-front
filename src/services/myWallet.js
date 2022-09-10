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

function getTransactions(userTransactions) {
    const promise = axios.post(`${BASE_URL}/home`, userTransactions);
    return promise;
};

function postIncome(userIncome) {
    const promise = axios.post(`${BASE_URL}/income`, userIncome);
    return promise;
};

function postOutcome(userOutcome) {
    const promise = axios.post(`${BASE_URL}/outcome`, userOutcome);
    return promise;
};

export {
    postRegister,
    postSignIn,
    getTransactions,
    postIncome,
    postOutcome
};