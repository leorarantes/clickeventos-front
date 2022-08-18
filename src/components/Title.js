import styled from "styled-components";

export default function Title(props) {
    return (
        <TitleBody>
            <h1>{props.text}</h1>
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
    top: 10vh;
    z-index: 2;

    h1 {
        width: 220px;
        font-size: 3.4vh;
        line-height: 4vh;
        color: #000000;
        text-align: center;
    }
`;