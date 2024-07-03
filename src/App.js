
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

import DogWascher from "./Pages/DogWascherProject.jsx"
import WTFPage from './Pages/WTFPage.jsx';
import FriendsPage from './Pages/FriendsPage.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (

    <div >
      
      <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
     <Route path="/contact" element={<ContactPage></ContactPage>}> </Route>
     <Route path="/dog-washer" element={<DogWascher></DogWascher>}> </Route>
     <Route path="/wtf" element={<WTFPage></WTFPage>}> </Route>
     <Route path="/friends" element={<FriendsPage></FriendsPage>}> </Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
