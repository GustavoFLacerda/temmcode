import styled from "styled-components"
import whatsapp from "./assets/whatsapp.png";
import compwall from "./assets/compwall.jpg";

export function Contato(){
    return(
        <ContatoDiv>
            <div className="formcontainer">
                <img src={whatsapp}></img>
                <h1>Entre em contato</h1>
                <h2>Preencha o formulário para mais informações</h2>
                <form>
                    <div>
                        <input name="nome" placeholder="Nome"></input>
                        <input name="sobrenome" placeholder="Sobrenome"></input>
                    </div>
                    <div>
                        <input name="email" placeholder="Email"></input>
                        <input name="tel" type="tel" placeholder="Celular"></input>
                    </div>
                    <label htmlFor="mensagem">
                        No que podemos ajudar?
                    </label>
                        <textarea name="mensagem" placeholder="Mensagem" rows="5" cols="33"></textarea>
                
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="image-container">
                <div className="background-image"></div>
                <div className="rgba"></div>
            </div>
        </ContatoDiv>
    )
}

const ContatoDiv = styled.div`
width: 100%;
height: 900px;
display: flex;

div.image-container {
        position: relative;
        height: 100%;
        overflow: hidden;
        width: 50%;
    }

    div.image-container .background-image {
        width: 100%;
        height: 100%;
        background-image: url(${compwall}); /* Replace 'your-image.jpg' with your image path */
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    div.image-container .rgba {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6); 
        z-index: 1;
    }

.formcontainer{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
    img{
        width: 18%;
    }
    h1{
        font-size: 30px;
        font-weight: bold;
        margin: 0;
        weight: 100%;
        text-align: center;
    }
    h2{
        font-size: 24px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 5%;
        height: 50%;
        div{
            display: flex;
            gap: 5%;
            input{
                width: 45%;
                background-color: #F5E6E6;
                color: #9B8787;
                font-size: 20px;
                height: 42px;
                padding-left: 3%;
                padding-top: 2%;
                padding-bottom: 3%;
                border-radius: 10px;
                border: 1px solid black;
            }
        }
        label{
            font-size: 22px;
        }
        textarea{
            background-color: #F5E6E6;
            color: #9B8787;
            font-size: 20px;
            padding-left: 3%;
            padding-top: 2%;
            padding-bottom: 3%;
            border-radius: 10px;
            border: 1px solid black;
        }
        button{
            background-color: #08e4cc;
            color: black;
            font-size: 24px;
            height: 42px;
            width: 35%;
            align-self: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            border: none;
        }
    }

}

`