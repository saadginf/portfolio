import React from "react";

import mightycoder from "../assets/logo2.PNG";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

import { SiMinutemailer } from "react-icons/si";
const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:itwolves1@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <div>
        <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
        <div className="sidebar__name">
          Saad <span>Wolf</span>{" "}
        </div>
        <div className="sidebar__item sidebar__title">FullStack Developer</div>
        <a href={resume} download="resume.pdf">
          <div className="sidebar__item sidebar__resume">
            <FaFileDownload color="#1a6277" /> CV
          </div>
        </a>
        <figure className="sidebar__social-icons my-2">
          <FaGithub size={30} />
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
        </figure>
      </div>
      <div className="sidebar__contact">
        <div className="sidebar__location">
          <FaLocationArrow /> Kenitra, Morocco
        </div>
        <div className="sidebar__item">
          <FaEnvelope /> itwolves1@gmail.com
        </div>
        <div className="sidebar__item">
          <FaPhone /> +212 620006429
        </div>
      </div>
      <div className="sidebar__item sidebar__enveloppe" onClick={handleEmailMe}>
        <SiMinutemailer size={50} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
