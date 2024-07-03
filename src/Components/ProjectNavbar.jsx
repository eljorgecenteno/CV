
import { HashLink as Link } from 'react-router-hash-link';
import "./ProjectNavbar.css"
import iconoHomePage from "../Images/icono-homepage.png"
function ProjectNavbar() {
  return (
    <div id="main-box-navbar-project">
  
  <Link id="home-page-emoji" to="/"> <img src={iconoHomePage} alt="" /></Link>
 
    </div>
   
)}
export default ProjectNavbar;
