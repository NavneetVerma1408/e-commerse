import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import { LocationProvider } from "./context/LocationContext";

const App = () => {
  return (
    <Router>
      <LocationProvider>
        <Header />
      </LocationProvider>
    </Router>
  );
};

export default App;
