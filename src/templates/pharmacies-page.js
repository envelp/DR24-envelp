import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import '../css/pharmacies.css';

export const PharmaciesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <section className='pharmacies-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>Para farmacias</h1>
              <p>
                Somos el primer servicio de tele-medicina en el país ofreciendo el mejor servicio.
                Agenda una cita ya!Somos el primer servicio de tele-medicina en el país ofreciendo el mejor servicio.
                Agenda una cita ya!Somos el primer servicio de tele-medicina en el país ofreciendo el mejor servicio.
                Agenda una cita ya!
            </p>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 pharmacies-banner-image'>
            <div className="pharmacies-doctors">
              {/* <img src={doctors} alt="Doctors" /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="row info-section">
          <div className="col-sm-6 col-xs-12 info-image">
            {/* <img src={display} alt="display" /> */}
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="info-container">
              <h2>Médico sin salir de casa</h2>
              <p>
                No siempre es fácil llevar a un niño o una persona mayor a un centro de salud.
                Gracias a las consultas a domicilio puedes esperar comodamente desde tu casa y recibir una evaluación,
                diagnostico o tratamiento que requieran un examen físico.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h2 className="clients-title">Farmacias que ya trabajan con nosotros</h2>
        <div className="row">
          <div className="col-sm-3">
            {/* <Companies /> */}
          </div>
          <div className="col-sm-3">
            {/* <Companies /> */}
          </div>
          <div className="col-sm-3">
            {/* <Companies /> */}
          </div>
          <div className="col-sm-3">
            {/* <Companies /> */}
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="row">
          <div className="col-xs-12">
            <h2>¡Contáctanos!</h2>
            <p style={{ marginTop: '-25px' }}>Déjanos tus datos para ponernos en contacto</p>
            <form className="form">
              <input type="text" placeholder="Nombre" />
              <input type="phone" placeholder="Teléfono" />
              <input type="email" placeholder="Correo electrónico" />
              {/* <button><span className="btn-icon-button"><FontAwesomeIcon icon="arrow-right" /></span></button> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

PharmaciesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PharmaciesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PharmaciesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PharmaciesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PharmaciesPage

export const pharmaciesPageQuery = graphql`
  query PharmaciesPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
