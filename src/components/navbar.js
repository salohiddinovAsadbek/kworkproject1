import { NavLink } from "react-router-dom";
import mainLogo from "../images/mainLogo.svg";
import phone from "../images/phone.svg";
import "../style/navbar.css";
import burger from "../images/burger.svg";
import { useState } from "react";
import close from "../images/close.svg";

function Navbar() {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={mainLogo} alt="mainLogo" />
      </NavLink>
      <nav>
        <NavLink to="/">Услуги</NavLink>
        <NavLink to="/">Преимущества</NavLink>
        <NavLink to="/">Отзывы</NavLink>
        <NavLink to="/">Этапы</NavLink>
      </nav>
      <button className="phoneNumber">
        <img src={phone} alt="phoneIcon" />
        <p>+7 (000) 123-45-67</p>
      </button>
      <button className="burgerButton" onClick={() => setMenu((c) => !c)}>
        {isMenuOpen ? (
          <img src={close} alt="burgerIcon" />
        ) : (
          <img src={burger} alt="burgerIcon" />
        )}
      </button>
      {isMenuOpen && <Menu />}
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <div className="menuNav">
        <NavLink to="/">Услуги</NavLink>
        <NavLink to="/">Преимущества</NavLink>
        <NavLink to="/">Отзывы</NavLink>
        <NavLink to="/">Этапы</NavLink>
      </div>
      <div>
        <p>+7 (000) 123-45-67</p>
        <p>info@lockservice.com</p>
      </div>
    </div>
  );
}

export default Navbar;
