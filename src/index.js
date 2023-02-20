import $ from "./utils/Dom.js";
import inputValidator from "./game/Validator.js";
import BaseballGameLogic from "./game/BaseballGameLogic.js";
import Renderer from "./rendering/Render.js";

class BaseballGame {
  constructor() {
    this.gameLogic = new BaseballGameLogic();
    this.gameRenderer = new Renderer();
  }

  init() {
    this.gameRenderer.toggleResult("hidden", "hidden");
    this.gameLogic.setRandomNumber();
    this.initEventListeners();
  }

  countBallStrike() {
    const inputValue = $("#user-input").value;
    this.gameLogic.countBall(inputValue);
    this.gameLogic.countStrike(inputValue);
    this.render(this.gameLogic.getBallStrike());
    this.gameLogic.initBall();
    this.gameLogic.initStike();
  }

  render({ ball, strike }) {
    $("#user-input").value = null;
    if (strike === 3) {
      this.gameRenderer.renderWinningScreen();
    } else {
      this.gameRenderer.renderHintScreen(ball, strike);
    }
  }

  handleRestart() {
    $("#user-input").focus();
    this.gameLogic.setRandomNumber();
    this.gameRenderer.toggleResult("hidden", "hidden");
  }

  handleSubmit(e) {
    e.preventDefault();
    $("#user-input").focus();
    if (inputValidator() === false) {
      $("#user-input").value = null;
      this.gameRenderer.toggleResult("hidden", "hidden");
      return;
    }
    this.countBallStrike();
  }

  initEventListeners() {
    $("#submit").addEventListener("click", this.handleSubmit.bind(this));
    $("#game-restart-button").addEventListener(
      "click",
      this.handleRestart.bind(this)
    );
  }
}

const baseballGame = new BaseballGame();
baseballGame.init();
