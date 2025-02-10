import "./CommonCard.css";
const CommonCard = ({
  cardImg,
  cardImgRound,
  cardTop,
  cardMdl,
  cardBtm,
  cardImgMaxWidth = 70,
  specialClassOn = -1,
  cardAction = false,
  onCardClick
}) => {
  return (
    <div className="crd-cntnr" onClick={()=>onCardClick()}>
      <div
        className={`crd-img ${cardImgRound ? "rndImg" : ""}`}
        style={{ height: cardImgMaxWidth + "px" }}
      >
        <img src={cardImg} />
      </div>
      <div className="crd-dtl">
        <div className={specialClassOn == 0 ? "specialClass" : ""}>
          {cardTop}
        </div>
        <div className={specialClassOn == 1 ? "specialClass" : ""}>
          {cardMdl}
        </div>
        <div className={specialClassOn == 2 ? "specialClass" : ""}>
          {cardBtm}
        </div>
        {cardAction && (
          <div className="crd-actn">
            <a>
              <i className="fa fa-pencil text-success" />
            </a>
            <a>
              <i className="fa fa-trash text-danger" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
