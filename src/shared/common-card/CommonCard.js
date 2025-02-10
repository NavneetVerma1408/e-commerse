import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn";
import "./CommonCard.css";
const CommonCard = ({
  cardImg,
  cardImgRound,
  cardTop,
  cardMdl,
  cardBtm,
  cardImgHght = 70,
  specialClassOn = -1,
  onCardClick,
  onEditClick,
  onDeleteClick,
  cardAction = false,
  addCartBtn = false,
  chngAddr = false,
}) => {
  return (
    <div className="crd-cntnr" onClick={() => onCardClick()}>
      {cardImg && (
        <div
          className={`crd-img ${cardImgRound ? "rndImg" : ""}`}
          style={{ height: cardImgHght + "px" }}
        >
          <img src={cardImg} />
        </div>
      )}

      <div className="crd-dtl">
        <div className={`cardTop ${specialClassOn == 0 ? "specialClass" : ""}`}>
          <span>{cardTop}</span>
          {chngAddr && <a className="chngAddr">Change</a>}
        </div>
        <div className={`cardMdl ${specialClassOn == 1 ? "specialClass" : ""}`}>
          <span>{cardMdl}</span>
        </div>
        <div className={`cardBtm ${specialClassOn == 2 ? "specialClass" : ""}`}>
          <span>{cardBtm}</span>
          {addCartBtn && (
            <div className="addCartBtn">
              <AddToCartBtn />
            </div>
          )}
        </div>
        {cardAction && (
          <div className="crd-actn">
            <a
              onClick={(e) => {
                e.stopPropagation();
                onEditClick();
              }}
            >
              <i className="fa fa-pencil text-success" />
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation();
                onDeleteClick();
              }}
            >
              <i className="fa fa-trash text-danger" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
