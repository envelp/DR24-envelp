import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PharmaciesGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map((item, index) => (
      <div key={index} className="col-sm-3">
        <PreviewCompatibleImage imageInfo={item} />
      </div>
    ))}
  </div>
)

export default PharmaciesGrid
