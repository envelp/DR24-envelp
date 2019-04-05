import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import '../css/base.css';
import '../css/home.css';
import doctors from '../../static/img/doctors.png'
import display from '../../static/img/img.png'
import companies from '../../static/img/para-empresas.png'
import pharmacies from '../../static/img/para-farmacias.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    // <div>
    //   <div
    //     className="full-width-image margin-top-0"
    //     style={{
    //       backgroundImage: `url(${
    //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
    //       })`,
    //       backgroundPosition: `top left`,
    //       backgroundAttachment: `fixed`,
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: 'flex',
    //         height: '150px',
    //         lineHeight: '1',
    //         justifyContent: 'space-around',
    //         alignItems: 'left',
    //         flexDirection: 'column',
    //       }}
    //     >
    //       <h1
    //         className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
    //         style={{
    //           boxShadow:
    //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
    //           backgroundColor: 'rgb(255, 68, 0)',
    //           color: 'white',
    //           lineHeight: '1',
    //           padding: '0.25em',
    //         }}
    //       >
    //         {title}
    //       </h1>
    //       <h3
    //         className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
    //         style={{
    //           boxShadow:
    //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
    //           backgroundColor: 'rgb(255, 68, 0)',
    //           color: 'white',
    //           lineHeight: '1',
    //           padding: '0.25em',
    //         }}
    //       >
    //         {subheading}
    //       </h3>
    //     </div>
    //   </div>
    //   <section className="section section--gradient">
    //     <div className="container">
    //       <div className="section">
    //         <div className="columns">
    //           <div className="column is-10 is-offset-1">
    //             <div className="content">
    //               <div className="content">
    //                 <div className="tile">
    //                   <h1 className="title">{mainpitch.title}</h1>
    //                 </div>
    //                 <div className="tile">
    //                   <h3 className="subtitle">{mainpitch.description}</h3>
    //                 </div>
    //               </div>
    //               <div className="columns">
    //                 <div className="column is-12">
    //                   <h3 className="has-text-weight-semibold is-size-2">
    //                     {heading}
    //                   </h3>
    //                   <p>{description}</p>
    //                 </div>
    //               </div>
    //               <Features gridItems={intro.blurbs} />
    //               <div className="columns">
    //                 <div className="column is-12 has-text-centered">
    //                   <Link className="btn" to="/products">
    //                     See all products
    //                   </Link>
    //                 </div>
    //               </div>
    //               <div className="column is-12">
    //                 <h3 className="has-text-weight-semibold is-size-2">
    //                   Latest stories
    //                 </h3>
    //                 <BlogRoll />
    //                 <div className="column is-12 has-text-centered">
    //                   <Link className="btn" to="/blog">
    //                     Read more
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="container">
      <section className='home-banner'>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className="container-info">
              <h1>Ofrecemos el primer y único servicio de <br /> tele-medicina en México</h1>
              <p>
                Somos el primer servicio tele-medicina en el país ofreciendo el mejor servicio. Agenda
                una cita ya!.
            </p>
              {/* <a className='btn-background margin-top' href="/">Conócenos <span className="btn-icon-background"><FontAwesomeIcon icon="arrow-right" /></span></a> */}
              <a className='btn-background margin-top' href="/">Conócenos <span className="btn-icon-background"></span></a>
            </div>
          </div>
          <div className='col-sm-6 col-xs-12 home-banner-image'>
            <div className="home-doctors">
              <img src={doctors} alt="Doctors" />
            </div>
          </div>
        </div>
      </section>
      <section className="works">
        <div className="row works-section">
          <div className="col-sm-6 col-xs-12 works-image">
            <img src={display} alt="display" />
          </div>
          <div className="col-sm-6 col-xs-12">
            <h2>Conoce como funciona nuestro <br /> servicio de tele-medicina</h2>
            <p>
              Somos el primer servicio de tele-medicina en el país <br />  ofreciendo el mejor servicio. Agenda ya!
          </p>
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
                <img src={companies} alt="companies" />
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
                <img src={pharmacies} alt="Pharmacies" />
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
