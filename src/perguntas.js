import styled from "styled-components"
import React from 'react'
import seta_play from './assets/seta_play.png'

export default function Perguntas(){
    const [concluidos, setConc] = React.useState(0);
    let perguntas = [['Pergunta1', 'Resposta1'], ['Pergunta2', 'Resposta2']];
    function Bottom(atr){
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
        return(
            <Bottom>
                {atr.conc}/2 Concluídos
            </Bottom>
        )
    }
    function show_question(e){
        let clicked = e.target.nodeName;
        let element;
        if (clicked == 'IMG'){
            element = e.target.parentElement.parentElement.parentElement.parentElement;
        }
        else{
            element = e.target.parentElement.parentElement.parentElement;
        }
        element.children[0].style.display = 'none';
        element.children[1].style.display = 'flex';
    }
    function show_answer(e){
        let element = e.target.parentElement.parentElement.parentElement;
        element.children[1].style.display = 'none';
        element.children[2].style.display = 'flex';
    }
    function end_question(e){
        let element = e.target.parentElement.parentElement.parentElement;
        element.children[2].style.display = 'none';
        element.children[0].style.display = 'flex';
        setConc(concluidos + 1);
        if (perguntas.length == concluidos + 1){
            console.log('fim');
        }
    }
    const Parte = styled.div`
    @media (min-width: 1px){
        width: 100%;
    }`;
    const Perguntas = styled.div`
    @media (min-width: 1px){
        width: 100%;
    }`;
    const Question = styled.span`
    @media (min-width: 1px){
        font-size: 40px;
        text-align: left;
        width: 100%;
    }`;
    const Virar = styled.button`
    @media (min-width: 1px){
        background: none;
        border: none;
    }`;
    const Botoes = styled.div`
    @media (min-width: 1px){
        background: none;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }`;
    const Pergunta = styled.div`
    @media (min-width: 1px){
        box-sizing: border-box;
        width: 100%;
        background-color: rgb(250, 250, 50);
        padding: 20px 30px;
        border-radius: 15px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0px 0px 20px;
    }`;
    const Holder = styled.div`
    @media (min-width: 1px){
        box-sizing: border-box;
        width: 100%;
        background-color: rgb(250, 250, 50);
        padding: 20px 30px;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0px 0px 20px;
    }`;
    const Resposta = styled.div`
    @media (min-width: 1px){
        box-sizing: border-box;
        width: 100%;
        background-color: rgb(250, 250, 50);
        padding: 20px 30px;
        border-radius: 15px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0px 0px 20px;
    }`;
    return(
        <>
        <Perguntas>
            {perguntas.map((pergunta) =>
            <Parte id={perguntas.indexOf(pergunta)}>
                <Holder>
                    <Question>Pergunta {perguntas.indexOf(pergunta) + 1}</Question>
                    <Botoes>
                        <Virar onClick={(e) => show_question(e)}>
                            <img src={seta_play}></img>
                        </Virar>
                    </Botoes>
                </Holder>
                <Pergunta>
                    <Question>{pergunta[0]}</Question>
                    <Botoes>
                        <button onClick={(e) => show_answer(e)}>Oie</button>
                    </Botoes>
                </Pergunta>
                <Resposta>
                    <Question>{pergunta[1]}</Question>
                    <Botoes>
                        <button onClick={end_question}>Oie</button>
                        <button>Oie</button>
                        <button>Oie</button>
                    </Botoes>
                </Resposta>
            </Parte>
        )}
        </Perguntas>
        <Bottom conc={concluidos}/>
        </>
    )
}