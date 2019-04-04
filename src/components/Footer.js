import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

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
