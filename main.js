const capitalize = (str) => {
  if (!str.length) return str;
  return `${str.at(0).toUpperCase()}${str.slice(1)}`;
};

const reverseString = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str.at(i);
  }
  return res;
};

const calculator = () => {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const mutiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, substract, mutiply, divide };
};

const caesarCipher = (str, shift) => {
  const shiftChar = (charCode, a) => {
    return String.fromCharCode(((charCode + shift - a) % 26) + a);
  };

  const convert = (c) => {
    const charCode = c.charCodeAt();
    if (charCode >= "A".charCodeAt() && charCode <= "Z".charCodeAt())
      return shiftChar(charCode, "A".charCodeAt());
    if (charCode >= "a".charCodeAt() && charCode <= "z".charCodeAt())
      return shiftChar(charCode, "a".charCodeAt());
    return c;
  };

  let res = "";
  for (const i in str) {
    res += convert(str.at(i));
  }
  return res;
};

const analyzeArray = (inArray) => {
  const array = [...inArray]
  const sum = array.sort((a, b) => a - b).reduce((sum, item) => sum + item, 0);

  return {
    average: sum / array.length,
    min: array.at(0),
    max: array.at(-1),
    length: array.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
