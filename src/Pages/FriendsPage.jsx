
import github from"../Images/icono-github.jpg"
import play from "../Images/play-button.png"
import "./WTFPage.css"
import ProjectNavbar from "../Components/ProjectNavbar"
import { Link } from "react-router-dom"
import friends from "../Images/Friends.png"
import { useContext } from 'react';
import { themeContext } from '../Context/Context';
function FriendsPage() {
  const {language} = useContext(themeContext)
  return (
    <div id="main-box">
       {language === "english" &&  <div>  <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
 
  
  <img src={friends} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
  <h1>Friends</h1>
  <div id="h4-homepage"><h4>Technologies: ReactJS, MongoDB, ExpressJS, NodeJS</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Friends-Frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://meetfriendss.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>The project</h2>
<p>FRIENDS was the last projetc realised during the Ironhack bootcamp. It is a full crowd project that uses the full MERN stack and offers the whole CRUD operations, giving users the possibility 
to create accounts and interact with the whole app and with other users. It has also an a admin functionallity wich gives the possibility to moderate the accounts and the events published.
    <br></br><br></br>
    The goal of the web is to connect people who are in a close area. For this, the user has the possibility to define their ubication and interest and 
    search and filter user/events through this variables.
</p>
<ul>Interesting features:
  <li>Full CRUD implementation.</li>
  <li>Use of the whole MERN Stack.</li>
  <li>Security using bcrypt and hashing for passwords</li>
  <li>Special admin functionalities</li>
  <li>Advanced filtering  logic (interest, cities...).</li>
  <li>Responsive FAQ page developed using React states.</li>
  <li>Use of git, Github, branches and online deployment.</li>
  
</ul>
<div id="project-img-container">
<img src={friends} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Back to homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/dog-washer">Check other project▸</Link>

</div>

  </div>   </div>} 
  {language === "german" && <div>
  <ProjectNavbar></ProjectNavbar>
  <div id="head-homepage">
    <img src={friends} alt="Jorge" id="title-main-image-WTF"/>
    <div id="head-text-homepage">
      <h1>Friends</h1>
      <div id="h4-homepage"><h4>Technologien: ReactJS, MongoDB, ExpressJS, NodeJS</h4></div>
      <div id="icons-homepage-container">
        <a href="https://github.com/eljorgecenteno/Friends-Frontend"><img className="icons-project-page" src={github} alt="Icon GitHub" /></a>
        <a href="https://meetfriendss.netlify.app/"><img id="play-icon-project-page" className="icons-project-page" src={play} alt="Icon GitHub" /></a>
      </div>
    </div>
  </div>
  <div id="project-page-info-container">
    <h2>Das Projekt</h2>
    <p>FRIENDS war das letzte Projekt, das während des Ironhack Bootcamps realisiert wurde. Es ist ein vollständiges Projekt, das den gesamten MERN-Stack verwendet und alle CRUD-Operationen bietet. Benutzer haben die Möglichkeit, Konten zu erstellen und mit der gesamten App sowie mit anderen Benutzern zu interagieren. Es gibt auch eine Admin-Funktionalität, die es ermöglicht, Konten und veröffentlichte Veranstaltungen zu moderieren.
      <br /><br />
      Das Ziel der Website ist es, Menschen in der Nähe zu verbinden. Dafür hat der Benutzer die Möglichkeit, seinen Standort und seine Interessen zu definieren und nach Benutzern/Veranstaltungen anhand dieser Variablen zu suchen und zu filtern.
    </p>
    <ul>Interessante Funktionen:
      <li>Vollständige CRUD-Implementierung.</li>
      <li>Nutzung des gesamten MERN-Stacks.</li>
      <li>Sicherheit durch bcrypt und Hashing für Passwörter.</li>
      <li>Besondere Admin-Funktionalitäten.</li>
      <li>Fortgeschrittene Filterlogik (Interessen, Städte...).</li>
      <li>Responsive FAQ-Seite entwickelt unter Verwendung von React-States.</li>
      <li>Nutzung von Git, GitHub, Branches und Online-Bereitstellung.</li>
    </ul>
    <div id="project-img-container">
      <img src={friends} alt="" />
    </div>
    <div id="links-project-page">
      <Link style={{ textDecoration: 'none', color: "black"}} to="/">◂ Zurück zur Homepage</Link>
      <Link style={{ textDecoration: 'none', color: "black"}} to="/dog-washer">Weitere Projekte ▸</Link>
    </div>
  </div>
</div>}


{language === "spanish" && <div>
  <ProjectNavbar></ProjectNavbar>
  <div id="head-homepage">
    <img src={friends} alt="Jorge" id="title-main-image-WTF"/>
    <div id="head-text-homepage">
      <h1>Friends</h1>
      <div id="h4-homepage"><h4>Tecnologías: ReactJS, MongoDB, ExpressJS, NodeJS</h4></div>
      <div id="icons-homepage-container">
        <a href="https://github.com/eljorgecenteno/Friends-Frontend"><img className="icons-project-page" src={github} alt="Ícono GitHub" /></a>
        <a href="https://meetfriendss.netlify.app/"><img id="play-icon-project-page" className="icons-project-page" src={play} alt="Ícono GitHub" /></a>
      </div>
    </div>
  </div>
  <div id="project-page-info-container">
    <h2>El proyecto</h2>
    <p>FRIENDS fue el último proyecto realizado durante el bootcamp de Ironhack. Es un proyecto completo que utiliza todo el stack MERN y ofrece operaciones CRUD completas, permitiendo a los usuarios crear cuentas e interactuar con toda la aplicación y otros usuarios. También cuenta con una funcionalidad de administrador que permite moderar cuentas y eventos publicados.
      <br /><br />
      El objetivo del sitio web es conectar a las personas que están en áreas cercanas. Para ello, el usuario tiene la posibilidad de definir su ubicación e intereses y buscar y filtrar usuarios/eventos utilizando estas variables.
    </p>
    <ul>Características interesantes:
      <li>Implementación completa de CRUD.</li>
      <li>Uso completo del stack MERN.</li>
      <li>Seguridad mediante bcrypt y hashing para contraseñas.</li>
      <li>Funcionalidades especiales de administrador.</li>
      <li>Lógica avanzada de filtrado (intereses, ciudades...).</li>
      <li>Página de preguntas frecuentes (FAQ) responsive desarrollada utilizando estados de React.</li>
      <li>Uso de git, GitHub, ramas y despliegue en línea.</li>
    </ul>
    <div id="project-img-container">
      <img src={friends} alt="" />
    </div>
    <div id="links-project-page">
      <Link style={{ textDecoration: 'none', color: "black"}} to="/">◂ Volver a la página de inicio</Link>
      <Link id="check-other-project" style={{ textDecoration: 'none', color: "black"}} to="/dog-washer">Ver otro proyecto ▸</Link>
    </div>
  </div>
</div>}

    </div>
   
)}
export default FriendsPage;
