import React from 'react';
import { StyledInputBarContainer, StyledPledgeInputBar } from './styles/styledInputBox';


class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { onChangeInputBarHandler } = this.props;
    return (
      <StyledInputBarContainer>
        <div className="inputCurrency" id="currency">$</div>
        <input
          className="pledgeInputBar"
          id="input"
          onChange={e => onChangeInputBarHandler(e)}
          defaultValue={10}
        />
      </StyledInputBarContainer>
    );
  }
}

export default InputBox;