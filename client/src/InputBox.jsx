import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { onChangeInputBarHandler } = this.props;
    onChangeInputBarHandler = onChangeInputBarHandler.bind(this);
    return (
      <div className="inputBarContainer pledgeBoxComponentSizing">
        <div className="inputCurrency" id="currency">$</div>
        <input
          className="pledgeInputBar"
          id="input"
          onChange={e => onChangeInputBarHandler(e)}
          defaultValue={10}
        />
      </div>
    );
  }
}

export default InputBox;