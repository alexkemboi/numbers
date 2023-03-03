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

  static isPalidrome(word) {
    let isCharacterEquals = true;
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        isCharacterEquals = false;
      }
    }
    return isCharacterEquals;
  }
}

export default Numbers;
