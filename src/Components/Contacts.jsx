import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./Contacts.css"

const Contacts = () => {
  return (
    <>
    <div className="contact"id="Contacts"data-aos="fade-up" >
        <h1>Contacts</h1>
        <div className="contact-icons"data-aos="fade-up">
            <a href="https://www.facebook.com/" target ="_blank"className="items"><FaSquareFacebook className='icons' /></a>
            <a href="https://www.instagram.com/"target ="_blank" className="items"><IoLogoInstagram className='icons'/></a>
            <a href="https://github.com/" target ="_blank"className="items"><FaGithubSquare className='icons'/></a>
            <a href="https://x.com/" target ="_blank"className="items"><FaSquareXTwitter className='icons'/></a>
            <a href="https://www.youtube.com/" target ="_blank"className="items"><FaYoutube className='icons'/></a>
            <a href="https://in.linkedin.com/" target ="_blank"className="items"><FaLinkedin className='icons'/></a>
        </div>
    </div>
    </>
  )
}

export default Contacts
