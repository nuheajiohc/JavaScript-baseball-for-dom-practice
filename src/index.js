import $ from "./utils/dom.js";
import inputValidator from "./InputValidator.js";
import makeRandomNumber from "./numberGenerator.js";

class BaseballGame {
  constructor() {
    this.randomNumberList = [];
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }

  init() {
    $("#result").style.visibility = "hidden";
    $("#game-restart-button").style.visibility = "hidden";
    this.randomNumberList = makeRandomNumber();
    this.initEventLisenters();
  }

  handleRestart() {
    this.randomNumberList = makeRandomNumber();
    $("#result").style.visibility = "hidden";
    $("#game-restart-button").style.visibility = "hidden";
  }

  handleSubmit(e) {
    e.preventDefault();
    inputValidator();
    this.countBallStrike();
  }

  getHint(ballCnt, strikeCnt) {
    let result = "";
    ballCnt ? (result += `${ballCnt}볼`) : "";
    strikeCnt ? (result += ` ${strikeCnt}스트라이크`) : "";
    return result ? result.trim() : "낫싱";
  }

  render(ballCnt, strikeCnt) {
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
      $("#result").innerText = this.getHint(ballCnt, strikeCnt);
      $("#game-restart-button").style.visibility = "hidden";
    }
  }

  countBallStrike() {
    const inputValue = $("#user-input").value;
    let strikeCnt = 0;
    let ballCnt = 0;
    for (let i = 0; i <= 2; i += 1) {
      if (inputValue[i] === this.randomNumberList[i]) {
        strikeCnt += 1;
      } else if (this.randomNumberList.includes(inputValue[i])) {
        ballCnt += 1;
      }
    }
    console.log(this.randomNumberList);
    this.render(ballCnt, strikeCnt);
  }

  initEventLisenters() {
    $("#submit").addEventListener("click", this.handleSubmit.bind(this));
    $("#game-restart-button").addEventListener(
      "click",
      this.handleRestart.bind(this)
    );
  }
}

const baseballGame = new BaseballGame();
baseballGame.init();
