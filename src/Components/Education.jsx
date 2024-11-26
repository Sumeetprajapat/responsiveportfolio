import React from 'react'
import education from './data/education.json';
import "./Education.css"

const Education = () => {
  return (
    <>
    <div className="about" id="Education"data-aos="fade-up">
      <h1>Education</h1>
      {
        education.map((data)=>{
          return(
            <div className="col-detail"data-aos="fade-up" key={data.id}>
              <div className="eduleft">
                <img src={data.imgSrc} alt="" />
              </div>
              <div className="eduright" >
                <h2>{data.heading}</h2>
                <h4>{data.college}</h4>
                <h4 style={{color:"yellow"}}>{data.completed}</h4>
                <h4>{data.cgpi}</h4>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Education
