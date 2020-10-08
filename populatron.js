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
  async totalPopulation(onFinished) {
    onFinished(await parseIt());
    //parseIt().then((end) => onFinished(end));
  },
};
