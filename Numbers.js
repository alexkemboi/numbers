class Numbers {
  static isEven(num) {
    return num % 2 === 0;
  }

  static isOdd(num) {
    return num % 2 !== 0;
  }

  static fibonacci(limit) {
    const result = [0, 1];
    let prev = 0,
      curr = 1;

    while (curr <= limit) {
      const next = prev + curr;
      result.push(next);
      prev = curr;
      curr = next;
    }

    return result;
  }
}
const num = 10;
console.log(Numbers.isEven(num));
console.log(Numbers.isOdd(num));
console.log(Numbers.fibonacci(num));
