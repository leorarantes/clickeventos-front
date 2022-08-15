import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from 'axios';

import Header from '../Header';
import Background from '../Background';
import Title from "../Title";
import Menu from '../Menu';
import MenuContext from "../../contexts/MenuContext";

export default function CreateEvent() {
    const navigate = useNavigate();
    const url = "localhost:4000/events";
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    const [event, setEvent] = useState({
        name: "",
        price: "",
        date: "",
        time: "",
        photo: "",
        pixKey: "",
        transfer: {
            bankAgency: "",
            bankAccount: "",
            bankAccountHolder: "",
            bank: "",
            bankAccountCpf: ""
        },
        description: ""
    });
    const { openMenu, setOpenMenu } = useContext(MenuContext);

    function createEvent() {
        if(event.name === "") {
            alert("Erro! É necessário digitar o nome do evento.");
            return;
        }
        if(event.price === "") {
            alert("Erro! É necessário digitar o preço do evento.");
            return;
        }
        if(event.date === "") {
            alert("Erro! É necessário digitar a data do evento.");
            return;
        }
        if(event.time === "") {
            alert("Erro! É necessário digitar o horário do evento.");
            return;
        }
        if(event.description === "") {
            alert("Erro! É necessário digitar a descrição do evento.");
            return;
        }
        if(event.pixKey === "" && event.transfer.bank === "") {
            alert("Erro! É necessário cadastrar pelo menos uma forma de pagamento.");
            return;
        }
        if(event.transfer !== "" && (event.transfer.bank === "" || event.transfer.bankAccount === "" || event.transfer.bankAccountHolder === "" || event.transfer.bankAgency === "")) {
            alert("Erro! É necessário preencher todas as informações da conta bancária, com exceção do CPF.");
            return;
        }

        const request = axios.post(url, config, event);
        request.then(() => {
            navigate('/MyEvents');
        });
        request.catch(error => {
            alert("Erro! Não foi possível cadastrar seu evento.")
            console.log(error.message);
        })
    }

    return (
        <>
            <CreateEventBody disabled={openMenu}>
                <Background />
                <Header openMenu={() => setOpenMenu(true)} />
                <Title text="Eventos disponíveis na sua cidade" />
                <Inputs>
                    <Input type="text" placeholder="Digite o nome do evento" value={event.name} onChange={e => {
                    const obj = {...event, name: e.target.value};
                    setEvent({...obj});
                    }} />
                    <Input type="text" placeholder="Digite a data" value={event.date} onChange={e => {
                    const obj = {...event, date: e.target.value};
                    setEvent({...obj});
                    }} />
                    <Input type="text" placeholder="Digite o horário" value={event.time} onChange={e => {
                    const obj = {...event, time: e.target.value};
                    setEvent({...obj});
                    }} />
                    <Input type="text" placeholder="Digite o preço" value={event.price} onChange={e => {
                    const obj = {...event, price: parseInt(e.target.value)};
                    setEvent({...obj});
                    }} />
                    <Upload>
                        <h2>Faça o upload do banner (opcional)</h2>
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                    </Upload>
                    <Input type="text" placeholder="Digite a descrição" value={event.description} onChange={e => {
                    const obj = {...event, description: e.target.value};
                    setEvent({...obj});
                    }} />
                </Inputs>
                <CreatePaymentFormButton onClick={() => createPaymentForm()}>Cadastrar formas de pagamento</CreatePaymentFormButton>
                <CreateEventButton onClick={() => createEvent()}>Criar evento</CreateEventButton>
            </CreateEventBody>
            <Menu closeMenu={() => setOpenMenu(false)} style={{visibility: openMenu ? "default" : "hidden"}} />
        </>
    );
}

const CreateEventBody = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h2, h3 {
        font-family: 'Lexend Exa', sans-serif;
    }

    button {
        box-sizing: border-box;
        width: 84%;
        height: 8.3vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        margin-top: 15px;
        font-family: 'Lexend Exa', sans-serif;
        color: #FFFFFF;
    }
`;

const Inputs = styled.div`
    width: 84%;
    height: 48%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: calc(23vh + 26px);
    z-index: 1;

    input:first-child {
        width: 100%;
        height: 9.3vh;

        ::placeholder {
            font-size: 5vw;
            line-height: 5vw;
        }
    }
    input:nth-child(2), input:nth-child(3), input:nth-child(4) {
        width: 50%;
        height: 7.2vh;
        margin-top: 10px;

        ::placeholder {
            font-size: 4vw;
            line-height: 4vw;
        }
    }

    input:last-child {
        width: 100%;
        height: 18.2vh;
        padding-bottom: 9.7h;

        ::placeholder {
            font-size: 5vw;
            line-height: 5vw;
        }
    }
`

const Input = styled.input`
    box-sizing: border-box;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    font-family: 'Lexend Exa', sans-serif;
    border: none;
    border-radius: 4px;
    padding-left: 20px;
    font-family: 'Lexend Exa', sans-serif;
    font-size: 5vw;
    line-height: 5vw;

    ::placeholder {
        background-color: #FFFFFF;
        color: #737373;
    }
`;

const Upload = styled.div`
    width: 50%;
    height: 7.2vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-top: 10px;

    h2 {
        width: 27vw;
        font-size: 4vw;
        line-height: 4vw;
        color: #FFFFFF;
        margin-right: 3px;
        text-align: center;
    }

    ion-icon {
        font-size: 4.2vw;
        color: #FFFFFF;
    }
`;

const CreatePaymentFormButton = styled.button`
    background: #000000;
    font-weight: 400;
    font-size: 1.7vh;
    line-height: 3vh;
`;

const CreateEventButton = styled.button`
    background: #FF4F89;
    font-weight: 800;
    font-size: 2.2vh;
    line-height: 3vh;
`;