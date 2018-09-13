/* global React */
import Availability from './Availability';


class Pledge extends React.Component {
  constructor(props) {
    super(props);

    // const { pledgeInfo } = this.props;
    this.state = {
      // isPledgeAvailable: pledgeInfo.available,
      // numBackers: pledgeInfo.pledgeBackers,
    };
  }

  render() {
    const { pledgeInfo } = this.props;
    const {
      minimumPledgeAmount, pledgeTitle, pledgeDescription, pledgeRewards,
      estimatedShipping, validLocations, available, pledgeBackers,
    } = pledgeInfo;

    // const { isPledgeAvailable, numBackers } = this.state;

    return (
      <div className="pledgeContainer">
        An individual pledge
        <div className="pledgeHeaderFont pledgeAmount">
          <span>Pledge $</span>
          {minimumPledgeAmount}
          <span> or more</span>
        </div>
        <div className="pledgeHeaderFont pledgeTitle">{pledgeTitle}</div>
        <div className="pledgeSubheaderFont pledgeDescription">{pledgeDescription}</div>
        <ul className="pledgeSubheaderFont pledgeRewards">
          Includes
          {pledgeRewards.map((reward, index) => <li key={index}>{reward}</li>)}
        </ul>
        <div className="pledgeSubheaderFont shippingInfo" id="estimatedShipping">
          <div>ESTIMATED DELIVERY</div>
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
  }
}

export default Pledge;
