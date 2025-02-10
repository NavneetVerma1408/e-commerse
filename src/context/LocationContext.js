import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { aaaaaaaaaaaaaa } from "../constant/secretkey";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [address, setAdress] = useState("");
  const [detectingLocation, setDetectingLocation] = useState(false);

  useEffect(() => {
    detectLocation();
  }, []);

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

  const changeAddress = (lat, lng, closeAddressModal) => {
    setDetectingLocation(true);
    getAddress(lat, lng, closeAddressModal);
  };

  const getAddress = (latitude, longitude, closeAddressModal) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${aaaaaaaaaaaaaa}`
      )
      .then((response) => {
        const formattedAddress =
          response.data.results[0]?.formatted_address || "Address not found";
        setAdress(formattedAddress);
        if (closeAddressModal) {
          setTimeout(() => {
            closeAddressModal();
          }, 800);
        }
        setTimeout(() => {
          setDetectingLocation(false);
        }, 1000);
      })
      .catch((error) => {
        alert("Error fetching address");
        setDetectingLocation(false);
      });
  };

  return (
    <LocationContext.Provider
      value={{ address, detectingLocation, detectLocation, changeAddress }}
    >
      {children}
    </LocationContext.Provider>
  );
};
