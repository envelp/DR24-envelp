import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Questions from '../components/Questions'

import '../css/works.css';

export const WorksPageTemplate = ({
  title,
  information,
  imageBanner,
  questions
}) => {
  return (
    <div className="container">
      <section className="works-s">
        <div className="row works-s-section">
          <div className="col-sm-6 col-xs-12">
            <h1>{title}</h1>
            <p>{information}</p>
          </div>
          <div className="col-sm-6 col-xs-12 works-s-image">
            <PreviewCompatibleImage imageInfo={imageBanner} />
          </div>
        </div>
      </section>
      <section className="questions">
        <h2>Preguntas frecuentes</h2>
        <div className="questions-container">
          <Questions gridItems={questions} />
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

const WorksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WorksPageTemplate
        title={frontmatter.title}
        information={frontmatter.information}
        imageBanner={frontmatter.imageBanner}
        questions={frontmatter.questions}
      />
    </Layout>
  )
}

WorksPage.propTypes = {
  data: PropTypes.shape({
    markdownReamark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WorksPage

export const worksPageQuery = graphql`
  query WorksPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "works-page"}}) {
      frontmatter {
        title
        information,
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
        questions {
          question
          answer
        }
      }
    }
  }
`
