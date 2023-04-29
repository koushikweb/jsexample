const testMe = () => {
  console.log(arguments);
};

const newRest = [2, 3, 6, 8, 9, 11];

console.log(testMe(...newRest));
