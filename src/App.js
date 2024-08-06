
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EgyptPage } from "./pages/EgyptPage";
import { DragonPage } from "./pages/DragonPage";
import { Home } from "./pages/Home";

import '../src/App.css';

import { NavBar } from "./components/NavBar";




function App() {


  
  return (
    
    <div className="">
      
      <Router>

        <Routes>
          <Route path= "/" element={<Home></Home>}/>
          <Route path= "/egypt" element={<EgyptPage></EgyptPage>}/>
          <Route path= "/dragon" element={<EgyptPage></EgyptPage>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
