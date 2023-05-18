import styled from 'styled-components';
import concluido from './concluido.js'

export default function Bottom(){
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
            {concluido}/2 Concluídos
        </Bottom>
    )
}