import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Footer(openMenu) {
    const navigate = useNavigate();

    return (
        <FooterBody>
            <h1 onClick={() => navigate('/CreateEvent')}>Criar evento</h1>
            <ion-icon name="add-circle" onClick={() => navigate('/CreateEvent', { replace: true })}></ion-icon>
        </FooterBody>
    );
}

const FooterBody = styled.div`
    width: 100%;
    height: 9vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
    z-index: 2;

    h1 {
        font-size: 2.5vh;
        line-height: 3vh;
        color: #FFFFFF;
        margin-right: 8px;
    }

    ion-icon {
        font-size: 3.3vh;
        color: #FFFFFF;
    }
`;