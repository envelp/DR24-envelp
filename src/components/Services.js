import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ServicesGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map(item => (
      <div key={item.title} className="col-sm-4">
        <div className="service-item">
          <div className="service-image">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="service-info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a className="btn btn-small" href="/"> Ver más <span className="btn-icon"></span></a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default ServicesGrid
