import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ClientsGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map(item => (
      <div key={item.title} className="col-sm-4">
        <div className="clients-item">
          <div className="clients-image">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="clients-info">
            <h2>{item.name}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default ClientsGrid
