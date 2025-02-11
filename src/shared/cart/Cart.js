import React, { useContext } from "react";
import "./Cart.css";
import CommonCard from "../common-card/CommonCard";
import { LocationContext } from "../../context/LocationContext";
import PayCard from "../pay-card/PayCard";
// import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn";
const Cart = ({ closeCartOffcanvas }) => {
  const { address } = useContext(LocationContext);
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
              cardMdl="Shipment of 3 items"
              cardImgHght={40}
              specialClassOn={0}
              onCardClick={() => {}}
            />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143"
              cardTop="Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo"
              cardMdl="1 pack (32 pieces)"
              cardBtm="₹28"
              specialClassOn={2}
              addCartBtn={true}
              onCardClick={() => {}}
            />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592"
              cardTop="Amul Cow Fresh Milk"
              cardMdl="500 ml"
              cardBtm="₹29"
              specialClassOn={2}
              addCartBtn={true}
              onCardClick={() => {}}
            />
          </div>
          <div className="cart-item-card">
            <CommonCard
              cardImg="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143"
              cardTop="Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo"
              cardMdl="1 pack (32 pieces)"
              cardBtm="₹90"
              specialClassOn={2}
              addCartBtn={true}
              onCardClick={() => {}}
            />
          </div>
        </div>

        <div className="bil-dtl">
          <h6>Bill details</h6>
          <div className="bil-card">
            <div className="bil-lft">
              <i className="fa-solid fa-receipt"></i>
              <span>Items total</span>
            </div>
            <div>₹57</div>
          </div>
          <div className="bil-card">
            <div className="bil-lft">
              <i className="fa fa-person-biking"></i>
              <span>Delivery charge</span>
            </div>
            <div>₹30</div>
          </div>
          <div className="bil-card">
            <div className="bil-lft">
              <i className="fa fa-briefcase"></i>
              <span>Handling charge</span>
            </div>
            <div>₹06</div>
          </div>
          <div className="bil-card">
            <div className="bil-lft">
              <i className="fa fa-credit-card"></i>
              <span>Small cart charge</span>
            </div>
            <div>₹20</div>
          </div>
          <div className="bil-card">
            <h6>Grand total</h6>
            <h6>₹113</h6>
          </div>
        </div>

        <div className="instrcton">
          <CommonCard
            cardTop="Cancellation Policy"
            cardMdl="Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable."
            specialClassOn={0}
            onCardClick={() => {}}
          />
        </div>

        <div className="cart-btm">
          <div className="slctd-addr">
            <CommonCard
              cardImg="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc="
              cardTop="Delivering to Other"
              cardMdl={address}
              cardImgHght={35}
              specialClassOn={0}
              chngAddr={true}
              onCardClick={() => {}}
            />
          </div>
          <PayCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
