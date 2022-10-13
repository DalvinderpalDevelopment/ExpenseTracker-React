import React from "react";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import "../../assets/css/footer.css";

const date = Date.now();
const dateObj = new Date(date);
let socialPlatform = (url) => {
  if (url === "linkedin") {
    return "https://www.linkedin.com/in/dalvinderpal-s-soora/";
  } else if (url === "github") {
    return "https://github.com/DalvinderpalDevelopment";
  } else if (url === "mail") {
    return "mailto:dalvinderpaldevelopment@gmail.com";
  }
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>
          &copy; {dateObj.getFullYear()} Designed &amp; Build with{" "}
          <span>
            <FaHeart />
          </span>
          by Dalvinderpal Soora
        </p>
      </div>
      <div className="footer-social">
        <a href={socialPlatform("linkedin")}>
          <FaLinkedin />
        </a>
        <a href={socialPlatform("github")}>
          <FaGithub />
        </a>
        <a href={socialPlatform("mail")}>
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Footer;
