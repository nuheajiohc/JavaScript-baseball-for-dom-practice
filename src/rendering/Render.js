import $ from "../utils/Dom.js";

class Renderer {
  toggleResult(resultState, buttonState) {
    $("#result").style.visibility = resultState;
    $("#game-restart-button").style.visibility = buttonState;
  }

  renderWinningScreen() {
    this.toggleResult("visible", "visible");
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
    <br/>`;
  }

  renderHintScreen(ball, strike) {
    let result = "";
    ball ? (result += `${ball}볼`) : "";
    strike ? (result += ` ${strike}스트라이크`) : "";
    result = result ? result.trim() : "낫싱";

    this.toggleResult("visible", "hidden");
    $("#result").innerText = result;
  }
}

export default Renderer;
