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
      compareNumber(e);
    }
  });

  function inputValidator() {
    let inputValue = $("#user-input").value;
    if (inputValue === "") {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      return;
    }
    if (new Set(inputValue).size !== 3) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      $("#user-input").value = null;
      return;
    }
    if (inputValue.length !== 3) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      $("#user-input").value = null;
      return;
    }
    if (!Number(inputValue)) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      $("#user-input").value = null;
      return;
    }
    if (inputValue.includes("0")) {
      alert("입력값이 올바르지 않습니다. 다시 입력해주세요");
      $("#user-input").value = null;
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
    return randomNumberList.map(String);
  }

  const randomNumberList = randomNumberGenerator();
  function compareNumber(e) {
    const inputValue = $("#user-input").value;
    let strikeCnt = 0;
    let ballCnt = 0;
    let result = "";
    for (let i = 0; i <= 2; i += 1) {
      if (inputValue[i] === randomNumberList[i]) {
        strikeCnt += 1;
      } else {
        if (randomNumberList.includes(inputValue[i])) {
          ballCnt += 1;
        }
      }
    }
    if (ballCnt) {
      result += `${ballCnt}볼 `;
    }
    if (strikeCnt) {
      result += `${strikeCnt}스트라이크`;
    }
    if (ballCnt === 0 && strikeCnt === 0) {
      result = "낫싱";
    }
    console.log(randomNumberList);
    result = result.trim();
    if (!(result === "3스트라이크")) {
      $("#result").innerText = result;
      $("#game-restart-button").style.visibility = "hidden";
    }
    if (result === "3스트라이크") {
      $("#result").innerHTML = `
      <div>
        <strong>  
      🎉정답을 맞추셨습니다.🎉
        </strong>
      </div>
      <br/>
      <div>
        게임을 새로 시작하시겠습니까?
      </div>
      <br/>
      `;
      $("#game-restart-button").style.visibility = "visible";
    }
  }
}
new BaseballGame();
