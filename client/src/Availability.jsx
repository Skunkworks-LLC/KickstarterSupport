import React from 'react';

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
      ? (
        <div className="pledgeSubheaderFont" id="pledgeAvailable">
          {numBackers}
          <span> backers</span>
        </div>
      )
      : <div className="pledgeTextFont" id="pledgeNotAvailable">Reward no longer Available</div>;

    return Status;
  }
}

export default Availability;