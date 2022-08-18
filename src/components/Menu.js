import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Menu(props) {
    const navigate = useNavigate();

    function logOut() {
        localStorage.setItem("token", "logged out");
        navigate('/');
    }

    function goToMyEventsPage() {
        props.setOpenMenu(false);
        navigate('/my-events');
    }

    function goToMyTicketsPage() {
        props.setOpenMenu(false);
        navigate('/my-tickets');
    }
    
    return (
        <MenuBody style={{visibility: props.openMenu ? "visible" : "hidden"}}>
            <nav>
                <h1>Perfil</h1>
                <h1 onClick={() => goToMyTicketsPage()}>Meus Ingressos</h1>
                <h1 onClick={() => goToMyEventsPage()}>Meus Eventos</h1>
                <h1>Termos de Uso</h1>
                <h1>Política de Privacidade</h1>
                <h1 onClick={() => logOut()}>Sair</h1>
                <ion-icon name="chevron-back-outline" onClick={() => props.setOpenMenu(false)}></ion-icon>
            </nav>
        </MenuBody>
    );
}

const MenuBody = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0px;
    left: 0px;
    font-family: 'Lexend Exa', sans-serif;
    z-index: 3;

    nav {
        width: 70%;
        height: 100%;
        background-color: #471F69;
        display: flex;
        flex-direction: column;
        justify-content: baseline;

        ion-icon:last-child {
            font-size: 4vh;
            color: #FFFFFF;
            margin-top: 7vh;
            margin-left: 5px;
        }

        h1 {
            font-size: 3.3vw;
            line-height: 3.5vw;
            color: #FFFFFF;
            margin-top: 5vh;
            margin-left: 5vh;
        }
    }
`;