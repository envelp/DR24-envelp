import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const SpecialistsGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map(item => (
      <div key={item.title} className="col-sm-4">
        <div className="specialists-item">
          <div className="specialists-image">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="specialists-info">
            <h2>{item.name}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default SpecialistsGrid
