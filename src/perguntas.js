import styled from "styled-components"
import React from 'react'
import seta_play from './assets/seta_play.png'
import seta_virar from './assets/seta_virar.png'
import icone_certo from './assets/icone_certo.png'
import icone_quase from './assets/icone_quase.png'
import icone_erro from './assets/icone_erro.png'

let perguntas = [['Pergunta1', 'Resposta1'], ['Pergunta2', 'Resposta2']];

export default function Perguntas(){
    const [concluidos, setConc] = React.useState(0);
    let holder_img = seta_play;
    for (let a = 0; a < perguntas.length; a++){
        perguntas[a].push(holder_img);
        perguntas[a].push(false);
        perguntas[a].push('rgb(0, 0, 0)');
        perguntas[a].push('none');
        perguntas[a].push('play-btn')
    }
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
            <Bottom data-test="footer">
                {atr.conc}/2 Concluídos
            </Bottom>
        )
    }
    function But(atr){
        const But = styled.button`
        @media (min-width: 1px){
            width: 30%;
            background-color: ${atr.back};
            border: none;
            margin: 0px 0px 0px 10px;
        }`
        return(
            <But onClick={atr.click} value={atr.hold} data-test={atr.data_test}>{atr.hold}</But>
        )
    }
    function Quest(atr){
        const Question = styled.span`
        @media (min-width: 1px){
            font-size: 40px;
            text-align: left;
            width: 100%;
            color: ${atr.cor};
            text-decoration: ${atr.dec}
        }`;
        return(
            <Question data-test="flashcard-text">{atr.value}</Question>
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
        let clicked = e.target.nodeName;
        let element;
        if (clicked == 'IMG'){
            element = e.target.parentElement.parentElement.parentElement.parentElement;
        }
        else{
            element = e.target.parentElement.parentElement.parentElement;
        }
        element.children[1].style.display = 'none';
        element.children[2].style.display = 'flex';
    }
    function end_question(e){
        let element = e.target.parentElement.parentElement.parentElement;
        element.children[2].style.display = 'none';
        element.children[0].style.display = 'flex';
        perguntas[element.id][3] = true;
        let typ = e.target.value;
        let new_icon;
        let new_color;
        if (typ == 'Zap'){
            new_icon = icone_certo;
            new_color = 'rgb(50, 200, 50)';
            perguntas[element.id][6] = 'zap-icon';
        }
        else if (typ == 'Quase não lembrei'){
            new_icon = icone_quase;
            new_color = 'rgb(255, 100, 0)';
            perguntas[element.id][6] = 'partial-icon';
        }
        else{
            new_icon = icone_erro;
            new_color = 'rgb(255, 0, 0)';
            perguntas[element.id][6] = 'no-icon';
        }
        perguntas[element.id][2] = new_icon;
        perguntas[element.id][3] = true;
        perguntas[element.id][4] = new_color;
        perguntas[element.id][5] = 'line-through';
        setConc(concluidos + 1);
    }
    const Parte = styled.div`
    @media (min-width: 1px){
        width: 100%;
    }`;
    const Perguntas = styled.div`
    @media (min-width: 1px){
        width: 100%;
    }`;
    const Question_end = styled.span`
    @media (min-width: 1px){
        font-size: 40px;
        text-align: left;
        width: 100%;
        margin: 0px 0px 50px;
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
    const Botoes_end = styled.div`
    @media (min-width: 1px){
        background: none;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }`;
    return(
        <>
        <Perguntas>
            {perguntas.map((pergunta) =>
            <Parte id={perguntas.indexOf(pergunta)} data-test="flashcard">
                <Holder>
                    <Quest cor={pergunta[4]} value={`Pergunta ${perguntas.indexOf(pergunta) + 1}`} dec={pergunta[5]}/>
                    <Botoes>
                        <Virar onClick={(e) => show_question(e)} disabled={pergunta[3]} data-test={pergunta[6]}>
                            <img src={pergunta[2]}></img>
                        </Virar>
                    </Botoes>
                </Holder>
                <Pergunta>
                    <Question_end data-test="flashcard-text">{pergunta[0]}</Question_end>
                    <Botoes>
                        <Virar onClick={(e) => show_answer(e)} data-test="turn-btn">
                            <img src={seta_virar}></img>
                        </Virar>
                    </Botoes>
                </Pergunta>
                <Resposta>
                    <Question_end data-test="flashcard-text">{pergunta[1]}</Question_end>
                    <Botoes_end>
                        <But click={end_question} back='rgb(255, 0, 0)' hold='Não lembrei' data_test="no-btn"/>
                        <But click={end_question} back='rgb(255, 100, 0)' hold='Quase não lembrei' data_test="partial-btn"/>
                        <But click={end_question} back='rgb(50, 200, 50)' hold='Zap' data_test="zap-btn"/>
                    </Botoes_end>
                </Resposta>
            </Parte>
        )}
        </Perguntas>
        <Bottom conc={concluidos}/>
        </>
    )
}