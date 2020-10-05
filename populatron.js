const fs = require("fs");
const csv = require("csv-parser");

const filepath = "./cities.csv";

async function calculate() {
  let popArr = [];
  fs.createReadStream(filepath)
    .pipe(csv())
    .on("data", (row) => {
      popArr.push(row.population);
    })
    .on(
      "end",
      () =>
        (popArr = popArr.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        ))
    );
  return Promise.resolve(popArr);
}

module.exports = {
  totalPopulation(onFinished) {
    onFinished = calculate();
    return onFinished.then((arr) => arr.reduce((a, b) => a + b));
  },
};
