import React, { useEffect, useLayoutEffect,useRef } from 'react'
import Typed from "typed.js";
import "./Home.css"

const Home = () => {
  const typedRef = useRef(null)
  useEffect (()=>{
    const options =  {
      strings:["Welcome to my Profile",
        "My name is Sumit Prajapati",
        "I have learned HTML, CSS, JS, React JS"
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current, options)
    return()=>{
      typed.destroy()
    }
  },)
  return (
    <>
    <div className="home" id="Home">
        <div className="homeleft"data-aos="fade-right">
            <h1 ref={typedRef}></h1>
            <a href="/SumitResume.pdf" className="btn" download="SumitResume.pdf">Download Resume</a>
        </div>
        <div className="homeright">
            <div className="img"data-aos="fade-left">
            <img src="/assets/two.jpeg" alt="Code Image" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
