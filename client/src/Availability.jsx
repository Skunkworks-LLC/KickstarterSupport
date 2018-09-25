import React from 'react';

import { StyledBoxComponent, StyledLeftSpan } from './styles/styledPledgeBox';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    const { availability, numBackers } = this.props;
    this.state = {
      isPledgeAvailable: availability,
      numBackers,
    };
  }

  render() {
    const { isPledgeAvailable, numBackers } = this.state;
    const Status = isPledgeAvailable
      ? (<div></div>)
      : (
        <div className="pledgeTextFont" id="pledgeNotAvailable">Reward no longer available</div>
      );

    return (
      <StyledBoxComponent className="subHeaderFont">
        {Status}
        <StyledBoxComponent>
          <StyledLeftSpan>{numBackers + ' '} backers</StyledLeftSpan>
        </StyledBoxComponent>
      </StyledBoxComponent>
    );
  }
}

export default Availability;


// const Status = isPledgeAvailable
//       ? (
//         <div className="pledgeSubheaderFont pledgeBoxComponentSizing shippingInfoContainer" id="pledgeAvailable">
//           {numBackers + ' '}
//           <span> backers</span>
//         </div>
//       )
//       : (
//         <div className="pledgeBoxComponentSizing">
//           <div className="pledgeTextFont" id="pledgeNotAvailable">Reward no longer available</div>
//         </div>
//       );