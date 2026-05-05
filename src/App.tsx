import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import HomePage from "./pages/homePage";




const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
                  </Routes>
       
       
      </div>
    </Router>
  );
};

export default App;
