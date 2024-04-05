import styled from "styled-components"
import mobiledev3 from "./assets/mobiledev3.jpg";

export function Projetos(){
    return(
        <ProjetoDiv>
            <h1>Projetos já desenvolvidos</h1>
            <div>
            <div>
                <img src={mobiledev3}></img>
                <div>
                    <h1>Projeto 1</h1>
                    <h2>Lorem ipsum lorem ipsum lorem ipsum roma lor lorem ipsum</h2>
                    <button>Acesse</button>
                </div>
            </div>
            <div>
                <img src={mobiledev3}></img>
                <div>
                    <h1>Projeto 1</h1>
                    <h2>Lorem ipsum lorem ipsum lorem ipsum roma lor lorem ipsum</h2>
                    <button>Acesse</button>
                </div>
            </div>
            <div>
                <img src={mobiledev3}></img>
                <div>
                    <h1>Projeto 1</h1>
                    <h2>Lorem ipsum lorem ipsum lorem ipsum roma lor lorem ipsum</h2>
                    <button>Acesse</button>
                </div>
            </div>
            </div>
        </ProjetoDiv>
    )
}

const ProjetoDiv = styled.div`
width: 100%;
height: 800px;
background: #1B1C1C;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;

h1{
    color: white;
    font-size: 40px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
}

div{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    gap: 4%;
    div{
        width: 90%;
        padding-right: 5%;
        background: #84B8B8;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        height: 200px;
        gap: 5%;
        img{
            height:100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 10%;
            h1{
                font-size: 24px;
                font-weight: bold;
                color: black;
                text-align: start;
                margin-top: 30px;
                margin-bottom: 0px;
            }
            h2{
                font-size: 18px;
                width: 100%;
                color: black;
                text-align: start;
            }
            button{
                background: #08e4cc;
                height: 32px;
                font-size: 16px;
                color: black;
                width: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                border-radius: 10px;
                align-self: flex-end;
                
            }
        }
    }
}

`