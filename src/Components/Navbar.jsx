
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css"
import { useContext } from 'react';
import { themeContext } from '../Context/Context';

function Navbar() {

const {language, setLanguage} = useContext(themeContext)

  return (
    <div id="main-box-navbar">
  {language === "english" &&  <>
    <Link className="navbar-links" smooth to="#about-me-title-home-page">About me</Link>
  <Link className="navbar-links"smooth to="#Projects-homePage">Projects</Link>
  <Link className="navbar-links"smooth to="#studies-homePage">Studies</Link>
  <Link className="navbar-links"smooth to="#work-experience-homePage">Work experience</Link>
  <Link className="navbar-links"smooth to="#languages-homepage">Languages</Link>
  <Link  className="navbar-links"to="mailto:eljorgecenteno@gmail.com">Contact</Link>
  <div id="language-selection-navbar">
  <p onClick={()=>{setLanguage("english")}}>
  EN
</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("german")}}>DE</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("spanish")}}>ES</p>
  </div>
  
    </>}    
    {language === "german" &&  <>
    <Link className="navbar-links" smooth to="#about-me-title-home-page">Über mich</Link>
    <Link className="navbar-links" smooth to="#Projects-homePage">Projekte</Link>
    <Link className="navbar-links" smooth to="#studies-homePage">Studium</Link>
    <Link className="navbar-links" smooth to="#work-experience-homePage">Berufserfahrung</Link>
    <Link className="navbar-links" smooth to="#languages-homepage">Sprachen</Link>
    <Link className="navbar-links" to="mailto:eljorgecenteno@gmail.com">Kontakt</Link>
    <div id="language-selection-navbar">
        <p onClick={() => { setLanguage("english") }}>
            EN
        </p>
        <p> | </p>
        <p onClick={() => { setLanguage("german") }}>DE</p>
        <p> | </p>
        <p onClick={() => { setLanguage("spanish") }}>ES</p>
    </div>
</>}

    {language === "spanish" &&  <>
    <Link className="navbar-links" smooth to="#about-me-title-home-page">Sobre mí</Link>
  <Link className="navbar-links"smooth to="#Projects-homePage">Proyectos</Link>
  <Link className="navbar-links"smooth to="#studies-homePage">Estudios</Link>
  <Link className="navbar-links"smooth to="#work-experience-homePage">Experiencia laboral</Link>
  <Link className="navbar-links"smooth to="#languages-homepage">Idiomas</Link>
  <Link  className="navbar-links"to="mailto:eljorgecenteno@gmail.com">Contacto</Link>
  <div id="language-selection-navbar">
  <p onClick={()=>{setLanguage("english")}}>
  EN
</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("german")}}>DE</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("spanish")}}>ES</p>
  </div>
  
    </>} 
  
    </div>
  
   
)}
export default Navbar;
