
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css"
import { useContext } from 'react';
import { themeContext } from '../Context/Context';
import menuIcon from "../Images/menu-icon.png"
import { useState } from 'react';
function Navbar() {
const [menuDisplay,setMenudisplay] = useState(false)
const {language, setLanguage, screenWidth} = useContext(themeContext)
  return (
  
    <div id="main-box-navbar">
   {screenWidth > 900 &&  <>{language === "english" &&  <>
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
  
    </>} </> }   
  
  {screenWidth < 900 &&  <>{language === "english" &&  <>

  <div id="language-selection-navbar">
  <p onClick={()=>{setLanguage("english")}}>
  EN
</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("german")}}>DE</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("spanish")}}>ES</p>
  </div>
  
  <img onClick={menuDisplay === false? ()=>{setMenudisplay(true)} : ()=>{setMenudisplay(false)}} id ="menu-icon-navbar"src={menuIcon} alt="Menu icon" />
 {menuDisplay && <div id="navbar-links-mobile-box">
 
  <Link className="navbar-links-mobile" smooth to="#about-me-title-home-page">-About me</Link>
  <Link className="navbar-links-mobile"smooth to="#Projects-homePage">-Projects</Link>
  <Link className="navbar-links-mobile"smooth to="#studies-homePage">-Studies</Link>
  <Link className="navbar-links-mobile"smooth to="#work-experience-homePage">-Work experience</Link>
  <Link className="navbar-links-mobile"smooth to="#languages-homepage">-Languages</Link>
  <Link  className="navbar-links-mobile"to="mailto:eljorgecenteno@gmail.com">-Contact</Link>
 </div>}
    </>}    
    {language === "german" &&  <>
      <div id="language-selection-navbar">
  <p onClick={()=>{setLanguage("english")}}>
  EN
</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("german")}}>DE</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("spanish")}}>ES</p>
  </div>
  
  <img onClick={menuDisplay === false? ()=>{setMenudisplay(true)} : ()=>{setMenudisplay(false)}} id ="menu-icon-navbar"src={menuIcon} alt="Menu icon" />
 {menuDisplay && <div id="navbar-links-mobile-box">
 
  <Link className="navbar-links-mobile" smooth to="#about-me-title-home-page">-Über mich</Link>
  <Link className="navbar-links-mobile"smooth to="#Projects-homePage">-Projekte</Link>
  <Link className="navbar-links-mobile"smooth to="#studies-homePage">-Studien</Link>
  <Link className="navbar-links-mobile"smooth to="#work-experience-homePage">-Berufergahrung</Link>
  <Link className="navbar-links-mobile"smooth to="#languages-homepage">-Sprachen</Link>
  <Link  className="navbar-links-mobile"to="mailto:eljorgecenteno@gmail.com">-Kontakt</Link>
 </div>}
</>}

    {language === "spanish" &&  <>
      <div id="language-selection-navbar">
  <p onClick={()=>{setLanguage("english")}}>
  EN
</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("german")}}>DE</p>
  <p >| </p>
  <p onClick={()=>{setLanguage("spanish")}}>ES</p>
  </div>
  
  <img onClick={menuDisplay === false? ()=>{setMenudisplay(true)} : ()=>{setMenudisplay(false)}} id ="menu-icon-navbar"src={menuIcon} alt="Menu icon" />
 {menuDisplay && <div id="navbar-links-mobile-box">
 
  <Link className="navbar-links-mobile" smooth to="#about-me-title-home-page">-Sobre mí</Link>
  <Link className="navbar-links-mobile"smooth to="#Projects-homePage">-Proyectos</Link>
  <Link className="navbar-links-mobile"smooth to="#studies-homePage">-Estudios</Link>
  <Link className="navbar-links-mobile"smooth to="#work-experience-homePage">-Experiencia laboral</Link>
  <Link className="navbar-links-mobile"smooth to="#languages-homepage">-Idiomas</Link>
  <Link  className="navbar-links-mobile"to="mailto:eljorgecenteno@gmail.com">-Contacto</Link>
 </div>}
  
    </>} </>}

    </div>
  
   
)}
export default Navbar;
