/* global React */

class PledgeInput extends React.Component {
  static buttonClickHandler() {
    console.log('Clicked the button need to add create account page');
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPledgeAmount: 0,
      inputBarContainerClasses: 'inputBarContainer pledgeBoxComponentSizing',
      inputBarClasses: 'pledgeInputBar',
      buttonClasses: 'inputButton pledgeBoxComponentSizing',
    };
  }

  onChangeInputBarHandler(event) {
    const inputBarText = Number(event.target.value);
    this.setState({ currentPledgeAmount: inputBarText });
  }

  inFocusGreen(event) {
    const inputContainerStyleClasses = 'pledgeInputBar inFocusGreen';
    this.setState({ inputBarClasses: inputContainerStyleClasses }, () => {
      console.log('reset the state');
    });
  }

  inBlurGray(event) {
    const inputContainerStyleClasses = 'pledgeInputBar inBlurGray';
    this.setState({ inputBarContainerClasses: inputContainerStyleClasses });
  }

  buttonColorLightGreen() {
    const buttonStyleClasses = 'inputButton pledgeBoxComponentSizing';
    this.setState({ buttonClasses: buttonStyleClasses });
  }

  buttonColorDarkGreen() {
    const buttonStyleClasses = 'hoveredInputButton pledgeBoxComponentSizing';
    this.setState({ buttonClasses: buttonStyleClasses });
  }

  voidFunction() {
    // This function will never be called
    // To stop elsinter form flagging currentPledgeAmount
    const { currentPledgeAmount } = this.state;
    console.log(currentPledgeAmount);
  }

  render() {
    const { buttonClasses, inputBarContainerClasses, inputBarClasses } = this.state;
    // const buttonClickHandler = this.buttonClickHandler.bind(this);
    const buttonColorDarkGreen = this.buttonColorDarkGreen.bind(this);
    const buttonColorLightGreen = this.buttonColorLightGreen.bind(this);
    const inFocusGreen = this.inFocusGreen.bind(this);
    const inBlurGray = this.inBlurGray.bind(this);
    const onChangeInputBarHandler = this.onChangeInputBarHandler.bind(this);

    // console.log('the button color function:', buttonColorLightGreen);
    return (
      <div
        className="pledgeBoxContainer pledgeHeaderFont"
      >
        <div className="">Making a pledge without a reward</div>
        <div className={inputBarContainerClasses}>
          <div className="inputCurrency">$</div>
          <input
            className={inputBarContainerClasses}
            onChange={e => onChangeInputBarHandler(e)}
            onMouseEnter={e => inFocusGreen(e)}
            onMouseLeave={e => inBlurGray(e)}
            defaultValue={10}
          />
        </div>
        <button
          className={buttonClasses}
          // onClick={buttonClickHandler}
          onMouseEnter={buttonColorDarkGreen}
          onMouseLeave={buttonColorLightGreen}
          type="button"
        >
          Continue
        </button>
      </div>
    );
  }
}

export default PledgeInput;
