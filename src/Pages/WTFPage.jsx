
import github from"../Images/icono-github.jpg"
import play from "../Images/play-button.png"
import "./WTFPage.css"
import ProjectNavbar from "../Components/ProjectNavbar"
import { Link } from "react-router-dom"
import WTF1 from "../Images/WTF-allrecipes.png"
import WTF2 from "../Images/WTF-homepage.png"
import WTF3 from "../Images/WTF-onerecipe.png"
import { useContext } from 'react';
import { themeContext } from '../Context/Context';
function WTFPage() {
  const {language, screenWidth} = useContext(themeContext)
  return (
    <div id="main-box">
      {screenWidth > 900 && <> {language === "german" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
  
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
  <h1>What the Fridge</h1>
  <div id="h4-homepage"><h4>Technologies: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>Das projekt</h2>
<p>What The Fridge war das zweite Projekt, das wir während des Ironhack Bootcamps entwickelt haben. Wir haben das Projekt in Teams von 2 Personen umgesetzt, indem wir Git verwendet und in parallelen Branches gearbeitet haben. Dieses Projekt wurde größtenteils im Frontend entwickelt, wobei auch das Backend genutzt wurde, allerdings mit einem begrenzten JSON-Server.
    <br></br><br></br>
    La Idee der Seite ist es, dem Benutzer eine Rezeptseite anzubieten, die auch dabei hilft, ein Rezept für diejenigen zu finden, die nicht wissen, was sie essen möchten, indem sie nach verschiedenen Parametern wie Zutaten, Tags oder einfach einem zufälligen Rezept suchen. Es gibt auch eine versteckte Seite nur für Administratoren, die das gesamte CRUD für die Seite ermöglicht.
    <br /><br />
    (Aufgrund der Plattform, auf der sie bereitgestellt wird, kann die Ladezeit länger als üblich sein).
</p>
<ul>Interessante Funktionen:
  <li>Vollständige CRUD-Implementierung mit JSON-Backend.</li>
  <li>Fortgeschrittene Filterlogik (Zutaten, Tags, Name).</li>
  <li>Responsive FAQ-Seite entwickelt unter Verwendung von React-States.</li>
  <li>Verwendung von ReactJS.</li>
  <li>Nutzung von Git, GitHub, Branches und Online-Bereitstellung.</li>
</ul>

<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Zurück zur Homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Weitere Projekte▸</Link>

</div>

  </div>  
</div>} 
     
{language === "english" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
  
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
  <h1>What the Fridge</h1>
  <div id="h4-homepage"><h4>Technologies: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>The project</h2>
<p>What The Fridge was the second project we realised during the Ironhack bootcamp. We developed the project in teams of 2, implementing git and working in parallel branches. 
    This projet was developed mostly in the Fronted , using also the Backend but a limited JSON server.
    <br></br><br></br>
    The idea of the page is to offer the user a recipes page that also helps to find a recipe for those people who don´t know what they want to eat, by searching by different parameters 
    as ingredients, tags or just getting a random recipe.
    There is also a hide page just for admins, giving the whole CRUD for the page.
    <br /><br />
    (Due to the plattform where it is deloyed, loading time can be longer than usual)
</p>
<ul>Interesting features:
  <li>Full CRUD implementation with JSON backend.</li>
  <li>Advanced filtering  logic (ingredients, tags, name).</li>
  <li>Responsive FAQ page developed using React states.</li>
  <li>Use of ReactJS.</li>
  <li>Use of git, Github, branches and online deployment.</li>
  
</ul>
<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Back to homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Check other project▸</Link>

</div>

  </div>  
</div>} 

{language === "spanish" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
  
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
  <h1>What the Fridge</h1>
  <div id="h4-homepage"><h4> Tecnologías: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>El proyecto</h2>
<p>"What The Fridge" fue el segundo proyecto que realizamos durante el bootcamp de Ironhack. Desarrollamos el proyecto en equipos de 2 personas, implementando Git y trabajando en ramas paralelas.
Este proyecto fue desarrollado principalmente en el frontend, utilizando también el backend con un servidor JSON limitado.
<br /><br />
La idea de la página es ofrecer al usuario una página de recetas que también ayude a encontrar una receta para aquellos que no saben qué quieren comer, mediante la búsqueda de diferentes parámetros como ingredientes, etiquetas o simplemente obteniendo una receta aleatoria.
También existe una página oculta solo para administradores, que permite el CRUD completo para la página.
<br /><br />
(Debido a la plataforma donde está desplegado, el tiempo de carga puede ser más largo de lo habitual).
</p>
<ul>Características interesantes:
  <li>Implementación completa de CRUD con backend JSON.</li>
  <li>Lógica avanzada de filtrado (ingredientes, etiquetas, nombre).</li>
  <li>Página de preguntas frecuentes (FAQ) responsive desarrollada usando estados de React.</li>
  <li>Uso de ReactJS.</li>
  <li>Uso de git, GitHub, ramas y despliegue en línea.</li>
</ul>
<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Volver a la página pricipal</Link>
<Link  id="check-other-project" style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Otro proyecto▸</Link>

</div>

  </div>  
</div>} </>} 
{screenWidth < 900 && <> {language === "german" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
      <h1>What the Fridge</h1>
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">

  <div id="h4-homepage"><h4>Technologies: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>Das projekt</h2>
<p>What The Fridge war das zweite Projekt, das wir während des Ironhack Bootcamps entwickelt haben. Wir haben das Projekt in Teams von 2 Personen umgesetzt, indem wir Git verwendet und in parallelen Branches gearbeitet haben. Dieses Projekt wurde größtenteils im Frontend entwickelt, wobei auch das Backend genutzt wurde, allerdings mit einem begrenzten JSON-Server.
    <br></br><br></br>
    La Idee der Seite ist es, dem Benutzer eine Rezeptseite anzubieten, die auch dabei hilft, ein Rezept für diejenigen zu finden, die nicht wissen, was sie essen möchten, indem sie nach verschiedenen Parametern wie Zutaten, Tags oder einfach einem zufälligen Rezept suchen. Es gibt auch eine versteckte Seite nur für Administratoren, die das gesamte CRUD für die Seite ermöglicht.
    <br /><br />
    (Aufgrund der Plattform, auf der sie bereitgestellt wird, kann die Ladezeit länger als üblich sein).
</p>
<ul>Interessante Funktionen:
  <li>Vollständige CRUD-Implementierung mit JSON-Backend.</li>
  <li>Fortgeschrittene Filterlogik (Zutaten, Tags, Name).</li>
  <li>Responsive FAQ-Seite entwickelt unter Verwendung von React-States.</li>
  <li>Verwendung von ReactJS.</li>
  <li>Nutzung von Git, GitHub, Branches und Online-Bereitstellung.</li>
</ul>

<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Zurück zur Homepage</Link>
<Link  id="check-other-project" style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Weitere Projekte▸</Link>

</div>

  </div>  
</div>} 
     
{language === "english" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
      <h1>What the Fridge</h1>
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
 
  <div id="h4-homepage"><h4>Technologies: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>The project</h2>
<p>What The Fridge was the second project we realised during the Ironhack bootcamp. We developed the project in teams of 2, implementing git and working in parallel branches. 
    This projet was developed mostly in the Fronted , using also the Backend but a limited JSON server.
    <br></br><br></br>
    The idea of the page is to offer the user a recipes page that also helps to find a recipe for those people who don´t know what they want to eat, by searching by different parameters 
    as ingredients, tags or just getting a random recipe.
    There is also a hide page just for admins, giving the whole CRUD for the page.
    <br /><br />
    (Due to the plattform where it is deloyed, loading time can be longer than usual)
</p>
<ul>Interesting features:
  <li>Full CRUD implementation with JSON backend.</li>
  <li>Advanced filtering  logic (ingredients, tags, name).</li>
  <li>Responsive FAQ page developed using React states.</li>
  <li>Use of ReactJS.</li>
  <li>Use of git, Github, branches and online deployment.</li>
  
</ul>
<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Back to homepage</Link>
<Link id="check-other-project"style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Check other project▸</Link>

</div>

  </div>  
</div>} 

{language === "spanish" && <div> <ProjectNavbar></ProjectNavbar>
      <div id="head-homepage">
  
  <img src={WTF2} alt="Jorge" id="title-main-image-WTF"/>
<div id="head-text-homepage">
  <h1>What the Fridge</h1>
  <div id="h4-homepage"><h4> Tecnologías: ReactJS, CSS, TypeScript, Json Server</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/nenuphars/Recipes-frontend"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://whatthefridge.netlify.app/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>El proyecto</h2>
<p>"What The Fridge" fue el segundo proyecto que realizamos durante el bootcamp de Ironhack. Desarrollamos el proyecto en equipos de 2 personas, implementando Git y trabajando en ramas paralelas.
Este proyecto fue desarrollado principalmente en el frontend, utilizando también el backend con un servidor JSON limitado.
<br /><br />
La idea de la página es ofrecer al usuario una página de recetas que también ayude a encontrar una receta para aquellos que no saben qué quieren comer, mediante la búsqueda de diferentes parámetros como ingredientes, etiquetas o simplemente obteniendo una receta aleatoria.
También existe una página oculta solo para administradores, que permite el CRUD completo para la página.
<br /><br />
(Debido a la plataforma donde está desplegado, el tiempo de carga puede ser más largo de lo habitual).
</p>
<ul>Características interesantes:
  <li>Implementación completa de CRUD con backend JSON.</li>
  <li>Lógica avanzada de filtrado (ingredientes, etiquetas, nombre).</li>
  <li>Página de preguntas frecuentes (FAQ) responsive desarrollada usando estados de React.</li>
  <li>Uso de ReactJS.</li>
  <li>Uso de git, GitHub, ramas y despliegue en línea.</li>
</ul>
<div id="project-img-container">
<img src={WTF1} alt="" />
<img src={WTF2} alt="" />
<img src={WTF3} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Volver a la página pricipal</Link>
<Link  id="check-other-project" style={{ textDecoration: 'none', color: "black"}} to="/friends"s>Otro proyecto▸</Link>

</div>

  </div>  
</div>} </>}     
    </div>
   
)}
export default WTFPage;
