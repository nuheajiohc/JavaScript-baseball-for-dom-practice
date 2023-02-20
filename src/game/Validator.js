import $ from "../utils/Dom.js";

function hasValidLength(input) {
  return input.length === 3;
}

function hasUniqueDigit(input) {
  return new Set(input).size === 3;
}

function isNumber(input) {
  return Boolean(Number(input));
}

function hasZero(input) {
  return input.includes("0");
}

function inputValidator() {
  const inputValue = $("#user-input").value;
  if (
    inputValue === "" ||
    !hasValidLength(inputValue) ||
    !hasUniqueDigit(inputValue) ||
    !isNumber(inputValue) ||
    hasZero(inputValue)
  ) {
    alert("중복되지 않는 세자리 숫자(1-9)로 다시 입력해주세요");
    return false;
  }
}

export default inputValidator;
