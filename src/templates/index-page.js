import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
import '../css/base.css';
import '../css/home.css';

export const IndexPageTemplate = ({
  title,
  imageBanner,
  information,
  imageSecond,
  titleSecondSection,
  description,
  services
}) => (
    <div className="container">
      <section className='home-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>{title}</h1>
              <p>{information}</p>
              {/* <a className='btn-background margin-top' href="/">Conócenos <span className="btn-icon-background"><FontAwesomeIcon icon="arrow-right" /></span></a> */}
              <a className='btn-background margin-top' href="/">Conócenos <span className="btn-icon-background"></span></a>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 home-banner-image'>
            <div className="home-doctors">
              <PreviewCompatibleImage imageInfo={imageBanner} />
            </div>
          </div>
        </div>
      </section>
      <section className="works">
        <div className="row works-section">
          <div className="col-sm-6 col-xs-12 works-image">
            <PreviewCompatibleImage imageInfo={imageSecond} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <h2>{titleSecondSection}</h2>
            <p>{description}</p>
            {/* <a className="btn" href="/"> Agenda tu cita <span className="btn-icon"><FontAwesomeIcon icon="arrow-right" /></span></a> */}
            <a className="btn" href="/"> Agenda tu cita <span className="btn-icon"></span></a>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="row">
          <div className="col-sm-6">
            <div className="service-item">
              <div className="service-image">
                {/* <img src={companies} alt="companies" /> */}
              </div>
              <div className="service-info">
                <h2>Para empresas</h2>
                <p>
                  Somos el primer servicio de tele-medicina en el país ofreciendo el mejor servicio.
                  Agenda tu cita ya!
              </p>
                {/* <a className="btn btn-small" href="/"> Ver más <span className="btn-icon"><FontAwesomeIcon icon="arrow-right" /></span></a> */}
                <a className="btn btn-small" href="/"> Ver más <span className="btn-icon"></span></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="service-item">
              <div className="service-image">
                {/* <img src={pharmacies} alt="Pharmacies" /> */}
              </div>
              <div className="service-info">
                <h2>Para farmacias</h2>
                <p>
                  Somos el primer servicio de tele-medicina en el país ofreciendo el mejor servicio.
                  Agenda tu cita ya!
              </p>
                {/* <a className="btn btn-small" href="/"> Ver más <span className="btn-icon"><FontAwesomeIcon icon="arrow-right" /></span></a> */}
                <a className="btn btn-small" href="/"> Ver más <span className="btn-icon"></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-phone">
        <div className="row">
          <div className="col-xs-12">
            <h2 style={{ marginTop: '-135px' }}>¡Nosotros te llamamos!</h2>
            <p>Déjanos tu número y te llamaremos cuanto antes</p>
            <form className="form-phone">
              <input type="phone" placeholder="Tu número telefónico" />
              {/* <button>Llámenme <span className="btn-icon-button"><FontAwesomeIcon icon="arrow-right" /></span></button> */}
              <button>Llámenme <span className="btn-icon-button"></span></button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        imageBanner={frontmatter.imageBanner}
        information={frontmatter.information}
        imageSecond={frontmatter.imageSecond}
        titleSecondSection={frontmatter.titleSecondSection}
        description={frontmatter.description}
        services={frontmatter.services}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
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
        information
        imageSecond {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleSecondSection
        description
      }
    }
  }
`
