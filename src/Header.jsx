import temmbranco from "./assets/temmbranco.png"
import { useState, useEffect } from 'react';

export function Header(){

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <img src={temmbranco}></img>
            <ul>
                <li>Nossos serviços</li>
                <li>Portifólio</li>
                <li>Temm PDV</li>
                <li>Informações</li>
            </ul>
            <button>Contato</button>
        </header>
        
    )
}