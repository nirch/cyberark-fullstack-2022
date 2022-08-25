function multiply(a, b, bound) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error(`${a} or ${b} are not numbers`);
  }
  let res = a * b;
  if (res > bound) {
    throw Error(
      `multiplication of ${a} and ${b} with bound ${bound} is not possible`
    );
  }
  return res;
}

console.log(multiply(1, 2, 10));
console.log(multiply(11, 2, 10));
