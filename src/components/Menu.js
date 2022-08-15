import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Menu(closeMenu) {
    const navigate = useNavigate();

    function logOut() {
        localStorage.setItem("token", "logged out");
        navigate('/sign-in');
    }
    
    return (
        <MenuBody>
            <nav>
                <h1 onClick={() => navigate('/Profile')}>Perfil</h1>
                <h1 onClick={() => navigate('/MyTickets')}>Meus Ingressos</h1>
                <h1 onClick={() => navigate('/MyEvents')}>Meus Eventos</h1>
                <h1>Termos de Uso</h1>
                <h1>Política de Privacidade</h1>
                <div onClick={() => logOut()}>
                    <h1>Sair</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
                <ion-icon name="chevron-back-outline" onClick={closeMenu}></ion-icon>
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
            margin-top: 2vh;
        }

        h1 {
            font-size: 2.5vh;
            line-height: 3vh;
            color: #FFFFFF;
            margin-top: 5vh;
            margin-left: 5vh;
        }

        div {
            width: 10vh;
            height: 3vh;
            display: flex;
            align-items: center;
            justify-content: space-between;

            ion-icon {
                font-size: 2.8vh;
                color: #FFFFFF;
            }
        }
    }
`;