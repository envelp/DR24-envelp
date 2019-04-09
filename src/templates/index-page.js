import React from 'react'
import { graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
import Services from '../components/Services'
import '../css/base.css';
import '../css/home.css';

export const IndexPageTemplate = ({
  title,
  imageBanner,
  information,
  imageSecond,
  titleSecondSection,
  description,
  clients
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
        <Services gridItems={clients} />
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
        clients={frontmatter.clients}
      />
    </Layout>
  )
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
        clients {
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
      }
    }
  }
`
