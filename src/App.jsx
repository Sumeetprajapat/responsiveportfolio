import React,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Education from './Components/Education'
import Languages from './Components/Languages'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div>
      <Navbar/>
      <div className="container" style={{marginTop:"-2rem"}}>
      <Home/>
      <Education/>
      <Languages/>
      <Projects/>
      <Contacts/>
      </div>
    </div>
  )
}

export default App
