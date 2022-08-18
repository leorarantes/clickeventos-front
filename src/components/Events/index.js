import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import axios from 'axios';

import Header from '../Header';
import Background from '../Background';
import Footer from '../Footer';
import Title from "../Title";
import Menu from '../Menu';
import MenuContext from "../../contexts/MenuContext";
import {getDateTime} from "../../utils/eventsUtil";

export default function Events() {
    const url = "http://localhost:4000/events";
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
                <Background />
                <Header setOpenMenu={setOpenMenu} />
                <Title text="Eventos disponíveis na sua cidade" />
                <EventsList>
                    {events.length === 0 ?
                        <h1>Não há eventos disponíveis no momento</h1>
                    :
                        events.map(event => {
                            const {name, location, timestamp} = event;
                            const dateTime = getDateTime(new Date(timestamp));
                            return (
                                <Event style={{backgroundImage: `url(http://www.receitasedicasdochef.com.br/wp-content/uploads/2021/01/Como-Preparar-um-Delicioso-Churrasco.jpg)`}}>
                                    <EventFooter>
                                        <div>
                                            <h2>{dateTime.month}</h2>
                                            <h3>{dateTime.day}</h3>
                                        </div>
                                        <div>
                                            <h2>{name}</h2>
                                            <h3>{location}</h3>
                                        </div>
                                    </EventFooter>
                                </Event>
                            );
                        })
                    }
                </EventsList>
                <Footer />
            </EventsBody>
            <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
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

const EventsList = styled.nav`
    box-sizing: content-box;
    width: 100%;
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24vh;
    padding-bottom: 26px;
    z-index: 1;

    h1 {
        width: 70%;
        font-size: 6vw;
        line-height: 7vw;
        color: #000000;
        text-align: center;
    }
`;

const Event = styled.div`
    width: 77vw;
    height: 77vw;
    border-radius: 4px;
    position: relative;
    margin-top: 26px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

const EventFooter = styled.div`
    width: 100%;
    height: 27%;
    background-color: #EFEFEF;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 4px;
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
            font-size: 1.9vh;
            line-height: 2vh;
            font-weight: 500;
            color: #FF5757;
        }

        h3 {
            font-size: 2.8vh;
            line-height: 2.8vh;
            font-weight: 500;
            color: #FF5757;
            margin-top: 2px;
        }
    }

    div:last-child {
        height: 7vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 5px;
        margin-left: 4%;

        h2 {
            font-size: 6vw;
            line-height: 6vw;
            font-weight: 500;
            color: #737373;
        }

        h3 {
            font-size: 5vw;
            line-height: 5vw;
            font-weight: 500;
            color: #737373;
        }
    }
`;