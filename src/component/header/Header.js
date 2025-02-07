import React, { useState, useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import AddressSelectComponent from "../../modal/address-select/AddressSelect";
import { Modal } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../Cart/Cart";
const Header = () => {
  const { selectedAddress } = useContext(LocationContext);
  const [addressModalVsbl, setAddressModalVsbl] = useState(false);
  const [cartModalVsbl, setCartModalVsbl] = useState(false);

  const toggleAddressModal = () => {
    setAddressModalVsbl(!addressModalVsbl);
  };
  const toggleCartModal = () => {
    setCartModalVsbl(!cartModalVsbl);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="nav-left d-flex gap-4 align-items-center">
        <NavLink to="/" className="navbar-brand">
          <div className="branding">
            <div className="branding-left">S</div>
            <div className="branding-right">
              <span>hop</span>
            </div>
          </div>
        </NavLink>
        <button onClick={toggleAddressModal} className="address">
          {selectedAddress}
        </button>
      </div>
      <div className="d-flex gap-4 align-items-center">
        <button className="header-wishlist-icon text-success">
          <i className="fa fa-heart fa-lg" />
          <sup>12</sup>
        </button>
        <button
          onClick={toggleCartModal}
          className="header-cart-icon text-primary"
        >
          <i className="fa fa-cart-plus fa-lg" />
          <sup>12</sup>
        </button>
      </div>
      <Modal
        show={addressModalVsbl}
        dialogClassName="addr-modal"
        onHide={toggleAddressModal}
      >
        <AddressSelectComponent closeAddressModal={toggleAddressModal} />
      </Modal>

      <Offcanvas
        show={cartModalVsbl}
        placement="end"
        onHide={toggleCartModal}
        className="cart-offcanvas"
      >
        <Cart />
      </Offcanvas>
    </nav>
  );
};

export default Header;
