import React from 'react'
import './footer.css'
import {FaInstagram , FaTwitter, FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>XOLODEV</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="www.linkedin.com/in/sabiha-naz-shaikh-9786981b6" target='_blank'><FaLinkedin /></a>
        <a href="https://instagram/_sabiha_07" target='_blank'><FaInstagram /></a>
        <a href="https://twitter.com/Sabiha07" target='_blank'><FaTwitter /></a>
        <a href="https://github.com/Sabiha07" target='_blank'><FaGithub /></a>        
      </div>
      <div className="footer_copyright">
        <small>&copy; XoloDev Portfolio. All rights reserved.</small>
      </div> 
    </footer>
  )
}

export default Footer
