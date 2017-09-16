var ePubMeta = (epubfile) => {
  var EPub = require("epub");
  var epub = new EPub(epubfile);
  if (epubfile == null) {
    throw new Error("epubfile is null.");
  }
};

module.exports = ePubMeta;
