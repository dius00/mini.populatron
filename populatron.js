const fs = require("fs");
const csv = require("csv-parser");

let tally = 0;
const parseIt = async () => {
  return new Promise((resolve) => {
    fs.createReadStream("cities.csv")
      .pipe(csv())
      .on("data", (data) => (tally += parseInt(data.population)))
      .on("end", () => {
        resolve(tally);
      });
  });
};

module.exports = {
  totalPopulation(onFinished) {
    parseIt().then((end) => onFinished(end));
  },
};
