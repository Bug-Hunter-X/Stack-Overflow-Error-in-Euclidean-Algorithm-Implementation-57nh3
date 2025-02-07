function foo(a, b) {
  // Handle cases where a or b is 0 or negative
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) {
    return a;
  }
  if (a === 0) {
    return b;
  }

  if (a === b) {
    return a;
  }

  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 20)); // Output: 5
console.log(foo(25, 15)); // Output: 5
console.log(foo(20, 12)); // Output: 4
console.log(foo(1, 0)); // Output: 1
console.log(foo(0, 5)); // Output: 5
console.log(foo(-10, 5)); //Output: 5