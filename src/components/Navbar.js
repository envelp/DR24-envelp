import React from "react";
import { Link } from "gatsby";
import logo from "../../static/img/logo.png";

import './Navbar.css'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ background: 'transparent' }}
      >
        <div className="container" style={{ fontSize: '20px' }}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Doctor24" style={{ width: 'auto', height: '200px', margin: '0' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/companies">Para Empresas</Link>
              <Link className="navbar-item" to="/pharmacies">Para Farmacias</Link>
              <Link className="navbar-item" to="/individuals">Para Individuos</Link>
              <Link className="navbar-item" to="/works">Cómo funciona</Link>
              <Link className="navbar-item" to="/contact">Contacto</Link>
              <Link className="navbar-item" to="/">Agenda tu cita </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
