import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Clients from '../components/Clients'

import '../css/companies.css';

export const CompaniesPageTemplate = ({
  title,
  information,
  imageBanner,
  imageSecond,
  titleSecondSection,
  description,
  clients
}) => {
  return (
    <div className="container">
      <section className='companies-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>{title}</h1>
              <p>
                {information}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 companies-banner-image'>
            <div className="companies-doctors">
              <PreviewCompatibleImage imageInfo={imageBanner} />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="row info-section">
          <div className="col-sm-6 col-xs-12 info-image">
            <PreviewCompatibleImage imageInfo={imageSecond} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="info-container">
              <h2>{titleSecondSection}</h2>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h2 className="clients-title">Lo que dicen nuestros clientes</h2>
        <Clients gridItems={clients} />
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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CompaniesPageTemplate
        title={frontmatter.title}
        information={frontmatter.information}
        imageBanner={frontmatter.imageBanner}
        imageSecond={frontmatter.imageSecond}
        titleSecondSection={frontmatter.titleSecondSection}
        description={frontmatter.description}
        clients={frontmatter.clients}
      />
    </Layout>
  )
}

CompaniesPage.propTypes = {
  data: PropTypes.shape({
    markdownReamark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CompaniesPage

export const companiesPageQuery = graphql`
  query CompaniesPageTemplate {
    markdownRemark(frontmatter: { templateKey: {eq: "companies-page"}}) {
      frontmatter {
        title
        information
        imageBanner {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        imageSecond {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleSecondSection
        description
        clients {
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
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
