import React from 'react';

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { estimatedShipping, validLocations } = this.props;
    const options = validLocations.map((location, index) => <option value={location.toUpperCase()} key={index}>{location.toUpperCase()}</option>);

    return (
      <div className="shippingInfoContainer pledgeBoxComponentSizing">
        <div className="shippingInfo" id="estimatedShipping">
          <div className="pledgeSubheaderTitle noBottomMargin">ESTIMATED DELIVERY</div>
          <span syle={{ 'color': 'black' }}>{estimatedShipping}</span>
        </div>
        <div className="shippingInfo">
          <label htmlFor="validLocations" className="pledgeSubheaderTitle noBottomMargin">SHIPS TO</label>
          <br />
          <select className="shippingInfo" id="validLocations">
            {options}
          </select>
        </div>
      </div >
    );
  }
}

export default ShippingInfo;
