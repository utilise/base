module.exports = function base(o) {
  return function (k) {
    return o[k]
  }
}