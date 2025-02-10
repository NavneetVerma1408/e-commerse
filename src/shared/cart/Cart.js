import React from "react";
import "./Cart.css";
import CommonCard from "../common-card/CommonCard";
import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn";
const Cart = ({ closeCartOffcanvas }) => {
  return (
    <div className="cart-cntnr">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          My Cart
        </h5>
        <button
          onClick={() => closeCartOffcanvas()}
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="cart-itm-lst">
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png"
              cardTop="Delivery in 8 minutes"
              cardBtm="Shipment of 3 items"
              cardImgMaxWidth={45}
              specialClassOn={0}
            />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143"
              cardTop="Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo"
              cardMdl="1 pack (32 pieces)"
              cardBtm="₹28"
              specialClassOn={2}
            />
            <AddToCartBtn />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592"
              cardTop="Amul Cow Fresh Milk"
              cardMdl="500 ml"
              cardBtm="₹29"
              specialClassOn={2}
            />
            <AddToCartBtn />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143"
              cardTop="Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo"
              cardMdl="1 pack (32 pieces)"
              cardBtm="₹90"
              specialClassOn={2}
            />
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
