import CommonCard from "../common-card/CommonCard";
import "./PayCard.css";

const PayCard = () => {
  return (
    <div className="pay-crd">
      <CommonCard
        isCardDfltBg={false}
        cardBgColor="#318616"
        cardImg="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-white-icon.png"
        cardTop="1 item"
        cardMdl="₹20"
        cardImgHght={35}
        onCardClick={() => {}}
      />
      <a className="prcd-pay">
        Proceed To Pay
        <span className="ms-2">
          <i className="fa fa-arrow-right"></i>
        </span>
      </a>
    </div>
  );
};

export default PayCard;
