function foo(a, b) {
  if (a === b) {
    return true;
  }

  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: true
console.log(foo(15, 20)); // Output: true
console.log(foo(25, 15)); // Output: true
console.log(foo(20, 12)); // Output: true

//But what about:
console.log(foo(1, 0)); // Stack overflow error