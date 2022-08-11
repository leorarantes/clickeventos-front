import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from "../../assets/img/logo.png";
import background from "../../assets/img/dark-background.png";

export default function SignUp() {
    const navigate = useNavigate();
    const url = "localhost:4000/sign-up";

    const [user, setUser] = useState({ email: "", name: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState("");

    function sendRequest() {
        if(user.name === "" || user.email === "" || user.password === "" || confirmPassword === "") {
            alert("Erro! Não podem haver campos vazios.");
            return;
        }
        if(user.password !== confirmPassword) {
            alert("Erro! A senha digitada no campo 'Confirme a senha' deve a mesma do campo 'Senha'.");
            return;
        } 

        const request = axios.post(url, user);
        request.then(() => {
            navigate('/sign-in', { replace: true })
        });
        request.catch(() => {
            alert("Erro! Não foi possível realizar seu cadastro, tente novamente mais tarde.");
        })
    }

    return (
        <SignUpBody style={{backgroundImage: `url(${background})`}}>
            <Logo src={logo} />
            <Input type="text" placeholder="Digite seu nome inteiro" value={user.name} onChange={e => {
            const obj = {...user, name: e.target.value};
            setUser({...obj});
            }} />
            <Input type="text" placeholder="Digite seu email" value={user.email} onChange={e => {
            const obj = {...user, email: e.target.value};
            setUser({...obj});
            }} />
            <Input type="password" placeholder="Digite sua senha" value={user.password} onChange={e => {
            const obj = {...user, password: e.target.value};
            setUser({...obj});
            }} />
            <Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => {
            const str = e.target.value;
            setConfirmPassword(str);
            }} />
            <Button onClick={() => sendRequest()}>Cadastrar</Button>
            <Link to="/sign-in"><AlternativeLink>Já tem uma conta? Entre agora!</AlternativeLink></Link>
        </SignUpBody>
    );
}

const SignUpBody = styled.div`
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

