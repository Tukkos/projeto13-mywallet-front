import styled from "styled-components"

export default function Home() {
    const transactions = [];

    return (
        <HomeScreen>
            <div className="header">
                <h1 className="head">Olá, SeuNome</h1>
                <ion-icon name="enter-outline"></ion-icon>
            </div>
            <div className="transactionsWindow">
                {(transactions.length === 0) ? <p>Não há registros de entrada ou saída</p> 
                : "" }
                {(transactions.map((transaction) => (
                    <p>Aaaa eu to maluco</p>
                )))}
            </div>
            <div className="footer">
                <button className="largeButton">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Nova entrada
                </button>
                <span className="space"></span>
                <button className="largeButton">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    Nova saída
                </button>
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
.header {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 25px;

    display: flex;
}
.head {
    width: 75vw;
}
.transactionsWindow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    width: 80vw;
    height: 100%;
    overflow: hidden;
    background: #ffffff;
    border-radius: 5px;
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