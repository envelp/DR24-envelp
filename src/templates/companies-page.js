import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import doctors from '../../static/img/doctors.png'
import display from '../../static/img/img.png'
import companies from '../../static/img/para-empresas.png'
import pharmacies from '../../static/img/para-farmacias.png'

import '../css/companies.css';

export const CompaniesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <section className='companies-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>Para empresas</h1>
              <p>
                Somos el primer servicio tele-medicina en el país ofreciendo el mejor servicio para las empresas.
                Somos el primer servicio tele-medicina en el país ofreciendo el mejor servicio para las empresas.
                Somos el primer servicio tele-medicina en el país ofreciendo el mejor servicio para las empresas.
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 companies-banner-image'>
            <div className="companies-doctors">
              <img src={doctors} alt="Doctors" />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="row info-section">
          <div className="col-sm-6 col-xs-12 info-image">
            <img src={display} alt="display" />
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="info-container">
              <h2>Especialistas sin <br /> salir de la oficina</h2>
              <p>
                No siempre es fácil llevar a un niño o una persona mayor a un centro de salud.
                Gracias  a las consultas a domicilio puedes esperar comodamente desde tu casa y recibir una evaluación.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h2 className="clients-title">Lo que dicen nuestros clientes</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="clients-item">
              <div className="clients-image">
                <img src={companies} alt="companies" />
              </div>
              <div className="clients-info">
                <h2>Andres Bustamante</h2>
                <h3>Director General de XXX</h3>
                <p>
                  "Deseo brindar a cada uno de mis pacientesla atención y el tiempo que merecen."
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="clients-item">
              <div className="clients-image">
                <img src={pharmacies} alt="pharmacies" />
              </div>
              <div className="clients-info">
                <h2>Dra. María Salazar</h2>
                <h3>Médico General</h3>
                <p>
                  "Deseo brindar a cada uno de mis pacientesla atención y el tiempo que merecen."
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="clients-item">
              <div className="clients-image">
                <img src={companies} alt="companies" />
              </div>
              <div className="clients-info">
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

CompaniesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CompaniesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CompaniesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CompaniesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompaniesPage

export const companiesPageQuery = graphql`
  query CompaniesPageTemplate {
    markdownRemark(forntmatter: { templateKey: {eq: "companies-page"}}) {
      frontmatter {
        title
        information
        imageBanner {
          childImageSharp {
            fluid (maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondImage {
          childImageSharp {
            fluid (maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        clients {
          image {
            childImageSharp {
              fluid (maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          title
          description
        }
      }
    }
  }
`
