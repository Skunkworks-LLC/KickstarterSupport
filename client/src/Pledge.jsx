/* global React */

import React from 'react';
import Availability from './Availability';
import moment from 'moment';
import ShippingInfo from './ShippingInfo';
import InputBox from './InputBox';
import ContinueButton from './ContinueButton';
import {
  PledgeListBox,
  StyledPledgeBox,
  StyledBoxComponent,
  StyledLeftSpan,
  StyledUnorderedList,
  StyledListItem,
  StyledBoxComponentText,
  StyledSelect,
  StyledGreenPledgeBox,
} from './styles/styledPledgeBox';


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
      <PledgeListBox>
        {available
          ? <div></div>
          : <div id="allGone">All gone!</div>
        }
        <StyledPledgeBox onClick={() => { addCustomerInputBoxes(); }} permanentBorder={permanentBorder} available={available}>
          <StyledGreenPledgeBox className="inFront" available={available} customerInputBoxes={customerInputBoxes}>
            <div className="text">Text is here</div>
            <div style={{ visibility: 'visible' }}>
              <StyledBoxComponent className="headerFont">
                <StyledLeftSpan>Pledge US${minimumPledgeAmount} or more</StyledLeftSpan>
              </StyledBoxComponent>
              <StyledBoxComponent className="headerFont pledgeTitle">
                <StyledLeftSpan>{pledgeTitle}</StyledLeftSpan>
              </StyledBoxComponent>
              <StyledBoxComponentText className="subHeaderFont">{pledgeDescription}</StyledBoxComponentText>
              <StyledUnorderedList className="subHeaderFont">
                Includes:
              {pledgeRewards.map((reward, index) => <StyledListItem key={index} className="listItem">{reward}</StyledListItem>)}
              </StyledUnorderedList>
              <ShippingInfo estimatedShipping={estimatedShipping} shipsToAnywhere={shipsToAnywhere} />
              <Availability availability={available} numBackers={pledgeBackers} />
              {
                customerInputBoxes && available
                  ? (
                    <StyledBoxComponent className="inputBoxesContainer">
                      <StyledBoxComponent className="subHeaderFont" >
                        <StyledLeftSpan>Shipping destination</StyledLeftSpan>
                      </StyledBoxComponent>
                      <StyledSelect>{options}</StyledSelect>
                      <StyledBoxComponent className="subHeaderFont">
                        <StyledLeftSpan>Pledge amount</StyledLeftSpan>
                      </StyledBoxComponent>
                      <InputBox />
                      <ContinueButton />
                    </StyledBoxComponent>
                  )
                  : <div />
              }
            </div>
          </StyledGreenPledgeBox>
        </StyledPledgeBox>
      </PledgeListBox>
    );
  }
}

export default Pledge;
