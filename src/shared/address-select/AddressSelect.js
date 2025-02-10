import React, { useContext } from "react";
import "./AddressSelect.css";
import { LocationContext } from "../../context/LocationContext";
import CommonCard from "../common-card/CommonCard";

const AddressSelectComponent = ({ closeAddressModal }) => {
  const { detectingLocation, detectLocation, changeAddress } =
    useContext(LocationContext);

  const handleChangeAddress = (lat, lng) => {
    changeAddress(lat, lng, closeAddressModal); // Pass the close function as an argument
  };

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
            Try to detecting your location
          </div>
        ) : (
          <>
            <h5 class="modal-title">Change Location</h5>
            <button
              onClick={() => closeAddressModal()}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </>
        )}
      </div>

      {!detectingLocation && (
        <div className="modal-body">
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
          <p>Your save address</p>
          <div className="addr-card-list">
            <CommonCard
              cardImg="https://cdn.grofers.com/layout-engine/v2/2024-12/address_home_icon_v4/light.png"
              cardImgRound={true}
              cardTop="Home"
              cardMdl="H83V+R2Q, Khajur Colony, Block D, Sector 44, Noida, Uttar
                Pradesh 201303, India"
              cardImgMaxWidth={40}
              specialClassOn={0}
              cardAction={true}
              onCardClick={() => handleChangeAddress(28.5546, 77.34261)}
              onEditClick={() => alert("Home Edit Clicked")}
              onDeleteClick={() => alert("Home Delete Clicked")}
            />
            <CommonCard
              cardImg="https://cdn.grofers.com/layout-engine/v2/2024-12/address_home_icon_v4/light.png"
              cardImgRound={true}
              cardTop="Other"
              cardMdl="OFFICE, SHIV NADAR SCHOOL-3, 1, Noida-Greater Noida Expy,
                Chhaprauli Bangar, Sector 135"
              cardImgMaxWidth={40}
              specialClassOn={0}
              cardAction={true}
              onCardClick={() => handleChangeAddress(28.494758, 77.411735)}
              onEditClick={() => alert("Other Edit Clicked")}
              onDeleteClick={() => alert("Other Delete Clicked")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressSelectComponent;
