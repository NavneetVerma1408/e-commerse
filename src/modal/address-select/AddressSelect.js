import React, { useContext } from "react";
import "./AddressSelect.css";
import { LocationContext } from "../../context/LocationContext";
const AddressSelectComponent = ({ closeAddressModal }) => {
  const { detectingLocation, detectLocation } = useContext(LocationContext);

  return (
    <div className="addr-select-cntnr">
      <div className="modal-header">
        {detectingLocation ? (
          <div>
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
            Try to detecting yout location
          </div>
        ) : (
          <>
            <div className="modal-title">
              Change Location
              <button onClick={closeAddressModal}>
                <span>
                  <i className="fa fa-close" />
                </span>
              </button>
            </div>
            <div className="trck-loc">
              <button className="dtct-loc" onClick={detectLocation}>
                Detect My Location
              </button>
              <div>OR</div>
              <input
                className="srch-loc"
                placeholder="Search delivery location"
              />
            </div>
          </>
        )}
      </div>

      {!detectingLocation && (
        <div className="modal-body">
          <p>Your save address</p>
          <div className="addr-card">
            <div className="addr-img">
              <i className="fa fa-home" />
            </div>
            <div className="addr-dtls">
              <h6>Home</h6>
              <p>
                2nd Floor, Delight House, Shri ji nivas Khajur Colony, Block D,
                Sector 44, Noida
              </p>
              <div className="addr-actn">
                <a>
                  <i className="fa fa-pencil text-success" />
                </a>
                <a>
                  <i className="fa fa-trash text-danger" />
                </a>
              </div>
            </div>
          </div>
          <div className="addr-card">
            <div className="addr-img">
              <i className="fa fa-home" />
            </div>
            <div className="addr-dtls">
              <h6>Home</h6>
              <p>
                2nd Floor, Delight House, Shri ji nivas Khajur Colony, Block D,
                Sector 44, Noida
              </p>
              <div className="addr-actn">
                <a>
                  <i className="fa fa-pencil text-success" />
                </a>
                <a>
                  <i className="fa fa-trash text-danger" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressSelectComponent;
