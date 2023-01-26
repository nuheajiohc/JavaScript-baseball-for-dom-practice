const $ = selector => document.querySelector(selector);

function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(1);
    return "결과 값 String";
  };
  userNumberValidator();
  function userNumberValidator() {
    $("#submit").addEventListener("click", e => {
      e.preventDefault();
      if ($("#user-input").value === "") {
        alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
        return;
      }
      if (new Set($("#user-input").value).size !== 3) {
        alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
        $("#user-input").value = null;
        return;
      }
      if ($("#user-input").value.length !== 3) {
        alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
        $("#user-input").value = null;
        return;
      }
      if (!Number($("#user-input").value)) {
        alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
        $("#user-input").value = null;
        return;
      }
      if ($("#user-input").value.includes("0")) {
        alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
        $("#user-input").value = null;
        return;
      }
    });
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
}
new BaseballGame();
