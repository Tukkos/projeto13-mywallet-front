import styled from "styled-components"

export default function Home() {
    const transations = [];

    return (
        <HomeScreen>
            <div className="header">
                Olá, SeuNome
                <ion-icon name="enter-outline"></ion-icon>
            </div>
            <div className="transitionsWindow">
                {(transations.length === 0) ? <p>Não há registros de entrada ou saída</p> 
                : "" }
                {(transations.map((transition) => (
                    <p>Aaaa eu to maluco</p>
                )))}
            </div>
            <div className="sideBySide">
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
.header {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 25px;

    display: flex;
    justify-content: space-between;
}
.transitionsWindow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    width: (100vw -50px);
    height: 65vh;
    overflow: hidden;
    background: #ffffff;
    border-radius: 5px;
}
.sideBySide {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
.largeButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start; 
    
    width: 43vw;
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