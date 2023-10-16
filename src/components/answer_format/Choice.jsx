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
  constructor(name, type, num, value) {
    this.array;
    if (value.test(regex1)) {
      this.array = generateAlphabetArray(A, toUpperCase(vlaeu));
    } else if (value.test(regex2)) {
      this.array = generateArrayFrom1ToN(value);
    } else {
      throw new Error();
      // リダイレクトする処理
    }
    this.value = {
      value: name,
      type: type,
      num: num,
    };
    this.jsx = [];
  }
  //   setValueName(name) {
  //     this.value.name = name;
  //   }
  //   setValueType(type) {
  //     this.value.type = type;
  //   }
  //   serValue(name, type) {
  //     this.setValueName(name);
  //     this.setValueType(type);
  //   }
  render() {
    for(const i in this.array)
    this.jsx.push(
      <input type={this.value.type} name={this.value.num}>
        {i}
      </input>
    );
    return (
      <>
        <span>{this.value.num}</span>
        <label>{this.jsx}</label>
      </>
    );
  }
}
