import $ from "./utils/dom.js";
import inputValidator from "./InputValidator.js";
import makeRandomNumber from "./numberGenerator.js";

function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  this.init = () => {
    $("#result").style.visibility = "hidden";
    $("#game-restart-button").style.visibility = "hidden";
  };

  let randomNumberList = makeRandomNumber();
  const handleRestart = e => {
    randomNumberList = makeRandomNumber();
    this.init();
  };

  const getHint = (ballCnt, strikeCnt) => {
    let result = "";
    ballCnt ? (result += `${ballCnt}볼`) : "";
    strikeCnt ? (result += ` ${strikeCnt}스트라이크`) : "";
    return result ? result.trim() : "낫싱";
  };

  const renderResult = (ballCnt, strikeCnt) => {
    $("#user-input").value = null;
    if (strikeCnt === 3) {
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
    } else {
      $("#result").style.visibility = "visible";
      $("#result").innerText = getHint(ballCnt, strikeCnt);
      $("#game-restart-button").style.visibility = "hidden";
    }
  };

  function countBallStrike() {
    const inputValue = $("#user-input").value;
    let strikeCnt = 0;
    let ballCnt = 0;
    for (let i = 0; i <= 2; i += 1) {
      if (inputValue[i] === randomNumberList[i]) {
        strikeCnt += 1;
      } else if (randomNumberList.includes(inputValue[i])) {
        ballCnt += 1;
      }
    }
    console.log(randomNumberList);
    renderResult(ballCnt, strikeCnt);
  }

  $("#submit").addEventListener("click", e => {
    e.preventDefault();
    inputValidator();
    countBallStrike();
  });

  $("#game-restart-button").addEventListener("click", handleRestart);
}
const baseballGame = new BaseballGame();
baseballGame.init();
