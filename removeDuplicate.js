// Remove duplicate characters from array

const str = ["AAAA", "BB", "CCCCC", "D", "EE", "FFFFF"];

//const str = "AAAABBCCCCCDEEFFFFF";

let x = "";
const removeDuplicate = (str) => {
  let checkifArray = Array.isArray(str);
  if (checkifArray) {
    str.map((a, i) => {
      x += a;
    });
    return [...new Set(x)];
  } else {
    return [...new Set(str)];
  }
};
console.log(removeDuplicate(str));
