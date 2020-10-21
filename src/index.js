module.exports = function check(str, bracketsConfig) {
  let isItBracket = (item) => {
    return bracketsConfig.flat().includes(item)
  };

  let condition = (item) => {
    let currIndex = bracketsConfig.flat().indexOf(item);
    let nextStuckIitem = bracketsConfig.flat()[bracketsConfig.flat().indexOf(stuck[stuck.length - 1]) + 1];
    console.log(nextStuckIitem);
    stuck.length ? nextStuckIitem === bracketsConfig.flat()[currIndex] ? stuck.pop() : stuck.push(bracketsConfig.flat()[currIndex]) : stuck.push(bracketsConfig.flat()[currIndex]);
  };
  let stuck = [];
  let cleanArr = str.split('').filter(isItBracket);

  cleanArr.forEach(condition);

  return !stuck.length

}
