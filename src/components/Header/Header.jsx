import { NavLink, useNavigate } from "react-router-dom"
import { SlArrowDown } from "react-icons/sl";
import "./Header.scss"
import logo from "./logo.png"

export default function Header() {
    const navigator = useNavigate();
    return (
       <header className="navbar">
        <div className="navbar__left">
            {/* Logo */}
            <div className="navbar__logo" onClick={() => navigator("/")}>
                <img src={logo} alt="Logo" />
            </div>
            {/* Menu */}
            <nav className="navbar__menu">
                <NavLink to= "/products" className= "navbar__link">
                    Products
                    <SlArrowDown className="navbar__icon"/>
                </NavLink>
                <NavLink to= "/capabilities" className= "navbar__link">
                    Capabilities
                    <SlArrowDown className="navbar__icon"/>
                </NavLink>
                <NavLink to= "/solutions" className= "navbar__link">
                    Solutions
                    <SlArrowDown className="navbar__icon"/>
                </NavLink>
                <NavLink to= "/learn_Discover" className= "navbar__link">
                    Learn & Discover
                    <SlArrowDown className="navbar__icon"/>
                </NavLink>
                <NavLink to= "/pricing" className= "navbar__link">
                    Pricing
                </NavLink>
            </nav>
        </div>

        {/* Button */}
        <div className="navbar__actions">
            <NavLink to= "/request" className = "navbar__link">
                Request a demo
            </NavLink>
            <h3>|</h3>
            <button className="btn btn--primary">Try for free</button>
        </div>
       </header>
    )
}
