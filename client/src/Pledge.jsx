/* global React */

import React from 'react';
import Availability from './Availability';
import moment from 'moment';
import ShippingInfo from './ShippingInfo';
import InputBox from './InputBox';
import ContinueButton from './ContinueButton';
import { StyledPledgeListBox, StyledPledgeBox, StyledPledgeBoxComponent, StyledPledgeBoxComponentText } from './styles/styledPledgeBox';


class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInputBoxes: false,
      permanentBorder: false,
    };
  }

  addCustomerInputBoxes() {
    this.setState((prevState) => {
      return (
        {
          customerInputBoxes: true,
          permanentBorder: true,
        });
    });
  }

  render() {
    const { pledgeInfo, shipsToAnywhere, validLocations } = this.props;
    const {
      minimumPledgeAmount, pledgeTitle, pledgeDescription, pledgeRewards,
      estimatedShipping, available, pledgeBackers,
    } = pledgeInfo;
    const { customerInputBoxes, permanentBorder } = this.state;

    const addCustomerInputBoxes = this.addCustomerInputBoxes.bind(this);

    const options = validLocations.map((location, index) => <option value={location.toUpperCase()} key={index}>{location.toUpperCase()}</option>);
    return (
      <StyledPledgeListBox>
        {available
          ? <div></div>
          : <div id="allGone">All gone!</div>
        }
        <StyledPledgeBox onClick={() => { addCustomerInputBoxes(); }} permanentBorder={permanentBorder} available={available}>
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
          <ShippingInfo estimatedShipping={estimatedShipping} shipsToAnywhere={shipsToAnywhere} />
          <Availability availability={available} numBackers={pledgeBackers} />
          {
            customerInputBoxes && available
              ? (
                <div className="inputBoxesContainer alignLeft">
                  <div className="pledgeSubheaderFont pledgeBoxComponentSizing" >Shipping destination</div>
                  <select className="pledgeBoxComponentSizing" id="validLocations" >
                    {options}
                  </select>
                  <div className="pledgeSubheaderFont pledgeBoxComponentSizing">Pledge amount</div>
                  <InputBox />
                  <ContinueButton />
                </div>
              )
              : <div />
          }
        </StyledPledgeBox>
      </StyledPledgeListBox>
    );
  }
}

export default Pledge;
