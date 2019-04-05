import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import '../css/base.css';
import '../css/individuals.css';

export const IndividualsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <section className='individuals-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>Doctores especialistas a un click de distancia</h1>
              <p>
                Busca los mejores especialistas o servicios médicos, elige un horario adecuado y
                reserve al instante con unos pocos clics
            </p>
              <a style={{ width: '203px' }} className='btn-background margin-top' href="/">Busca médicos <span className="btn-icon-background"></span></a>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 individuals-banner-image'>
            <div className="individuals-doctors">
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
      <section className="specialists">
        <h2 className="specialists-title">Especialistas certificados que aman lo que hacen</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="specialists-item">
              <div className="specialists-image">
                {/* <Companies /> */}
              </div>
              <div className="specialists-info">
                <h2>Andres Bustamante</h2>
                <h3>Director General de XXX</h3>
                <p>
                  "Deseo brindar a cada uno de mis pacientesla atención y el tiempo que merecen."
              </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="specialists-item">
              <div className="specialists-image">
                {/* <Pharmacies /> */}
              </div>
              <div className="specialists-info">
                <h2>Dra. María Salazar</h2>
                <h3>Médico General</h3>
                <p>
                  "Deseo brindar a cada uno de mis pacientesla atención y el tiempo que merecen."
              </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="specialists-item">
              <div className="specialists-image">
                {/* <Pharmacies /> */}
              </div>
              <div className="specialists-info">
                <h2>Dra. Ricardo Garza</h2>
                <h3>Médico General</h3>
                <p>
                  "Deseo brindar a cada uno de mis pacientesla atención y el tiempo que merecen."
              </p>
              </div>
            </div>
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

IndividualsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndividualsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndividualsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IndividualsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndividualsPage

export const individualsPageQuery = graphql`
  query IndividualsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
