import Choice from "../components/Answer_format/Choice";
import Textbox from "../components/Answer_format/Textbox";
import Timer from "../components/Timer";
import React,{ useContext } from "react";
import { URLContext } from "../components/Contexts";

function Home() {
  const {URLData,setURLData} = useContext(URLContext);
  console.log(URLData)
  setURLData("home")
  return (
    <>
      <Textbox num="2"></Textbox>
      <Choice name="h" type="checkbox" num="3"></Choice>
      <Timer time="2"></Timer>
    </>
  );
}
export default Home;
