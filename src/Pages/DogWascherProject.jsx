
import DogWascher1 from "../Images/Dog-Wascher1.png"
import DogWascher2 from "../Images/Dog-Wascher2.png"
import DogWascher3 from "../Images/Dog-Wascher3.png"
import github from"../Images/icono-github.jpg"
import play from "../Images/play-button.png"
import "./DogWascherProject.css"
import ProjectNavbar from "../Components/ProjectNavbar"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { themeContext } from '../Context/Context';
function HomePage() {
  const {language, screenWidth} = useContext(themeContext)
  return (
    <div id="main-box">
      <ProjectNavbar></ProjectNavbar>
      {screenWidth > 900 && <>{language === "english" && <div><div id="head-homepage">
  
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">
  <h1>Ultimate Dog Washer 3000</h1>
  <div id="h4-homepage"><h4>Technologies: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>The project</h2>
<p>This project was created during the Ironhack Bootcamp. Was the first project we realised and we had 1 week for developing it. The idea was to create a game using the DOM manipulation, Vanilla 
  Javascript and CSS. I took the idea of a real life game and wanted to apply with the knoledge we had. 
</p>
<ul>Interesting features:
  <li>Randomisation Logic.</li>
  <li>Conditional logic.</li>
  <li>Use of DOM manipulation.</li>
  <li>Use of git, Github and online deployment.</li>
  
</ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Back to homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/WTF">Check other project▸</Link>

</div>

  </div>  
</div>} 

{language === "german" && <div><div id="head-homepage">
  
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">
  <h1>Ultimate Dog Wascher 3000</h1>
  <div id="h4-homepage"><h4>Technologien: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>Das Projekt</h2>
<p>Dieses Projekt wurde während des Ironhack Bootcamps erstellt. Es war unser erstes Projekt und wir hatten eine Woche Zeit für die Entwicklung. Die Idee war es, ein Spiel mit Hilfe von DOM-Manipulation, Vanilla JavaScript und CSS zu erstellen. Ich habe mich von einem realen Spiel inspirieren lassen und wollte das Gelernte anwenden.</p>
  <ul>Interessante Features:
    <li>Zufallslogik.</li>
    <li>Bedingungslogik.</li>
    <li>Verwendung von DOM-Manipulation.</li>
    <li>Nutzung von Git, GitHub und Online-Bereitstellung.</li>
  </ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Zurück zur Homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/WTF">Weitere Projekte▸</Link>

</div>

  </div>  
</div>}   
{language === "spanish" && <div><div id="head-homepage">
  
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">
  <h1>Ultimate Dog Wascher 3000</h1>
  <div id="h4-homepage"><h4>Tecnologías: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>El proyecto</h2>
<p>Este proyecto fue creado durante el Bootcamp de Ironhack. Fue nuestro primer proyecto y tuvimos una semana para desarrollarlo. La idea era crear un juego utilizando manipulación del DOM, JavaScript Vanilla y CSS. Me inspiré en un juego de la vida real y quería aplicar lo aprendido.</p>
  <ul>Características interesantes:
    <li>Lógica de aleatorización.</li>
    <li>Lógica condicional.</li>
    <li>Uso de manipulación del DOM.</li>
    <li>Uso de Git, GitHub y despliegue en línea.</li>
  </ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Volver a página principal</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/WTF">Otro proyecto▸</Link>

</div>

  </div>  
</div>}        </>}
{screenWidth < 900 && <>{language === "english" && <div><div id="head-homepage">
  <h1>Ultimate Dog Washer 3000</h1>
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">

  <div id="h4-homepage"><h4>Technologies: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container" >
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>The project</h2>
<p>This project was created during the Ironhack Bootcamp. Was the first project we realised and we had 1 week for developing it. The idea was to create a game using the DOM manipulation, Vanilla 
  Javascript and CSS. I took the idea of a real life game and wanted to apply with the knoledge we had. 
</p>
<ul>Interesting features:
  <li>Randomisation Logic.</li>
  <li>Conditional logic.</li>
  <li>Use of DOM manipulation.</li>
  <li>Use of git, Github and online deployment.</li>
  
</ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Back to homepage</Link>
<Link id="check-other-project"style={{ textDecoration: 'none', color: "black"}}to="/WTF">Check other project▸</Link>

</div>

  </div>  
</div>} 

{language === "german" && <div><div id="head-homepage">
  
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">
  <h1>Ultimate Dog Wascher 3000</h1>
  <div id="h4-homepage"><h4>Technologien: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>Das Projekt</h2>
<p>Dieses Projekt wurde während des Ironhack Bootcamps erstellt. Es war unser erstes Projekt und wir hatten eine Woche Zeit für die Entwicklung. Die Idee war es, ein Spiel mit Hilfe von DOM-Manipulation, Vanilla JavaScript und CSS zu erstellen. Ich habe mich von einem realen Spiel inspirieren lassen und wollte das Gelernte anwenden.</p>
  <ul>Interessante Features:
    <li>Zufallslogik.</li>
    <li>Bedingungslogik.</li>
    <li>Verwendung von DOM-Manipulation.</li>
    <li>Nutzung von Git, GitHub und Online-Bereitstellung.</li>
  </ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Zurück zur Homepage</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/WTF">Weitere Projekte▸</Link>

</div>

  </div>  
</div>}   
{language === "spanish" && <div><div id="head-homepage">
  
  <img src={DogWascher1} alt="Jorge" id="title-main-image"/>
<div id="head-text-homepage">
  <h1>Ultimate Dog Wascher 3000</h1>
  <div id="h4-homepage"><h4>Tecnologías: JavaScript, HTML, CSS and DOM manipulation</h4></div>
  <div id="icons-homepage-container">
   
    <a href="https://github.com/eljorgecenteno/Dog-wascher"><img className="icons-project-page" src={github} alt="icon github" /></a>
    <a href="https://eljorgecenteno.github.io/Dog-wascher/"><img id="play-icon-project-page"className="icons-project-page" src={play} alt="icon github" /></a>
  </div>
  </div>
  </div>
<div id="project-page-info-container">
<h2>El proyecto</h2>
<p>Este proyecto fue creado durante el Bootcamp de Ironhack. Fue nuestro primer proyecto y tuvimos una semana para desarrollarlo. La idea era crear un juego utilizando manipulación del DOM, JavaScript Vanilla y CSS. Me inspiré en un juego de la vida real y quería aplicar lo aprendido.</p>
  <ul>Características interesantes:
    <li>Lógica de aleatorización.</li>
    <li>Lógica condicional.</li>
    <li>Uso de manipulación del DOM.</li>
    <li>Uso de Git, GitHub y despliegue en línea.</li>
  </ul>
<div id="project-img-container">
<img src={DogWascher3} alt="" />
<img src={DogWascher1} alt="" />
<img src={DogWascher2} alt="" />
</div>
<div id="links-project-page">
<Link style={{ textDecoration: 'none', color: "black"}}to="/">◂Volver a página principal</Link>
<Link style={{ textDecoration: 'none', color: "black"}}to="/WTF">Otro proyecto▸</Link>

</div>

  </div>  
</div>}    </>} 
       

    </div>
   
)}
export default HomePage;
