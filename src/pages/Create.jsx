import React, { useContext, useState } from "react";
import { URLContext } from "../components/Contexts";

function Create() {
  const [stats, setStats] = useState({
    timercheck: true,
    time: 0,
    type: "textbox",
    questionNum: 0,
    instanceNam: "",
    compulsion: false,
  });

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const newValue =
      name === "timercheck"
        ? !stats.timercheck
        : name === "compulsion"
        ? !stats.compulsion
        : value;
    setStats(prev => ({ ...prev, [name]: newValue }));
    // console.log(stats);
  };

  const { URLData, setURLData } = useContext(URLContext);
  setURLData("create");

  return (
    <>
      <div>ここはクリエイト</div>

      <label htmlFor="instanceName">名前:</label>
      <input
        type="text"
        id="instanceNam"
        name="instanceNam"
        onChange={handleInputChange}
      />
      <label htmlFor="questionNum">問題数:</label>
      <input
        type="number"
        id="questionNum"
        name="questionNum"
        min="0"
        max="1000"
        value={stats.questionNum}
        onChange={handleInputChange}
      />

      <label htmlFor="timercheck">時間を測る:</label>
      <input
        type="checkbox"
        id="timercheck"
        name="timercheck"
        onChange={handleInputChange}
        checked={stats.timercheck}
      />

      {stats.timercheck ? (
        <div>
          <label htmlFor="time">時間:</label>
          <input
            type="number"
            id="time"
            name="time"
            min="0"
            max="1000"
            value={stats.time}
            onChange={handleInputChange}
          />
          <label htmlFor="compulsion">強制:</label>
          <input
            type="checkbox"
            id="compulsion"
            name="compulsion"
            onChange={handleInputChange}
            checked={stats.compulsion}
          />
        </div>
      ) : null}

      <span>タイプ</span>

      <label htmlFor="textbox">テキストボックス:</label>
      <input
        type="radio"
        id="textbox"
        name="type"
        value="textbox"
        checked={stats.type === "textbox"}
        onChange={handleInputChange}
      />

      <label htmlFor="radioButton">ラジオボタン:</label>
      <input
        type="radio"
        id="radioButton"
        name="type"
        value="RadioButton"
        checked={stats.type === "RadioButton"}
        onChange={handleInputChange}
      />

      <label htmlFor="checkbox">チェックボックス:</label>
      <input
        type="radio"
        id="checkbox"
        name="type"
        value="Checkbox"
        checked={stats.type === "Checkbox"}
        onChange={handleInputChange}
      />

      <button>作成</button>
    </>
  );
}

export default Create;
