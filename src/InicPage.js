import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import Pergunta from './perguntas.js'

export default function InicPage(){
    const Application = styled.div`
    @media (min-width: 769px){
        box-sizing: border-box;
        width: 768px;
        background-color: rgb(255, 50, 50);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 768px){
        box-sizing: border-box;
        width: 100%;
        background-color: rgb(255, 50, 50);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `;
    const Logo = styled.div`
    @media (min-width: 1px){
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 100px;
        margin: 50px 10px 100px;
    }
    `;
    const Perguntas = styled.div`
    @media (min-width: 1px){
        width: 100%;
    }`;
    const Bottom = styled.div`
    @media (min-width: 1px){
        box-sizing: border-box;
        position: fixed;
        bottom: 0px;
        width: 100%;
        padding: 20px;
        background-color: rgb(50, 50, 50);
        color: white;
        text-align: center;
        font-size: 50px;
    }`;
    const Foto_logo = styled.img`width: 20%;`;
    const Nome_logo = styled.span``;
    return(
        <Application>
            <Logo>
                <Foto_logo src={logo}></Foto_logo>
                <Nome_logo>ZapRecall</Nome_logo>
            </Logo>
            <Perguntas>
                <Pergunta/>
            </Perguntas>
            <Bottom>
                Fim
            </Bottom>
        </Application>
    )
}