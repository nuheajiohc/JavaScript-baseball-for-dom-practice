const $ = selector => document.querySelector(selector);

function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(1);
    return "결과 값 String";
  };

  document.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.id === "submit") {
      inputValidator();
    }
  });

  function inputValidator() {
    const inputValue = $("#user-input").value;
    if (inputValue === "") {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      return;
    }
    if (new Set(inputValue).size !== 3) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      inputValue = null;
      return;
    }
    if (inputValue.length !== 3) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      inputValue = null;
      return;
    }
    if (!Number(inputValue)) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      inputValue = null;
      return;
    }
    if (inputValue.includes("0")) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      inputValue = null;
      return;
    }
  }

  function randomNumberGenerator() {
    const randomNumberList = [];
    while (randomNumberList.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberList.includes(randomNumber)) {
        randomNumberList.push(randomNumber);
      }
    }
    return randomNumberList;
  }

  function compareNumber(e) {
    const randomNuberList = randomNumberGenerator();
    // randomNumberList;
    console.log(e);
  }
}
new BaseballGame();
