import temmbranco from "./assets/temmbranco.png"
import linkedin from "./assets/linkedin.png"

export function Footer(){
    return(
        <footer>
            <div>
                <div>
                    <h1>Soluções práticas e eficientes <br></br> <br/> <img src={linkedin}></img></h1>
                </div>
                <img src = {temmbranco}></img>
                <div>
                    <h1>+55 43 93300-1868 <br></br> <br /> contato@temmcode.com</h1>
                </div>
            </div>
            <hr></hr>
            <h4>© TemmCode - 2024. Todos os direitos reservados.</h4>
        </footer>
    )
}