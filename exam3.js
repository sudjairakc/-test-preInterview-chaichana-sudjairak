const reverseWord = (str) => {
  let strSplits = str.trim().split(/\s+/);
  let newStrSplits = [];

  for (const s in strSplits) {
    const subStrSplits = strSplits[s].split("");
    const reverseSubStrSplits = subStrSplits.reverse();
    const newSubStrSplits = reverseSubStrSplits.join("");
    newStrSplits.push(newSubStrSplits);
  }
  return newStrSplits.join(" ");
};

console.log(reverseWord("This is an example!"));
console.log(reverseWord("double  spaces"));
