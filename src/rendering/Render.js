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
        πμ λ΅μ λ§μΆμ¨μ΅λλ€.π
      </strong>
    </div>
    <br/>
    <div>
      κ²μμ μλ‘ μμνμκ² μ΅λκΉ?
    </div>
    <br/>`;
  }

  renderHintScreen(ball, strike) {
    let result = "";
    ball ? (result += `${ball}λ³Ό`) : "";
    strike ? (result += ` ${strike}μ€νΈλΌμ΄ν¬`) : "";
    result = result ? result.trim() : "λ«μ±";

    this.toggleResult("visible", "hidden");
    $("#result").innerText = result;
  }
}

export default Renderer;
