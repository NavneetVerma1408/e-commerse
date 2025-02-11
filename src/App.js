import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import { LocationProvider } from "./context/LocationContext";
import PayCard from "./shared/pay-card/PayCard";
import "./App.css";
const App = () => {
  return (
    <Router>
      <LocationProvider>
        <Header />
        <div className="dummyHomeImg"></div>
        <div className="pay-crd-btm">
          <PayCard />
        </div>
      </LocationProvider>
    </Router>
  );
};

export default App;
