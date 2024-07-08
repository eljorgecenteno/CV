import JorgeImage from "../Images/Jorge.jpg";
import IronhackCertificate from "../Images/Certificate_Ironhack.png";
import DogWascher1 from "../Images/Dog-Wascher1.png";
import WTF1 from "../Images/WTF-homepage.png";
import Friends from "../Images/Friends.png";
import finalThesis from "../Images/final-thesis.png";
import email from "../Images/icono-email.jpg";
import linkedin from "../Images/icono-linkedin.jpg";
import github from "../Images/icono-github.jpg";
import "./HomePage.css";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from 'react';
import { themeContext } from '../Context/Context';

function HomePage() {
  const navigate = useNavigate();
  const [studies, setStudies] = useState(0);
  const {language} = useContext(themeContext)
  const handleButtonClick = () => {
    navigate("/dog-washer");
  };
  const WTFRedirect = () => {
    navigate("/WTF");
  };
  const FriendsRedirect = () => {
    navigate("/friends");
  };
  return (
    <div id="main-box">
      <Navbar></Navbar>
      <div id="head-homepage">
        <img src={JorgeImage} alt="Jorge" id="jorge-main-image" />
        <div id="head-text-homepage">
          <h1>Jorge Centeno Mesa</h1>
          <div id="h4-homepage">
            {language === "english" && <h4>
              Full Stack web developer with university background in health
              sciences.
            </h4> }
            {language === "german" && <h4>
              Full-Stack-Webentwickler mit Universitätshintergrund in Gesundheitswissenschaften
              Wissenschaften.
            </h4> }
            {language === "spanish" && <h4>
              Desarrollador Full-Stack con background universitario en ciencias de la salud
            </h4> }
          </div>
          <div id="icons-homepage-container">
            <a href="mailto:eljorgecenteno@gmail.com">
              <img
                className="icons-homepage"
                id="email-icon-homepage"
                src={email}
                alt="icon email"
              />
            </a>
            <a href="https://www.linkedin.com/in/jorge-centeno-mesa-4b8868183/">
              <img
                className="icons-homepage"
                src={linkedin}
                alt="icon linkedin"
              />
            </a>
            <a href="https://github.com/eljorgecenteno/">
              <img className="icons-homepage" src={github} alt="icon github" />
            </a>
          </div>
        </div>
      </div>

      <div id="about-me-homepage">
        {language === "english" && <div><h1 className="title-homepage" id="about-me-title-home-page">
          About me
        </h1>
        <p id="about-me-text-home-page">
          Originally from Sevilla, Spain, and currently based in Berlin,
          Germany, I consider myself an eclectic and versatile person. My range
          of interests is very broad, spanning from programming to music, sport,
          science and philosophy. This curiosity and hunger for knowledge has
          led me to live in different cities and countries around Europe (UK,
          Malta, Germany) allowing me to learn and perfect different language
          skills, as well to envolve myself into a more open minded person, getting used
          to work and live in multicultural enviroments.
          <br></br>
          <br></br>
          Due to mi interest in logical thinking and mathemathics together with
          a wish of creating, I decided to focus my career into the tech world,
          learling the necessary tools to become a web developer adhering to
          best practices and working daily to master them.
        </p></div>}
        {language === "german" && <div><h1 className="title-homepage" id="about-me-title-home-page">
          Über mich
        </h1>
        <p id="about-me-text-home-page">
          Ursprünglich aus Sevilla, Spanien, und derzeit in Berlin,
          Deutschland, ansässig, betrachte ich mich als eine vielseitige und
          vielseitige Person. Meine Interessen sind sehr breit gefächert und
          reichen von Programmierung über Musik, Sport, Wissenschaft bis hin zu
          Philosophie. Diese Neugier und Wissensdurst haben mich dazu gebracht,
          in verschiedenen Städten und Ländern in Europa zu leben (UK, Malta,
          Deutschland), wodurch ich verschiedene Sprachkenntnisse erlernen und
          perfektionieren konnte. Außerdem habe ich mich zu einer offeneren
          Person entwickelt und mich daran gewöhnt, in multikulturellen
          Umgebungen zu arbeiten und zu leben.
          <br></br>
          <br></br>
          Aufgrund meines Interesses an logischem Denken und Mathematik sowie
          dem Wunsch zu erschaffen, habe ich mich entschieden, meine Karriere in
          die Technologiewelt zu fokussieren. Ich lerne die notwendigen Werkzeuge,
          um ein Webentwickler zu werden, der sich an bewährte Praktiken hält,
          und arbeite täglich daran, diese zu meistern.
</p></div>}
{language === "spanish" && <div><h1 className="title-homepage" id="about-me-title-home-page">
          Sobre mí
        </h1>
        <p id="about-me-text-home-page">
          Originario de Sevilla, España, y actualmente viviendo en Berlín,
          Alemania, me considero una persona ecléctica y versátil. Mis intereses
          son muy variados, abarcando desde la programación hasta la música, el
          deporte, la ciencia y la filosofía. Esta curiosidad y hambre de
          conocimiento me han llevado a vivir en diferentes ciudades y países de
          Europa (Reino Unido, Malta, Alemania), lo que me ha permitido aprender
          y perfeccionar diferentes habilidades lingüísticas. Además, me he
          convertido en una persona más abierta y me he acostumbrado a trabajar y
          vivir en entornos multiculturales.
          <br></br>
          <br></br>
          Debido a mi interés por el pensamiento lógico y las matemáticas, junto
          con el deseo de crear, decidí enfocar mi carrera en el mundo de la
          tecnología, aprendiendo las herramientas necesarias para
          convertirme en desarrollador web, adhiriéndome a las mejores prácticas y
          trabajando diariamente para dominarlas.
</p></div>}
      </div>
      <div id="projects-container-homepage">
        {language === "english" && <div>
          <h1 className="title-homepage" id="Projects-homePage">
          Projects
        </h1>
        <div id="proyects-boxes-container">
          <div className="each-box">
            <h3>Dog washer</h3>
            <img className="project-image" src={DogWascher1} alt="" />
            <p>Vanilla JS, CSS, HTML, DOM manipulation.</p>
            <button onClick={handleButtonClick}>See more</button>
          </div>

          <div className="each-box">
            <h3>What the Fridge</h3>
            <img className="project-image" src={WTF1} alt="Main Page" />
            <p>ReactJS, Typescript, CSS, Json server.</p>
            <button onClick={WTFRedirect}>See more</button>
          </div>

          <div className="each-box">
            <h3>Friends</h3>
            <img className="project-image" src={Friends} alt="" />
            <p>ReactJS, MongoDB, ExpressJS, NodeJS.</p>
            <button onClick={FriendsRedirect}>See more</button>
          </div>
        </div>

        <div id="personal-web-homepage">
          <p>
            This web is also a self-developed proyect using ReactJS and CSS.
          </p>
        </div>
          </div>} 

          {language === "german" && <div>
          <h1 className="title-homepage" id="Projects-homePage">
          Projekte
        </h1>
        <div id="proyects-boxes-container">
          <div className="each-box">
            <h3>Dog wascher</h3>
            <img className="project-image" src={DogWascher1} alt="" />
            <p>Vanilla JS, CSS, HTML, DOM manipulation.</p>
            <button onClick={handleButtonClick}>Mehr anzaigen</button>
          </div>

          <div className="each-box">
            <h3>What the Fridge</h3>
            <img className="project-image" src={WTF1} alt="Main Page" />
            <p>ReactJS, Typescript, CSS, Json server.</p>
            <button onClick={WTFRedirect}>Mehr anzaigen</button>
          </div>

          <div className="each-box">
            <h3>Friends</h3>
            <img className="project-image" src={Friends} alt="" />
            <p>ReactJS, MongoDB, ExpressJS, NodeJS.</p>
            <button onClick={FriendsRedirect}>Mehr anzaigen</button>
          </div>
        </div>

        <div id="personal-web-homepage">
          <p>
          Auch dieses Web ist ein selbst entwickeltes Projekt mit ReactJS und CSS.
          </p>
        </div>
          </div>} 
          {language === "spanish" && <div>
          <h1 className="title-homepage" id="Projects-homePage">
          Proyectos
        </h1>
        <div id="proyects-boxes-container">
          <div className="each-box">
            <h3>Dog wascher</h3>
            <img className="project-image" src={DogWascher1} alt="" />
            <p>Vanilla JS, CSS, HTML, DOM manipulation.</p>
            <button onClick={handleButtonClick}>Ver más</button>
          </div>

          <div className="each-box">
            <h3>What the Fridge</h3>
            <img className="project-image" src={WTF1} alt="Main Page" />
            <p>ReactJS, Typescript, CSS, Json server.</p>
            <button onClick={WTFRedirect}>Ver más</button>
          </div>

          <div className="each-box">
            <h3>Friends</h3>
            <img className="project-image" src={Friends} alt="" />
            <p>ReactJS, MongoDB, ExpressJS, NodeJS.</p>
            <button onClick={FriendsRedirect}>Ver más</button>
          </div>
        </div>

        <div id="personal-web-homepage">
          <p>
          Esta web también es un proyecto propio desarrollado mediante ReactJS y CSS. 
          </p>
        </div>
          </div>} 
      </div>
      <div id="studies-box">
        {language === "english" && <div><h1 className="title-homepage" id="studies-homePage">
          Studies
        </h1>
        <div className="eachStudy">
          <div
            id="first-study"
            onClick={() => (studies === 1 ? setStudies(0) : setStudies(1))}
          >
            {studies === 1 ? (
              <h2>Software developer formation▾</h2>
            ) : (
              <h2>Software developer formation ▸</h2>
            )}
          </div>
          {studies === 1 && (
            <div>
              <p>
                Always eager to learn independently, I developed my foundational
                knowledge of JavaScript, CSS, and HTML from 2019 to 2023 by
                completing courses offered on platforms like FreeCodeCamp and
                Codecademy.
              </p>
              <p>
                At the end of 2023, I decided to focus my career on software
                development and joined the six-month bootcamp offered by
                Ironhack. This online bootcamp covered the entire application
                development process, from frontend to backend, using the MERN
                stack. During this time, I created my first projects. In May
                2024, I successfully completed the bootcamp, developing a
                full-stack application called FRIENDS. I received my Ironhack
                certificate upon completion.
              </p>
              <img
                style={{ marginLeft: "20px" }}
                id="ironhack-certificate"
                src={IronhackCertificate}
                alt="Ironhack Certificate"
              />

              <p>
                Currently, I continue to learn and deepen my understanding of
                various technologies, primarily based on the MERN stack. I am
                also open to work opportunities that align with my skills and
                expectations.
              </p>
            </div>
          )}
        </div>
        <div className="eachStudy">
          <div onClick={() => (studies === 2 ? setStudies(0) : setStudies(2))}>
            {studies === 2 ? (
              <h2>University studies▾</h2>
            ) : (
              <h2>University studies ▸</h2>
            )}
          </div>
          {studies === 2 && (
            <div>
              <p>
                I successfully completed my studies in Sports Science at Cadiz
                University (Spain) between 2017 and 2021, with a focus on
                physical activity and health. My graduate thesis was a review of
                the current scientific evidence on physical activity in
                individuals with arthrosis, comparing the benefits of exercise
                in and out of water.
              </p>

              <figure>
                <img
                  style={{ marginLeft: "20px" }}
                  id="final-thesis"
                  src={finalThesis}
                  alt="Map of the final research"
                />
                <figcaption style={{ margin: "20px" }}>
                  Conceptual map of my final thesis
                </figcaption>
              </figure>
            </div>
          )}
        </div>
        <div id="last-study" className="eachStudy">
          <div onClick={() => (studies === 3 ? setStudies(0) : setStudies(3))}>
            {studies === 3 ? <h2>Others ▾</h2> : <h2>Others ▸</h2>}
          </div>
          {studies === 3 && (
            <div>
              {" "}
              <p>
                Completed high school in Spain with a specialization in social
                sciences, equivalent to the Abitur in Germany.
              </p>
              <p>
                Upon arriving in Germany, I completed the Integration Course
                offered by the German government. This course ensures a B1 level
                in the German language and includes information about German
                society, including laws, history, and geography.
              </p>
            </div>
          )}
        </div></div>} 
        {language === "german" && <div><h1 className="title-homepage" id="studies-homePage">
          Studien
        </h1>
        <div className="eachStudy">
          <div
            id="first-study"
            onClick={() => (studies === 1 ? setStudies(0) : setStudies(1))}
          >
            {studies === 1 ? (
              <h2>Ausbildung zum Softwareentwickler▾</h2>
            ) : (
              <h2>Ausbildung zum Softwareentwickler ▸</h2>
            )}
          </div>
          {studies === 1 && (
            <div>
              <p>
                Immer lernbegierig und selbstständig, habe ich von 2019 bis 2023
                meine Grundkenntnisse in JavaScript, CSS und HTML durch
                Kurse auf Plattformen wie FreeCodeCamp und Codecademy erworben.
              </p>
              <p>
                Ende 2023 entschied ich mich, meine Karriere auf Softwareentwicklung
                zu konzentrieren, und nahm am sechsmonatigen Bootcamp von Ironhack
                teil. Dieses Online-Bootcamp deckte den gesamten
                Anwendungsentwicklungsprozess von Frontend bis Backend mit dem
                MERN-Stack ab. Während dieser Zeit habe ich meine ersten Projekte
                erstellt. Im Mai 2024 habe ich das Bootcamp erfolgreich abgeschlossen
                und eine Vollstack-Anwendung namens FRIENDS entwickelt. Nach
                Abschluss erhielt ich mein Ironhack-Zertifikat.
              </p>
              <img
                style={{ marginLeft: "20px" }}
                id="ironhack-certificate"
                src={IronhackCertificate}
                alt="Ironhack-Zertifikat"
              />

              <p>
                Derzeit lerne ich weiter und vertiefe mein Verständnis für
                verschiedene Technologien, hauptsächlich basierend auf dem MERN-Stack.
                Ich bin auch offen für Arbeitsmöglichkeiten, die meinen Fähigkeiten
                und Erwartungen entsprechen.
              </p>
            </div>
          )}
        </div>
        <div className="eachStudy">
          <div onClick={() => (studies === 2 ? setStudies(0) : setStudies(2))}>
            {studies === 2 ? (
              <h2>Universitätsstudien▾</h2>
            ) : (
              <h2>Universitätsstudien ▸</h2>
            )}
          </div>
          {studies === 2 && (
            <div>
              <p>
                Ich habe erfolgreich mein Studium der Sportwissenschaften an der
                Universität Cádiz (Spanien) von 2017 bis 2021 abgeschlossen,
                mit einem Fokus auf körperliche Aktivität und Gesundheit.
                Meine Abschlussarbeit war eine Überprüfung der aktuellen
                wissenschaftlichen Erkenntnisse zur körperlichen Aktivität bei
                Menschen mit Arthrose, wobei die Vorteile von Bewegung im und
                außerhalb des Wassers verglichen wurden.
              </p>

              <figure>
                <img
                  style={{ marginLeft: "20px" }}
                  id="final-thesis"
                  src={finalThesis}
                  alt="Konzeptkarte der Abschlussarbeit"
                />
                <figcaption style={{ margin: "20px" }}>
                  Konzeptkarte meiner Abschlussarbeit
                </figcaption>
              </figure>
            </div>
          )}
        </div>
        <div id="last-study" className="eachStudy">
          <div onClick={() => (studies === 3 ? setStudies(0) : setStudies(3))}>
            {studies === 3 ? <h2>Sonstiges ▾</h2> : <h2>Sonstiges ▸</h2>}
          </div>
          {studies === 3 && (
            <div>
              {" "}
              <p>
                Abitur in Spanien mit Schwerpunkt Sozialwissenschaften, 
                das dem deutschen Abitur entspricht, abgeschlossen.
              </p>
              <p>
                Nach meiner Ankunft in Deutschland habe ich den
                Integrationskurs der deutschen Regierung absolviert. Dieser
                Kurs gewährleistet ein B1-Niveau in der deutschen Sprache und
                beinhaltet Informationen über die deutsche Gesellschaft,
                einschließlich Gesetze, Geschichte und Geografie.
              </p>
            </div>
          )}
        </div></div>}

        {language === "spanish" && <div><h1 className="title-homepage" id="studies-homePage">
          Estudios
        </h1>
        <div className="eachStudy">
          <div
            id="first-study"
            onClick={() => (studies === 1 ? setStudies(0) : setStudies(1))}
          >
            {studies === 1 ? (
              <h2>Formación como desarrollador de software▾</h2>
            ) : (
              <h2>Formación como desarrollador de software ▸</h2>
            )}
          </div>
          {studies === 1 && (
            <div>
              <p>
                Siempre ansioso por aprender de forma independiente, desarrollé mis conocimientos fundamentales de JavaScript, CSS y HTML desde 2019 hasta 2023 completando cursos ofrecidos en plataformas como FreeCodeCamp y Codecademy.
              </p>
              <p>
                A finales de 2023, decidí enfocar mi carrera en el desarrollo de software y me uní al bootcamp de seis meses ofrecido por Ironhack. Este bootcamp en línea cubría todo el proceso de desarrollo de aplicaciones, desde el frontend hasta el backend, utilizando el stack MERN. Durante este tiempo, creé mis primeros proyectos. En mayo de 2024, completé con éxito el bootcamp, desarrollando una aplicación full-stack llamada FRIENDS. Recibí mi certificado de Ironhack al finalizar.
              </p>
              <img
                style={{ marginLeft: "20px" }}
                id="ironhack-certificate"
                src={IronhackCertificate}
                alt="Certificado de Ironhack"
              />

              <p>
                Actualmente, sigo aprendiendo y profundizando mi comprensión de varias tecnologías, principalmente basadas en el stack MERN. También estoy abierto a oportunidades laborales que se alineen con mis habilidades y expectativas.
              </p>
            </div>
          )}
        </div>
        <div className="eachStudy">
          <div onClick={() => (studies === 2 ? setStudies(0) : setStudies(2))}>
            {studies === 2 ? (
              <h2>Estudios universitarios▾</h2>
            ) : (
              <h2>Estudios universitarios ▸</h2>
            )}
          </div>
          {studies === 2 && (
            <div>
              <p>
                Completé con éxito mis estudios en Ciencias del Deporte en la Universidad de Cádiz (España) entre 2017 y 2021, con un enfoque en actividad física y salud. Mi tesis de grado fue una revisión de la evidencia científica actual sobre la actividad física en personas con artrosis, comparando los beneficios del ejercicio dentro y fuera del agua.
              </p>

              <figure>
                <img
                  style={{ marginLeft: "20px" }}
                  id="final-thesis"
                  src={finalThesis}
                  alt="Mapa conceptual de la tesis final"
                />
                <figcaption style={{ margin: "20px" }}>
                  Mapa conceptual de mi tesis final
                </figcaption>
              </figure>
            </div>
          )}
        </div>
        <div id="last-study" className="eachStudy">
          <div onClick={() => (studies === 3 ? setStudies(0) : setStudies(3))}>
            {studies === 3 ? <h2>Otros ▾</h2> : <h2>Otros ▸</h2>}
          </div>
          {studies === 3 && (
            <div>
              {" "}
              <p>
                Completé la educación secundaria en España con una especialización en ciencias sociales, equivalente al Abitur en Alemania.
              </p>
              <p>
                Al llegar a Alemania, completé el Curso de Integración ofrecido por el gobierno alemán. Este curso asegura un nivel B1 en el idioma alemán e incluye información sobre la sociedad alemana, incluyendo leyes, historia y geografía.
              </p>
            </div>
          )}
        </div></div>}

      </div>

      <div id="work-experience-container">
        {language==="english" && <div> <h1 className="title-homepage" id="work-experience-homePage">
          Work Experience
        </h1>
        <div className="eachYear">
          <div
            onClick={() =>
              studies === 2016 ? setStudies(0) : setStudies(2016)
            }
          >
            {studies === 2016 ? <h2>2016▿</h2> : <h2>2016▹</h2>}
          </div>
          {studies === 2016 && (
            <p className="each-info-work">
              Worked at the Chelsea Potter, a British pub located in the Chelsea
              neighborhood of London, GB. During this time, I learned the basics
              of hospitality, improved my English, and enhanced my customer
              service skills.
            </p>
          )}
        </div>
        <div className="eachYear">
          <div
            onClick={() =>
              studies === 2018 ? setStudies(0) : setStudies(2018)
            }
          >
            {studies === 2018 ? <h2>2018▿</h2> : <h2>2018▹</h2>}
          </div>
          {studies === 2018 && (
            <p className="each-info-work">
              Worked in Malta at a gastrobar called NAR. There, I continued to
              develop my customer service skills and improved my english
              language skills.
            </p>
          )}
        </div>
        <div className="eachYear">
          <div
            onClick={() =>
              studies === 2020 ? setStudies(0) : setStudies(2020)
            }
          >
            {studies === 2020 ? <h2>2020▿</h2> : <h2>2020▹</h2>}
          </div>
          {studies === 2020 && (
            <p className="each-info-work">
              Realiced a intership related to my university studies in two
              different companies: SANO Puerto Real and SinerGym Cadiz. In both
              of them I realiced the function of personal trainer, programming
              tranings adequating to individual necesities.
            </p>
          )}
        </div>
        <div className="eachYear" id="last-year">
          <div
            onClick={() =>
              studies === 2021 ? setStudies(0) : setStudies(2021)
            }
          >
            {studies === 2021 ? <h2>2021-2024▿</h2> : <h2>2021-2024▹</h2>}
          </div>
          {studies === 2021 && (
            <p className="each-info-work">
              I have worked in various hospitality roles across Germany,
              primarily focusing on customer service. This experience has
              equipped me with a strong understanding of how to meet customer
              needs and requirements effectively, as well as improved my german language skills.
            </p>
          )}
        </div></div> } 
       {language === "german" && <div><h1 className="title-homepage" id="work-experience-homePage">
  Berufserfahrung
</h1>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2016 ? setStudies(0) : setStudies(2016)
    }
  >
    {studies === 2016 ? <h2>2016▾</h2> : <h2>2016▸</h2>}
  </div>
  {studies === 2016 && (
    <p className="each-info-work">
      Arbeitete im Chelsea Potter, einem britischen Pub im Stadtviertel Chelsea in London, GB. Während dieser Zeit erlernte ich die Grundlagen der Gastfreundschaft, verbesserte mein Englisch und meine Fähigkeiten im Kundenservice.
    </p>
  )}
</div>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2018 ? setStudies(0) : setStudies(2018)
    }
  >
    {studies === 2018 ? <h2>2018▾</h2> : <h2>2018▸</h2>}
  </div>
  {studies === 2018 && (
    <p className="each-info-work">
      Arbeitete auf Malta in einer Gastrobar namens NAR. Dort setzte ich meine Entwicklung im Kundenservice fort und verbesserte meine Englischkenntnisse.
    </p>
  )}
</div>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2020 ? setStudies(0) : setStudies(2020)
    }
  >
    {studies === 2020 ? <h2>2020▾</h2> : <h2>2020▸</h2>}
  </div>
  {studies === 2020 && (
    <p className="each-info-work">
      Absolvierte ein Praktikum im Rahmen meines Universitätsstudiums in zwei verschiedenen Unternehmen: SANO Puerto Real und SinerGym Cadiz. In beiden Unternehmen arbeitete ich als Personal Trainer und erstellte Trainingsprogramme, die auf individuelle Bedürfnisse zugeschnitten waren.
    </p>
  )}
</div>
<div className="eachYear" id="last-year">
  <div
    onClick={() =>
      studies === 2021 ? setStudies(0) : setStudies(2021)
    }
  >
    {studies === 2021 ? <h2>2021-2024▾</h2> : <h2>2021-2024▸</h2>}
  </div>
  {studies === 2021 && (
    <p className="each-info-work">
      Ich habe in verschiedenen gastronomischen Positionen in Deutschland gearbeitet, hauptsächlich im Kundenservice. Diese Erfahrung hat mich mit einem starken Verständnis dafür ausgestattet, wie man Kundenbedürfnisse effektiv erfüllt und gleichzeitig meine Deutschkenntnisse verbessert.
    </p>
  )}
</div>
</div> } 
{language === "spanish" && <div><h1 className="title-homepage" id="work-experience-homePage">
  Experiencia Laboral
</h1>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2016 ? setStudies(0) : setStudies(2016)
    }
  >
    {studies === 2016 ? <h2>2016▾</h2> : <h2>2016▸</h2>}
  </div>
  {studies === 2016 && (
    <p className="each-info-work">
      Chelsea Potter, pub británico ubicado en el barrio de Chelsea en Londres, Reino Unido. Durante este tiempo, aprendí los fundamentos del trabajo en la hostelería, mejoré mi inglés y perfeccioné mis habilidades en atención al cliente.
    </p>
  )}
</div>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2018 ? setStudies(0) : setStudies(2018)
    }
  >
    {studies === 2018 ? <h2>2018▾</h2> : <h2>2018▸</h2>}
  </div>
  {studies === 2018 && (
    <p className="each-info-work">
      Malta, NAR gastrobar . Allí continué desarrollando mis habilidades en atención al cliente y mejoré mis habilidades linguísticas en inglés.
    </p>
  )}
</div>
<div className="eachYear">
  <div
    onClick={() =>
      studies === 2020 ? setStudies(0) : setStudies(2020)
    }
  >
    {studies === 2020 ? <h2>2020▾</h2> : <h2>2020▸</h2>}
  </div>
  {studies === 2020 && (
    <p className="each-info-work">
      Realicé prácticas relacionadas con mis estudios universitarios en dos empresas diferentes: SANO Puerto Real y SinerGym Cádiz. En ambas empresas trabajé como entrenador personal, diseñando entrenamientos adaptados a las necesidades individuales.
    </p>
  )}
</div>
<div className="eachYear" id="last-year">
  <div
    onClick={() =>
      studies === 2021 ? setStudies(0) : setStudies(2021)
    }
  >
    {studies === 2021 ? <h2>2021-2024▾</h2> : <h2>2021-2024▸</h2>}
  </div>
  {studies === 2021 && (
    <p className="each-info-work">
     Varios roles de hostelería en Alemania, centrándome principalmente en el servicio al cliente. Esta experiencia me ha proporcionado un sólido entendimiento de cómo satisfacer las necesidades y requisitos de los clientes de manera efectiva, así como mejorar mis habilidades en el idioma alemán.
    </p>
  )}
</div>
</div> } 
      </div>
      <div id="languages-homepage-box">
        {language === "english" && <div> <h1 className="title-homepage" id="languages-homepage">
          Languages
        </h1>
        <div id="each-language-box">
          <div className="each-language">
            <h3>Spanish</h3>
            <p> C2 (Mother tonge)</p>
          </div>
          <div className="each-language">
            <h3>English</h3>
            <p>C1 Certified by Cambdrige university</p>
          </div>
          <div className="each-language">
            <h3>German</h3>
            <p>B2 (B1 certified by german goverment)</p>
          </div>
        </div></div>} 
        {language === "german" && <div> <h1 className="title-homepage" id="languages-homepage">
          Sprachen
        </h1>
        <div id="each-language-box">
          <div className="each-language">
            <h3>Spanisch</h3>
            <p> C2 (Muttersprache)</p>
          </div>
          <div className="each-language">
            <h3>Englisch</h3>
            <p>C1 Zertifizierung durch die Universität Cambridge</p>
          </div>
          <div className="each-language">
            <h3>Deutsch</h3>
            <p>B2 (B1 Zertifizierung durch die deutsche Regierung)</p>
          </div>
        </div></div>}

        {language === "spanish" && <div> <h1 className="title-homepage" id="languages-homepage">
          Idiomas
        </h1>
        <div id="each-language-box">
          <div className="each-language">
            <h3>Español</h3>
            <p> C2 (Lengua materna)</p>
          </div>
          <div className="each-language">
            <h3>Inglés</h3>
            <p>C1 certificado por universidad de Cambridge</p>
          </div>
          <div className="each-language">
            <h3>Alemán</h3>
            <p>B2 (B1 certificado por gobierno alemán)</p>
          </div>
        </div></div>} 
      </div>
    </div>
  );
}
export default HomePage;
