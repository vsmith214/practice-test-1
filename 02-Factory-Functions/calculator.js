let createCalculator = () => {
  let total = 0;

  return {
    value: () => total,
    add: num => total += num,
    subtract: num => total -= num,
    clear: () => total = 0
  }
}