import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from 'axios';

import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import Title from "../Title";
import MenuContext from "../../contexts/MenuContext";
import Background from '../Background';
import { getDateTime } from "../../utils/eventsUtil";

export default function MyEvents() {
    const navigate = useNavigate();
    const url = `localhost:4000/events/from-manager`;
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    const [events, setEvents] = useState([]);
    const { openMenu, setOpenMenu } = useContext(MenuContext);

    useEffect(() => {
        const request = axios.get(url, config);

        request.then(response => {
            setEvents([...response.data]);
        });
        request.catch(error => {
            alert("Erro! Não foi possível carregar seus eventos.");
            console.log(error);
        });
    }, []);

    function goToMyEventPage(id, name) {
        localStorage.setItem("eventId", `${id}`);
        localStorage.setItem("eventName", `${name}`);
        navigate(`/events/${id}`);
    }

    return (
        <>
            <MyEventsBody disabled={openMenu}>
                <Background />
                <Header />
                <Title text="Seus eventos" />
                <MyEventsList>
                    {events.length === 0 ?
                        <h1>Você ainda possui eventos cadastrados</h1>
                        :
                        events.map(event => {
                            const { id, name, location, timestamp } = event;
                            const dateTime = getDateTime(timestamp);
                            return (
                                <Event style={{ backgroundImage: `url(${event.photo})` }} onClick={() => goToMyEventPage(id, name)}>
                                    <div>
                                        <h2>{dateTime.month}</h2>
                                        <h3>{dateTime.day}</h3>
                                    </div>
                                    <div>
                                        <h2>{name}</h2>
                                        <h3>{location}</h3>
                                    </div>
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </Event>
                            );
                        })
                    }
                </MyEventsList>
                <Footer />
            </MyEventsBody>
            <Menu closeMenu={() => setOpenMenu(false)} style={{ visibility: openMenu ? "default" : "hidden" }} />
        </>
    );
}

const MyEventsBody = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'Lexend Exa', sans-serif;
        font-weight: 400;
    }

    h2, h3 {
        font-family: 'Barlow', sans-serif;
    }
`;

const MyEventsList = styled.nav`
    box-sizing: content-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 23vh;
    padding-bottom: 26px;
    z-index: 1;

    h1 {
        width: 70%;
        font-size: 6vh;
        line-height: 7vh;
        color: #737373;
    }
`;

const Event = styled.div`
    width: 100%;
    height: 27%;
    background-color: #471F69;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 26px;

    div:first-child {
        width: 7vh;
        height: 7vh;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 6%;
        border-radius: 1px;
        border: 0.5vh solid #D9D9D9;

        h2 {
            font-size: 1.7vh;
            line-height: 1.8vh;
            font-weight: 500;
            color: #000000;
        }

        h3 {
            font-size: 2.3vh;
            line-height: 2.4vh;
            font-weight: 500;
            color: #000000;
        }
    }

    div:last-child {
        height: 7vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 4%;

        h2 {
            font-size: 4vh;
            line-height: 4.2vh;
            font-weight: 500;
            color: #FFFFFF;
        }

        h3 {
            font-size: 3vh;
            line-height: 3.2vh;
            font-weight: 500;
            color: #FFFFFF;
        }
    }

    ion-icon {
        font-size: 3vh;
        color: #FFFFFF;
        margin-right: 6%;
        margin-left: 4%;
    }
`;