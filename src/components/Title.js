import styled from "styled-components";

export default function Title(text) {
    return (
        <TitleBody>
            <h1>{text}</h1>
        </TitleBody>
    );
}

const TitleBody = styled.div`
    width: 100%;
    height: 14vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 9vh;
    z-index: 2;

    h1 {
        width: 70%;
        font-size: 4.2vh;
        line-height: 4.8vh;
        color: #000000;
    }
`;