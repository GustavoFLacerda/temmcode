import GlobalStyle from "./style/GlobalStyle";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Serviços } from "./Serviços";
import { Projetos } from "./Projetos";
import { Contato } from "./Contato";
import { Footer } from "./Footer";


export default function App(){
    return(
        <>
        <GlobalStyle />
        <Header />
        <Hero />
        <Serviços />
        <Projetos />
        <Contato />
        <Footer />
        </>
    )
}