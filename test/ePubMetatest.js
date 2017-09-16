var assert = require("assert");

var ePubMeta = require("../src/ePubMeta.js");

describe("ePubMeta", () => {
  it("Should throw errors when passed nothing", () => {
    assert.throws(
      () => {
        ePubMeta();
      },
      Error,
      "epubfile is null."
    );
  });
});
