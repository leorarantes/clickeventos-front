import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Header(props) {
    const navigate = useNavigate();
    return (
        <HeaderBody>
                <Location onClick={() => navigate("/events")}>
                    <ion-icon name="location-outline"></ion-icon>
                    <h1>Itajubá - MG</h1>
                </Location>
                <ion-icon name="menu-outline" onClick={() => props.setOpenMenu(true)}></ion-icon>
        </HeaderBody>
    );
}

const HeaderBody = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 2;

    ion-icon:last-child {
        font-size: 5vh;
        color: #FFFFFF;
        margin-bottom: 3px;
        margin-right: 5%;
    }
`;

const Location = styled.div`
    width: 40vw;
    height: 30%;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    margin-left: 5%;

    ion-icon {
        font-size: 4vh;
        color: #FFFFFF;
        margin-right: 3px;
    }

    h1 {
        font-size: 1.8vh;
        line-height: 3vh;
        color: #FFFFFF;
    }
`;

