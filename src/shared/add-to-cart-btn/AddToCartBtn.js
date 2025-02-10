import "./AddToCartBtn.css";

const AddToCartBtn = () => {
  const qty = 1;
  return (
    <div className="btn-cntnr">
      <button className="decr">
        <i className="fa fa-minus"></i>
      </button>
      <div>{qty}</div>
      <button className="incr">
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default AddToCartBtn;
