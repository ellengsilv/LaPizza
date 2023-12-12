import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>LaPizza</h5>
        <div className="delivery__time-item border-0 ps-0">
          <span>Instagram: @_lapizzaa </span>
          <p>Facebook: @lapizzapizzaria twitter: @lapizzaa</p>
        </div>
        <p>As melhores pizzas da cidade, experimente!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Nossos Horários </h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Terça- Domingo</span>
            <p>18:00PM às 00:00AM</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            Avenida Vitórino Freire, Rosário-Centro
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
