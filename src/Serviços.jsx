import styled from "styled-components"
import vector1 from "./assets/vector1.png"
import vector2 from "./assets/vector2.png"
import vector3 from "./assets/vector3.png"

export function Serviços(){
    return(
        <ServiçoDiv>
            <h1>Nossos serviços</h1>
            <div>
                <div>
                    <img src={vector1}></img>
                    <button>Desenvolvimento de Aplicações</button>
                    <h4>___LoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLorem</h4>
                </div>
                <div>
                    <img src={vector2}></img>
                    <button>Desenvolvimento por assinatura</button>
                    <h4>___LoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLorem</h4>
                </div>
                <div>
                    <img src={vector3}></img>
                    <button>Temm PDV</button>
                    <h4>___LoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLoremipsumLoLoremipsumLoremipsumLorem</h4>
                </div>
            </div>
        </ServiçoDiv>
    )
}



const ServiçoDiv = styled.div`
width: 100%;
height: 800px;
padding: 5%;
display: flex;
flex-direction:column;
align-items: center;

h1{
    width: 100%;
    text-align: center;
    color: black;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 20px;
}

> div{
    display:flex;
    width: 90%;
    gap: 8%;
}

div div{
    width: 27%;
height: 700px;
display: flex;
flex-direction: column;
gap: 3.5%;
button{
    background: #08e4cc;
    height: 36px;
    display: flex;
    color: black;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius:10px;
    border: none;
}

img{
    width: 100%;
}

h4{
    color: black;
    font-weight: bold;
    font-size: 18px;
    word-wrap: break-word;
}
}
`