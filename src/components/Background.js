import styled from "styled-components";
import background from "../assets/img/light-background.png";

export default function Background() {
    return (
        <BackgroundBody style={{backgroundImage: `url(${background})`}} />
    );
}

const BackgroundBody = styled.div`
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