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
    const result = authenticateUser(undefined, "vatsal123");
    expect(result).to.throw("Username and Password are required");
  });
  it("should thorw error if password is missing", () => {
    const result = authenticateUser("vatsal301", undefined);
    expect(result).to.throw("Username and Password are required");
  });
});
