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