import React from "react";
function generateAlphabetArray(startChar, endChar) {
  let result = [];
  for (
    let charCode = startChar.charCodeAt(0);
    charCode <= endChar.charCodeAt(0);
    charCode++
  ) {
    result.push(String.fromCharCode(charCode));
  }
  return result;
}

function generateArrayFrom1ToN(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

const regex1 = "^[A-Z]|[a-z]$";
const regex2 = "^[1-9]?[0-9]$";

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      value: {
        value: props.name, //aとか1とか
        type: props.type, //タイプ
        num: props.num, //問題番号
      },
    };
  }

  componentDidMount() {
    const { value } = this.state.value;
    console.log(value);
    console.log(this.state);
    if (value.match(regex1)) {
        this.setState(prev => ({
          ...prev,
          array:generateAlphabetArray("A", value.toUpperCase()),
        }));
        console.log(this.state.value)
        console.log(this.state.array)
    } else if (value.match(regex2)) {
        this.setState(prev => ({
              ...prev,
              array:generateArrayFrom1ToN(parseInt(value, 10)),
            }));
        } else {
      // リダイレクトする処理
      // 例: this.props.history.push('/redirect-path');
    }
  }

  render() {
    const { array, value } = this.state;

    return (
      <>
        <span>{value.num}: </span>
        <label>
          {array.map((item, index) => (
            <>
                <span>{item}</span>
                <input
                  key={index}
                  type={value.type}
                  name={value.num}
                  value={item}
                />
            </>
          ))}
        </label>
      </>
    );
  }
}

export default Choice;
