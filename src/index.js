module.exports = function reverse (n) {
  let x =Math.abs(n) + '';
  let result = x.split('').reverse().join('')
  return result; 
}

