import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import '../css/flexboxgrid.min.css';
import './Footer.css';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row between-lg" style={{ textAlign: 'center' }}>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-xs-3 logo-footer">
                <img src={logo} alt="logo" width="100" />
              </div>
              <div className="col-xs-9">
                <span>{new Date().getFullYear()}. Todos los derechos reservados</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-links">
              <Link to="/">Politica de privacidad</Link>
              <Link to="/">Términos y condiciones</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
