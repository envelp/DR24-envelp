import React from 'react'
import PropTypes from 'prop-types'
import { CompaniesPageTemplate } from '../../templates/about-page'

const CompaniesPagePreview = ({ entry, widgetFor }) => (
  <CompaniesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CompaniesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CompaniesPagePreview
