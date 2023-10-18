import React from "react";
class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      num: props.num
    };
  }
  render() {
    const value = this.state;
    return (
      <div>
        <span>{value.num}: </span>
        <input type="text" />
      </div>
    );
  }
}

export default Textbox;