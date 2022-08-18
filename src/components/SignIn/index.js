import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from "../../assets/img/logo.png";
import background from "../../assets/img/dark-background.png";

export default function SignIn() {
    const navigate = useNavigate();
    const url = "http://localhost:4000/sign-in";

    const [user, setUser] = useState({ email: "", password: "" });

    function sendRequest() {
        if(user.email === "" || user.password === "") {
            alert("Erro! Não podem haver campos vazios.");
            return;
        }

        const request = axios.post(url, user);
        request.then(response => {
            const { token } = response.data;
            localStorage.setItem("token", token);
            navigate('/events')
        });
        request.catch(error => {
            if(error.response.status === 401) return alert("Erro! Senha incorreta.");
            if(error.response.status === 404) return alert("Erro! Email não registrado.");
            console.log(error.message);
        })
    }

    return (
        <SignInBody style={{backgroundImage: `url(${background})`}}>
            <Logo src={logo} />
            <Input type="text" placeholder="Digite seu email" value={user.email} onChange={e => {
            const obj = {...user, email: e.target.value};
            setUser({...obj});
            }} />
            <Input type="password" placeholder="Digite sua senha" value={user.password} onChange={e => {
            const obj = {...user, password: e.target.value};
            setUser({...obj});
            }} />
            <Button onClick={() => sendRequest()}>Entrar</Button>
            <Link to="/sign-up"><AlternativeLink>Primeira vez? Cadastre-se!</AlternativeLink></Link>
        </SignInBody>
    );
}

const SignInBody = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

const Logo = styled.img`
    width: 184px;
    height: 100px;
    margin-bottom: 10%;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 68%;
    height: 6%;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding-left: 15px;
    margin-bottom: 2%;
    font-family: 'Lexend Exa', sans-serif;
    font-weight: 400;
    font-size: 2vh;
    line-height: 3vh;
    color: #000000;

    ::placeholder {
    font-family: 'Lexend Exa', sans-serif;
    font-weight: 400;
    font-size: 2vh;
    line-height: 3vh;
    color: #767272;
    }
`;

const Button = styled.button`
    box-sizing: border-box;
    width: 68%;
    height: 6%;
    background: #FF4F89;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    margin-bottom: 5%;
    font-family: 'Lexend Exa', sans-serif;
    font-weight: 800;
    font-size: 2vh;
    line-height: 3vh;
    color: #FFFFFF;
`;

const AlternativeLink = styled.h1`
    font-family: 'Lexend Exa', sans-serif;
    font-weight: 400;
    font-size: 2vh;
    line-height: 3vh;
    color: #FFFFFF;
    text-align: center;
`;