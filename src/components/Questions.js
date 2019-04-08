import React from 'react'

const QuestionsGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map((item, index) => (
      <div key={index} className="question-item col-sm-7">
        <div className="question-title"><h3>{item.question}</h3></div>
        <div className="question-body">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>
)

export default QuestionsGrid
