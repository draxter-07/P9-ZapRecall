import styled from "styled-components"
import React from 'react'

export default function Perguntas(){
    let perguntas = [1, 2, 3, 4, 5, 6, 7, 8];
    const [cor, setCor] = React.useState('rgb(250, 250, 50)');
    function clic(e){
        e.target.style.display = 'none';
        if (cor == 'rgb(250, 250, 50)'){
            setCor('rgb(255, 255, 255)');
        }
        else{
            setCor('rgb(250, 250, 50)');
        }
    }
    const Pergunta = styled.button`
    @media (min-width: 1px){
        box-sizing: border-box;
        width: 100%;
        background-color: ${cor};
        padding: 20px 30px;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px 0px 20px;
        border: none;
    }`;
    const Question = styled.span`
    @media (min-width: 1px){
        font-size: 40px;
    }`;
    const Virar = styled.img`
    @media (min-width: 1px){;
    }`;
    return(
        <>
        {perguntas.map((pergunta) =>
        <Pergunta onClick={(e) => clic(e)}>
            <Question>Pergunta {pergunta}</Question>
            <Virar src="./assets/seta_play.png"></Virar>
        </Pergunta>
        )}
        </>
    )
}