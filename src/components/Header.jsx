import {useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({cartCount, openCart}){
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
        <header className={`header ${scrolled ? "scrolled" : ""} ${location.pathname.replace("/", "")}`}>
        <h1>SoulScents</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={openCart}>Your Cart ({cartCount})</button>
        </nav>
        </header>
    );
}
export default Header;