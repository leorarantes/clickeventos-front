import styled from "styled-components";

export default function Header(openMenu) {
    return (
        <HeaderBody>
                <Location>
                    <ion-icon name="location-outline"></ion-icon>
                    <h1>Itajubá - MG</h1>
                </Location>
                <ion-icon name="menu-outline" onClick={openMenu}></ion-icon>
        </HeaderBody>
    );
}

const HeaderBody = styled.div`
    width: 100%;
    height: 9vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 2;

    ion-icon:last-child {
        font-size: 3.5vh;
        color: #FFFFFF;
        margin-right: 5%;
    }
`;

const Location = styled.div`
    width: 23%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5%;

    ion-icon {
        font-size: 3.2vh;
        color: #FFFFFF;
    }

    h1 {
        font-size: 2.2vh;
        line-height: 3vh;
        color: #FFFFFF;
    }
`;

