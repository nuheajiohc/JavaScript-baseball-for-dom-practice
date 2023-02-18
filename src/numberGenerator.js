const { Random } = MissionUtils;

function makeRandomNumber() {
  const randomNumberList = [];
  while (randomNumberList.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!randomNumberList.includes(randomNumber)) {
      randomNumberList.push(randomNumber);
    }
  }
  return randomNumberList.map(String);
}

export default makeRandomNumber;
