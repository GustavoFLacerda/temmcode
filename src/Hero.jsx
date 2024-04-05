import styled from "styled-components"
import mobiledev1 from "./assets/mobiledev1.png"
import mobiledev2 from "./assets/mobiledev2.jpg"
import mobiledev3 from "./assets/mobiledev3.jpg"
import mobiledev4 from "./assets/mobiledev4.png"

export function Hero(){
    return(
        <HeroDiv>
            <div>
                <div>
                    <img src={mobiledev2}></img>
                    <img src={mobiledev3}></img>
                    <img src={mobiledev1}></img>
                </div>
                <div>
                    <h1>Desenvolvimento e design criativo para seu produto</h1>
                    <h2>Conheça já nossas soluções</h2>
                    <div>
                        <button>1</button>
                        <button>2</button>
                    </div>
                    <img></img>
                </div>
            </div>
        </HeroDiv>    
    )
}

const HeroDiv = styled.div`
   background: #1B1C1C;
   height: 550px;
   width: 100%;
   display: flex;
   gap: 5%;
   padding: 10%;

   div{
    width: 100%;
    display: flex;
    gap: 5%;
    height: 100%;
   }

   div > div:first-child {
    display: flex;
    flex-flow: column wrap;
    gap: 5%;
    img:first-child{
        height: 50%;
    }
    img:nth-child(2){
        height: 45%;
    }
   }

   div > div:nth-child(2){
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 15%;
    h1{
        color: white;
        font-size: 40px;
    }
    h2{
        color: white;
        font-size: 24px;
    }

    div{
        display: flex;
        width: 100%;
        gap: 4%;
        button{
            height: 10%;
            border-radius: 10px;
            width: 15%;
            display: flex;
            justify-content: center;
            color: white;
            background: green;
            font-size: 15px;
            align-items: center;
        }
    }
   }

`