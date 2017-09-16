var assert = require("assert");

var ePubMeta = require("../src/ePubMeta.js");

describe("ePubMeta", () => {
  it("Should return open when called", () => {
    assert.equal("open", ePubMeta("../testEpubs/1.epub"));
  });
});
