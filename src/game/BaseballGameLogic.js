import makeRandomNumber from "./NumberGenerator.js";

class BaseballGameLogic {
  #ball;
  #strike;

  constructor() {
    this.randomNumberList = makeRandomNumber();
    this.#ball = 0;
    this.#strike = 0;
  }

  initBall() {
    this.#ball = 0;
  }

  initStike() {
    this.#strike = 0;
  }

  setRandomNumber() {
    this.randomNumberList = makeRandomNumber();
  }

  getRandomNumber() {
    return this.randomNumberList;
  }

  countBall(userNumber) {
    for (let i = 0; i < 3; i += 1) {
      const isBall =
        userNumber[i] !== this.randomNumberList[i] &&
        this.randomNumberList.includes(userNumber[i]);
      if (isBall) this.#ball += 1;
    }
  }

  countStrike(userNumber) {
    for (let i = 0; i < 3; i += 1) {
      if (userNumber[i] === this.randomNumberList[i]) this.#strike += 1;
    }
  }

  getBallStrike() {
    console.log(this.randomNumberList);
    return { ball: this.#ball, strike: this.#strike };
  }
}

export default BaseballGameLogic;
