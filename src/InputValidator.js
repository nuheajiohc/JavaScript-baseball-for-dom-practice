import $ from "./dom.js";

function inputValidator() {
  const inputValue = $("#user-input").value;
  if (
    inputValue === "" ||
    new Set(inputValue).size !== 3 ||
    inputValue.length !== 3 ||
    !Number(inputValue) ||
    inputValue.includes("0")
  ) {
    alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
    return;
  }
}

export default inputValidator;
