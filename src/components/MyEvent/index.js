import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import axios from 'axios';

import Header from '../Header';
import Menu from '../Menu';
import Title from "../Title";
import MenuContext from "../../contexts/MenuContext";
import Background from '../Background';

export default function MyEvent() {
    const url = `http://localhost:4000/tickets/event/${localStorage.getItem("eventId")}`;
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    const [tickets, setTickets] = useState([]);
    const { openMenu, setOpenMenu } = useContext(MenuContext);

    useEffect(() => {
        const request = axios.get(url, config);

        request.then(response => {
            setTickets([...response.data]);
        });
        request.catch(error => {
            alert("Erro! Não foi possível carregar as informações do seu evento.");
            console.log(error);
        });
    }, []);

    return (
        <>
            <MyEventBody disabled={openMenu}>
                <Background />
                <Header setOpenMenu={setOpenMenu} />
                <Title text="Informações do seu evento" />
                <div>
                    <h1>{localStorage.getItem("eventName")}</h1>
                    <h2>{`Há ${tickets.length} pessoas confirmadas para o seu evento!`}</h2>
                </div>
                <ParticipantsList>
                    <h1>Lista de confirmados:</h1>
                    {tickets.map(ticket => {
                        const { user } = ticket;
                        return (
                            <Participant>
                                <h2>{user.name}</h2>
                                <div>
                                    <h3>Baixar comp.</h3>
                                    <div>
                                        <ion-icon name="cloud-download-outline"></ion-icon>
                                    </div>
                                </div>
                            </Participant>
                        );
                    })}
                </ParticipantsList>
            </MyEventBody>
            <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </>
    );
}

const MyEventBody = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1, h2, h3 {
        font-family: 'Lexend Exa', sans-serif;
    }

    div:nth-child(4) {
        width: 80%;
        height: 17vh;
        background-color: #471F69;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 3px;
        margin-top: 28vh;
        z-index: 1;

        h1 {
            width: 61vw;
            font-size: 5vw;
            font-weight: 800;
            line-height: 6vw;
            color: #FFFFFF;
            margin-bottom: 1vh;
            margin-left: 4vw;
        }

        h2 {
            width: 60vw;
            font-size: 3.3vw;
            line-height: 3.6vw;
            color: #FFFFFF;
            margin-left: 4vw;
        }
    }
`;

const ParticipantsList = styled.div`
    box-sizing: border-box;
    width: 80%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    margin-top: 10px;
    padding-top: 3.5vh;
    padding-bottom: 5vh;
    z-index: 1;

    h1 {
        width: 50vw;
        font-size: 6vw;
        line-height: 6.5vw;
        color: #000000;
        text-align: center;
        margin-bottom: 5vh;
    }

    div:nth-child(2) {
        border-top: 0.3vh solid #000000;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    div:last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
`;

const Participant = styled.div`
    box-sizing: border-box;
    width: 91%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 0.3vh solid #000000;
    border-left: 0.3vh solid #000000;
    border-bottom: 0.3vh solid #000000;
    padding-left: 2.8vw;
    padding-right: 2.8vw;

    h2 {
        width: 45vw;
        font-size: 3.5vw;
        line-height: 3.5vw;
        color: #000000;
    }

    div:nth-child(2) {
        width: 18vw;
        height: 4vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border: none;

        h3 {
            width: 10vw;
            font-size: 2.5vw;
            line-height: 3vw;
            color: #A6A6A6;
            margin-right: 4px;
        }

        div {
            width: 4vh;
            height: 4vh;
            background-color: #FF4F89;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;

            ion-icon {
                font-size: 2.7vh;
                color: #FFFFFF;
            }
        }
    }
`;