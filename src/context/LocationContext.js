import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LocationContext = createContext();
export const LocationProvider = ({ children }) => {
  const secretKey = "AIzaSyCIC8O3L_0tjTtJCSOO-9phy9pz-b_y25A";

  const [selectedAddress, setSelectedAddress] = useState("");
  const [detectingLocation, setDetectingLocation] = useState(false);

  useEffect(() => {
    detectLocation();
  }, []);

  useEffect(() => {}, [detectingLocation]);

  const detectLocation = () => {
    setDetectingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setDetectingLocation(false);
          alert("Error fetching geolocation:", error);
        }
      );
    } else {
      setDetectingLocation(false);
      alert("Geolocation is not supported by this browser.");
    }
  };

  const getAddress = (latitude, longitude) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${secretKey}`
      )
      .then((response) => {
        const formattedAddress =
          response.data.results[0]?.formatted_address || "Address not found";
        setSelectedAddress(formattedAddress);
        setTimeout(() => {
          setDetectingLocation(false);
        }, 2000);
      })
      .catch((error) => {
        alert("Error fetching address");
        setDetectingLocation(false);
      });
  };

  return (
    <LocationContext.Provider
      value={{ selectedAddress, detectingLocation, detectLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
