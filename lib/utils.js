const Utils = function () {
  function decodeLatexStr (latexStr) {
    if (latexStr === null || latexStr === undefined) {
      return "";
    }
    // 去除服务端无用都多余都 + 号， 实际是空格
    var latexStr = latexStr.replace(/\+/g, " ");
    latexStr = decodeURIComponent(latexStr);
    // 替换align 到 katex 支持到 aligned
    latexStr = latexStr.replace(/\{align\}/g, "{aligned}");
    return latexStr;
  }
}
module.exports = Utils();