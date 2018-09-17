import React from 'react';
import Availability from './Availability';
import moment from 'moment';
import ShippingInfo from './ShippingInfo';
import InputBox from './InputBox';
import ContinueButton from './ContinueButton';


class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInputBoxes: false,
      pledgeBoxClasses: "actualBox pledgeBoxContainer"
    };
  }

  addCustomerInputBoxes() {
    this.setState((prevState) => {
      return (
        {
          customerInputBoxes: true,
          pledgeBoxClasses: 'permanentBorder',
        });
    });
  }

  render() {
    const { pledgeInfo, shipsToAnywhere, validLocations } = this.props;
    const {
      minimumPledgeAmount, pledgeTitle, pledgeDescription, pledgeRewards,
      estimatedShipping, available, pledgeBackers,
    } = pledgeInfo;
    const { pledgeBoxClasses } = this.state;

    const addCustomerInputBoxes = this.addCustomerInputBoxes.bind(this);

    return (
      <div className="outsideBox">
        {available
          ? <div></div>
          : <div id="allGone">All gone!</div>
        }
        <div className={pledgeBoxClasses} onClick={() => { addCustomerInputBoxes() }}>
          <div className="pledgeBoxHeaderFont pledgeAmount pledgeBoxComponentSizing">
            <span>Pledge US$</span>
            {minimumPledgeAmount}
            <span> or more</span>
          </div>
          <div className="pledgeBoxHeaderFont pledgeTitle pledgeBoxComponentSizing">{pledgeTitle}</div>
          <div className="pledgeSubheaderFont pledgeBoxComponentTextSizing" id="pledgeDescription">{pledgeDescription}</div>
          <ul className="pledgeSubheaderFont pledgeBoxComponentSizing" id="pledgeRewards">
            Includes:
              {pledgeRewards.map((reward, index) => <li key={index} className="listItem">{reward}</li>)}
          </ul>
          <ShippingInfo estimatedShipping={estimatedShipping} shipsToAnywhere={shipsToAnywhere} validLocations={validLocations} />
          <Availability availability={available} numBackers={pledgeBackers} />
          {
            this.state.customerInputBoxes
              ? (
                <div className="inputBoxesContainer">
                  <InputBox />
                  <ContinueButton />
                </div>
              )
              : <div />
          }
        </div>
      </div>
    );
  }
}

export default Pledge;
