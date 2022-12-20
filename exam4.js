const calcAscii = (str) => {
  let strSplits = str.trim().split(/\s+/);
  let obj = [];

  for (const s in strSplits) {
    const subStrSplits = strSplits[s].split("");
    let checkCharArr = 0;

    for (const ss in subStrSplits) {
      let checkCharAscii = subStrSplits[ss].charCodeAt(0) - 96;
      checkCharArr += checkCharAscii;
    }
    obj.push({ index: s, count: checkCharArr });
  }

  const ans = Math.max(...obj.map((i) => i.index));

  return strSplits[ans];
};

console.log(calcAscii("i am legend"));
console.log(calcAscii("hello world"));
console.log(calcAscii("this is a word"));
