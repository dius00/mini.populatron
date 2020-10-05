const populatron = require("../populatron");
const { expect } = require("chai");

describe("populatron", () => {
  it("should find total population", (done) => {
    // Setup
    const expected = 561453504;
    // Exercise
    populatron.totalPopulation((actual) => {
      // Assert
      expect(actual).to.equal(expected);
      // Teardown
      done();
    });
  });
});
