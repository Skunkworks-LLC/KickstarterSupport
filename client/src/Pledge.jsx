import React from 'react';
import Availability from './Availability';
import moment from 'moment';



const Pledge = ({ pledgeInfo }) => {
  const {
    minimumPledgeAmount, pledgeTitle, pledgeDescription, pledgeRewards,
    estimatedShipping, validLocations, available, pledgeBackers,
  } = pledgeInfo;

  return (
    <div className="pledgeBoxContainer extended">
      <div className="pledgeBoxHeaderFont pledgeAmount">
        <span>Pledge $</span>
        {minimumPledgeAmount}
        <span> or more</span>
      </div>
      <div className="pledgeBoxHeaderFont pledgeTitle">{pledgeTitle}</div>
      <div className="pledgeSubheaderFont pledgeDescription">{pledgeDescription}</div>
      <ul className="pledgeSubheaderFont pledgeRewards">
        Includes
        {pledgeRewards.map((reward, index) => <li key={index}>{reward}</li>)}
      </ul>
      <div className="pledgeSubheaderFont shippingInfo" id="estimatedShipping">
        <div>ESTIMATED DELIVERY</div>

        {/* Format the estimated delivery date using moments */}

        <div>{estimatedShipping}</div>
      </div>
      <div className="shippingInfo" id="validLocations">
        <div className="pledgeSubheaderFont">SHIPS TO</div>
        <div className="pledgeTextFont">{validLocations}</div>
      </div>
      <Availability availability={available} numBackers={pledgeBackers} />
      <br />
      <br />
    </div>
  );
};

export default Pledge;
