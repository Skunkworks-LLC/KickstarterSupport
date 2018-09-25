import React from 'react';

import { StyledShippingInfoContainer, StyledShippingInfo, StyledSubHeaderTitle } from './styles/styledShippingInfo';

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { estimatedShipping, shipsToAnywhere } = this.props;

    const shipsTo = shipsToAnywhere
      ? <span style={{ 'color': 'black' }}>Anywhere in the world</span>
      : <span style={{ 'color': 'black' }}>Only certain countries</span>;
    return (
      <StyledShippingInfoContainer>
        <StyledShippingInfo>
          <StyledSubHeaderTitle className="pledgeSubheaderTitle">ESTIMATED DELIVERY</StyledSubHeaderTitle>
          <span style={{ 'color': 'black' }}>{estimatedShipping}</span>
        </StyledShippingInfo>
        <StyledShippingInfo>
          <StyledSubHeaderTitle className="pledgeSubheaderTitle" style={{ marginLeft: 'none' }}>SHIPS TO</StyledSubHeaderTitle>
          {shipsTo}
        </StyledShippingInfo>
      </StyledShippingInfoContainer>
    );
  }
}

export default ShippingInfo;
