import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from 'axios';

import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import MenuContext from "../../contexts/MenuContext";
import background from "../../assets/img/light-background.png";

export default function Events() {
    const url = "localhost:4000/events";
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
            alert("Erro! Não foi possível carregar os eventos da sua cidade");
            console.log(error);
        });
    }, []);

    return (
        <>
            <EventsBody disabled={openMenu}>
                <Background style={{backgroundImage: `url(${background})`}} />
                <Header openMenu={() => setOpenMenu(true)} />
                <Title text="Eventos disponíveis na sua cidade" />
                <EventsList>
                    {events.length === 0 ?
                        <h1>Não há eventos disponíveis no momento</h1>
                    :
                        events.map(event => {
                            return (
                                <Event style={{backgroundImage: `url(${event.photo})`}}>
                                    <EventFooter>
                                        <div>
                                            <h2>{event.month}</h2>
                                            <h3>{event.day}</h3>
                                        </div>
                                        <div>
                                            <h2>{event.name}</h2>
                                            <h3>{event.location}</h3>
                                        </div>
                                    </EventFooter>
                                </Event>
                            );
                        })
                    }
                </EventsList>
                <Footer />
            </EventsBody>
            <Menu closeMenu={() => setOpenMenu(false)} style={{visibility: openMenu ? "default" : "hidden"}} />
        </>
    );
}

const EventsBody = styled.main`
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

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
`;

const EventsList = styled.nav`
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
    width: 77%;
    height: 45vh;
    position: relative;
    margin-top: 26px;
`;

const EventFooter = styled.div`
    width: 100%;
    height: 27%;
    background-color: #EFEFEF;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;

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
            color: #FF5757;
        }

        h3 {
            font-size: 2.3vh;
            line-height: 2.4vh;
            font-weight: 500;
            color: #FF5757;
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
            color: #737373;
        }

        h3 {
            font-size: 3vh;
            line-height: 3.2vh;
            font-weight: 500;
            color: #737373;
        }
    }
`;