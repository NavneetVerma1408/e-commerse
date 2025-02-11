import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import { LocationProvider } from "./context/LocationContext";
import PayCard from "./shared/pay-card/PayCard";
import "./App.css";
import Home from "./component/home/Home";
const App = () => {
  return (
    <Router>
      <LocationProvider>
        <Header />
        <Home/>
        <div className="pay-crd-btm">
          <PayCard />
        </div>
      </LocationProvider>
    </Router>
  );
};

export default App;
