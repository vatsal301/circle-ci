const expect = require("chai").expect;
// const expect = chai.expect;
const authenticateUser = require("../module");

describe("authenticateUser", () => {
  it("should return true for credentials", () => {
    const result = authenticateUser("vatsal301", "vatsal123");
    expect(result).to.be.true;
  });

  it("should reture false for non-existing user", () => {
    const result = authenticateUser("vatsal301", "123");
    expect(result).to.be.false;
  });
  it("should thorw error if username is missing", () => {
    expect(() => authenticateUser("vatsal123", undefined)).to.throw(
      "Username and Password are required"
    );
  });
  it("should thorw error if password is missing", () => {
    expect(() => authenticateUser(undefined, "vatsal123")).to.throw(
      "Username and Password are required"
    );
  });
});
