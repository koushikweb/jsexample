// (function () {
//   console.log(" I am an anonymus function");
// })();

// function higherOrdre(fn) {
//   fn();
// }

// function abc() {
//   console.log(" i am going to pring within higher order function");
// }

// higherOrdre(abc);

console.log(
  ([1, 2, 3].map = (x) => {
    return x * 2;
  })()
);
