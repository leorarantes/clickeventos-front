import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from 'axios';

import Header from '../Header';
import Menu from '../Menu';
import Title from "../Title";
import MenuContext from "../../contexts/MenuContext";
import Background from '../Background';

export default function MyEvent() {
    const navigate = useNavigate();
    const url = `localhost:4000/tickets/${localStorage.getItem("eventId")}`;
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
        <MyEventBody>
            <Background />
            <Header />
            <Title text="Informações do seu evento" />
            <div>
                <h1>{localStorage.getItem("eventName")}</h1>
                <h2>{`Há ${tickets.length} pessoas confirmadas para o seu evento!`}</h2>
            </div>
            <ParticipantsList>
                <h1>Lista de confirmados:</h1>
                {tickets.map(ticket => {
                    const {paymentVoucher, user} = ticket;
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
            <Menu closeMenu={() => setOpenMenu(false)} style={{visibility: openMenu ? "default" : "hidden"}} />
        </MyEventBody>
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
        margin-top: 23vh;
        z-index: 1;

        h1 {
            width: 61vw;
            font-size: 6.8vw;
            line-height: 7vw;
            color: #FFFFFF;
        }

        h2 {
            width: 61vw;
            font-size: 5vw;
            line-height: 5.2vw;
            color: #FFFFFF;
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
    padding-top: 5vh;
    padding-bottom: 5vh;
    z-index: 1;

    h1 {
        width: 50vw;
        font-size: 7.8vw;
        line-height: 8vw;
        color: #000000;
    }

    div:nth-child(2) {
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
    border: 0.5vh solid #000000;
    padding-left: 2.8vw;
    padding-right: 2.8vw;

    h2 {
        width: 45vw;
        font-size: 5vw;
        line-height: 5.2vw;
        color: #000000;
    }

    div:nth-child(2) {
        width: 20vw;
        height: 4vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            width: 10vw;
            font-size: 3vw;
            line-height: 3.2vw;
            color: #A6A6A6;
        }

        div {
            width: 4vh;
            height: 4vh;
            background-color: #FF4F89;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1px;

            ion-icon {
                font-size: 2.7vh;
                color: #FFFFFF;
            }
        }
    }
`;