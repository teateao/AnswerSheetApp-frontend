import Choice from "../components/Answer_format/Choice";
import Textbox from "../components/Answer_format/Textbox";
import Timer from "../components/Timer";
import React from "react";
class Home extends React.Component {
  render() {
    return (
      <>
      <Textbox num="2"></Textbox>
        <Choice name="h" type="checkbox" num="3"></Choice>
        <Timer time="2"></Timer>
      </>
    );
  }
}
export default Home;
