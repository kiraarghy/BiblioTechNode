var ePubMeta = (epubfile) => {
  var EPub = require("epub");
  var epub = new EPub(epubfile);
  return "open";
};

module.exports = ePubMeta;
