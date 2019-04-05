import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import '../css/works.css';

export const WorksPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <section className="works-s">
        <div className="row works-s-section">
          <div className="col-sm-6 col-xs-12">
            <h1>¿Qué es telemedicina?</h1>
            <p>
              Somos un Proveedor de Servicios de Salud (PSS) dedicados a proveer atención médica por video,
              chat o  telefónica  especializada de primer contacto información médica las 24 horas de los 365 días del año.
          </p>
          </div>
          <div className="col-sm-6 col-xs-12 works-s-image">
            {/* <img src={display} alt="display" /> */}
          </div>
        </div>
      </section>
      <section className="questions">
        <h2>Preguntas frecuentes</h2>
        <div className="questions-container">
          <div className="row">
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>How is telemedicine delivered?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>Who participates in telemedicine?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>What can telemedicine be used for?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>Where can telemedicine be provided?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>How does telemedicine increase access to care?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>How does telemedicine  improves quality of care delivery?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
              </p>
              </div>
            </div>
            <div className="question-item col-sm-7">
              <div className="question-title"><h3>How does telemedicine  improves quality of care delivery?</h3></div>
              <div className="question-body">
                <p>
                  Telemedicine can be delivered using video-conferencing, audio communication, and/or
                  text-messaging using mobile phones, tablets, and desktop computers.
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

WorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WorksPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

WorksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorksPage

export const worksPageQuery = graphql`
  query WorksPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
