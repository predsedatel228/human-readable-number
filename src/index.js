module.exports = function toReadable(number) {
  number = String(number);
  let h = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  let t = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let d = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let s = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  if (number.length === 1) {
    return s[number]
  }
  if (number.length === 2) {
    if (number < 20) {
      return t[number - 10]
    }
    if (number >= 20) {
      if (number%10 === 0) {
        return d[number/10-2]
      }
      else return d[Math.floor(number / 10 - 2)] + ' ' + s[number % 10]
    }
  }
  if (number.length === 3) {
    if (number%100 === 0) {
      return h[Math.floor(number / 100 - 1)]
    }
    if (0 < number%100 && number%100 <= 9) {
      return h[Math.floor(number / 100 - 1)] + ' ' + s[number % 10]
    }
    if (9 < number%100 && number%100 < 20) {
      return h[Math.floor(number / 100 - 1)] + ' ' + t[number%100-10]
    }
    if (number % 100 >= 20) {
      if (number%10 !==0){
        return h[Math.floor(number / 100 - 1)] + ' ' + d[number[1] - 2] + ' ' + s[number % 10]
      }
      if (number%10 === 0) {
        return h[Math.floor(number / 100 - 1)] + ' ' + d[number[1] - 2]
      }
    }
  }
}