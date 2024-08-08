
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EgyptPage } from "./pages/EgyptPage";
import { DragonPage } from "./pages/DragonPage";
import { Home } from "./pages/Home";

import '../src/App.css';

import { NavBar } from "./components/NavBar";
import { useLocation } from 'react-router-dom'



function App() {

  console.log("v0.3")
  console.log(useLocation().pathname)
  return (
    
    <div className="">
      
      <Router>

        <Routes>
          <Route path= "/" element={<Home></Home>}/>
          <Route path= "/Casino" element={<Home></Home>}/>
          <Route path= "/Casino/egypt" element={<EgyptPage></EgyptPage>}/>
          <Route path= "/Casino/dragon" element={<EgyptPage></EgyptPage>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
