import React from 'react';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: true,
      minimumPledgeAmount: 0,
      pledgeTitle: '',
      pledgeDescription: '',
      pledgeRewards: [],
      estimatedShipping: '',
      validLocations: [],
      backers: 0,
    };
  }

  render() {
    // needs to hold all of the data that's in the data structure sheet
    return (<div>An individual pledge</div>);
  }
}

export default Pledge;
