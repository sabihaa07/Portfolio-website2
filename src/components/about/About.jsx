import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About me" />
            </div>
            </div>

          <div className="about_content">
            <div className="about_card">
            <article className="about_cards">
              <FaAward className="about_icon"></FaAward>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about_cards">
              <MdPeopleAlt className="about_icon"></MdPeopleAlt>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_cards">
              <VscFolderLibrary className="about_icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            inventore molestiae ea quia facilis ipsa quaerat recusandae dolores
            nesciunt. Optio officiis recusandae corrupti quia aliquam eaque amet
            temporibus ut perferendis.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
      
    </section>
  );
};

export default About;
