import React from 'react'
import languages from './data/languages.json'
import "./Languages.css"

const Languages = () => {
  return (
    <>
    <div className="languages " id="Languages" data-aos="fade-up">
      <h1>Languages Learn</h1>
      <div className="items">
      {languages.map((data)=>(
          <div className="item"data-aos="fade-up" key = {data.title}>
            <img src={data.imgsrc} alt="" />
            <h4>{data.title}</h4>
          </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Languages

