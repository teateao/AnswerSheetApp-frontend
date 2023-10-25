import React,{ useContext } from "react";
import { URLContext } from "../components/Contexts";
function Start() {
    const {URLData,setURLData} = useContext(URLContext);
    setURLData("start")
    console.log("start")
    return (
      <div>ここはスタート</div>
    );
  }
export default Start