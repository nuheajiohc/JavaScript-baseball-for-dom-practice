const $ = selector => document.querySelector(selector);

function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
  userNumber();
  function userNumber() {
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
}
new BaseballGame();
