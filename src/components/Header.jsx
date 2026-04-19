import {useEffect, useState } from "react";
import "./Header.css";

function Header(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener ("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={scrolled ? "header scrolled" : "header"}>
        <h1>SoulScents</h1>
        <nav>
            <a href ="/">Home</a>
            <a href ="/"> Shop</a>
            <a href="/"> Contact</a>
        </nav>
        </header>
    );
}
export default Header;