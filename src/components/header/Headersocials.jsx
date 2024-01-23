import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";

const Headersocials = () => {
  return (
    <div className="header_socials">
        <a href="www.linkedin.com" target="_blank"> <FaLinkedin /> </a>
        <a href="www.github.com" target="_blank"><FaGithub /> </a>
        <a href="www.dribbble.com" target="_blank"><FiDribbble /> </a>
    </div>
  )
}

export default Headersocials
