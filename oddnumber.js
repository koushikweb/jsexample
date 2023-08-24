// print odd number from 0 to 20

const findOdds = (range) => {
  let odd = "";
  for (let i = 0; i < range; i++) {
    if (i % 2 !== 0) {
      odd += ` ${i} ,`;
    }
  }
  return odd;
};

console.log(findOdds(20));
