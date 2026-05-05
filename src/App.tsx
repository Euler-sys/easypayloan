import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import "animate.css";
import Home from "./pages/home";




const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        
        <Routes>
          <Route path="/" element={<Home />} />
                  </Routes>
       
       
      </div>
    </Router>
  );
};

export default App;
