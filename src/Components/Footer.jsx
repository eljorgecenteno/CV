import email from "../Images/icono-email.jpg";
import linkedin from "../Images/icono-linkedin.jpg";
import github from "../Images/icono-github-blanco.jpg";

import "./Footer.css"
function Footer() {
  return (
    <div id="main-box-footer">
        <h2>Contact</h2>
        <div id="icons-footer-box">
        <a href="mailto:eljorgecenteno@gmail.com">
              <img
                className="icons-footer"
                id="email-icon-homepage"
                src={email}
                alt="icon email"
              />
            </a>
            <a href="https://www.linkedin.com/in/jorge-centeno-mesa-4b8868183/">
              <img
                className="icons-footer"
                src={linkedin}
                alt="icon linkedin"
              />
            </a>
            <a href="https://github.com/eljorgecenteno/">
              <img id="github-icon-white"className="icons-footer" src={github} alt="icon github" />
            </a>
        </div>
        
        
       <h4>Project developed by Jorge Centeno Mesa.</h4>
 
    </div>
   
)}
export default Footer;
