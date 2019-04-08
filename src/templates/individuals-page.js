import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Specialists from '../components/Specialists'

import '../css/base.css';
import '../css/individuals.css';

export const IndividualsPageTemplate = ({
  title,
  information,
  imageBanner,
  secondImage,
  titleSecondSection,
  description,
  specialists
}) => {

  return (
    <div className="container">
      <section className='individuals-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>{title}</h1>
              <p>{information}</p>
              <a style={{ width: '203px' }} className='btn-background margin-top' href="/">Busca médicos <span className="btn-icon-background"></span></a>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 individuals-banner-image'>
            <div className="individuals-doctors">
              <PreviewCompatibleImage imageInfo={imageBanner} />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="row info-section">
          <div className="col-sm-6 col-xs-12 info-image">
            <PreviewCompatibleImage imageInfo={secondImage} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="info-container">
              <h2>{titleSecondSection}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="specialists">
        <h2 className="specialists-title">Especialistas certificados que aman lo que hacen</h2>
        <Specialists gridItems={specialists} />
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

const IndividualsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndividualsPageTemplate
        title={frontmatter.title}
        information={frontmatter.information}
        imageBanner={frontmatter.imageBanner}
        secondImage={frontmatter.secondImage}
        titleSecondSection={frontmatter.titleSecondSection}
        description={frontmatter.description}
        specialists={frontmatter.specialists}
      />
    </Layout>
  )
}

export default IndividualsPage

export const individualsPageQuery = graphql`
  query IndividualsPageTemplate {
    markdownRemark(frontmatter: { templateKey: {eq: "individuals-page"}}) {
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
        secondImage {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleSecondSection
        description
        specialists {
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
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
