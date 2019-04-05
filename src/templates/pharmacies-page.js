import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import '../css/pharmacies.css';

export const PharmaciesPageTemplate = ({
  title,
  information,
  imageBanner,
  imageSecond,
  titleSecondSection,
  description,
  pharmacies
}) => {
  return (
    <div className="container">
      <section className='pharmacies-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>{title}</h1>
              <p>{information}</p>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 pharmacies-banner-image'>
            <div className="pharmacies-doctors">
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
              <p>{description}</p>
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
  const { frontmatter } = data

  return (
    <Layout>
      <PharmaciesPageTemplate
        title={frontmatter.title}
        information={frontmatter.information}
        imageBanner={frontmatter.imageBanner}
        imageSecond={frontmatter.imageSecond}
        titleSecondSection={frontmatter.titleSecondSection}
        description={frontmatter.description}
        pharmacies={frontmatter.pharmacies}
      />
    </Layout>
  )
}

PharmaciesPage.propTypes = {
  data: PropTypes.shape({
    markdownReamark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PharmaciesPage

export const pharmaciesPageQuery = graphql`
  query PharmaciesPageTemplate {
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
        pharmacies {
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
